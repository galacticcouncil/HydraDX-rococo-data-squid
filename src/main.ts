import { In } from "typeorm";
import { BatchBlock } from "@subsquid/substrate-processor";
import * as hexUtil from "@subsquid/util-internal-hex";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { SystemAccountStorage, TokensAccountsStorage } from "./types/storage";
import {
  Account,
  HistoricalPoolPriceData,
  LBPPoolData,
  Pool,
  Transfer,
} from "./model";
import {
  BalancesTransferEvent,
  LbpPoolCreatedEvent,
  LbpPoolUpdatedEvent,
  TokensTransferEvent,
} from "./types/events";
import { ParachainSystemSetValidationDataCall } from "./types/calls";
import { isNotNullOrUndefined } from "./helpers";

processor.run(new TypeormDatabase(), async (ctx) => {
  const poolsData = await getPools(ctx);
  const lbpPoolsUpdates = await getLBPPoolUpdates(ctx);
  const transfersData = await getTransfers(ctx, poolsData);

  let accountIds = new Set<string>();
  for (let t of transfersData) {
    accountIds.add(t.from);
    accountIds.add(t.to);
  }

  for (let p of poolsData) {
    accountIds.add(p.id);
    if (p.lbpPoolData?.owner) accountIds.add(p.lbpPoolData.owner);
    if (p.lbpPoolData?.feeCollector) accountIds.add(p.lbpPoolData.feeCollector);
  }

  for (let p in lbpPoolsUpdates) {
    accountIds.add(lbpPoolsUpdates[p].owner);
    accountIds.add(lbpPoolsUpdates[p].feeCollector);
  }

  let accounts = accountIds
    ? await ctx.store
        .findBy(Account, { id: In([...accountIds]) })
        .then((accounts) => {
          return new Map(accounts.map((a) => [a.id, a]));
        })
    : new Map();

  let transfers: Transfer[] = [];

  for (let t of transfersData) {
    let { id, assetId, extrinsicHash, amount, fee, blockNumber } = t;

    let from = getAccount(accounts, t.from);
    let to = getAccount(accounts, t.to);

    transfers.push(
      new Transfer({
        id,
        assetId,
        extrinsicHash,
        from,
        to,
        amount,
        fee,
      })
    );
  }

  let pools: Pool[] = [];
  let lbpPoolsData = new Map<string, LBPPoolData>();

  for (let p of poolsData) {
    let {
      id,
      assetAId,
      assetBId,
      assetABalance,
      assetBBalance,
      createdAt,
      createdAtParaBlock,
      lbpPoolData,
    } = p;

    if (lbpPoolData) {
      lbpPoolsData.set(
        id,
        new LBPPoolData({
          id: id,
          owner: getAccount(accounts, lbpPoolData.owner),
          startBlockNumber: lbpPoolData.startBlockNumber,
          endBlockNumber: lbpPoolData.endBlockNumber,
          feeCollector: getAccount(accounts, lbpPoolData.feeCollector),
          fee: lbpPoolData.fee,
          initialWeight: lbpPoolData.initialWeight,
          finalWeight: lbpPoolData.finalWeight,
        })
      );
    }
    pools.push(
      new Pool({
        id: id,
        account: getAccount(accounts, id),
        assetAId,
        assetBId,
        assetABalance,
        assetBBalance,
        createdAt,
        createdAtParaBlock,
      })
    );
  }

  const poolsPriceData: HistoricalPoolPriceData[] = [];
  const allPools = await ctx.store.find(Pool);
  const poolPriceData = await getPoolPriceData(ctx, allPools);

  for (let p of poolPriceData) {
    poolsPriceData.push(new HistoricalPoolPriceData(p));
  }

  for (let p in lbpPoolsUpdates) {
    const data = lbpPoolsData.get(p);
    const newData = lbpPoolsUpdates[p];

    if (!data) continue;

    data.owner = getAccount(accounts, newData.owner);
    data.feeCollector = getAccount(accounts, newData.feeCollector);
    data.initialWeight = newData.initialWeight;
    data.finalWeight = newData.finalWeight;
    data.repayTarget = newData.repayTarget;
    data.startBlockNumber = newData.startBlockNumber;
    data.endBlockNumber = newData.endBlockNumber;
  }

  await ctx.store.save(Array.from(accounts.values()));
  await ctx.store.insert(transfers);
  await ctx.store.save(pools);
  await ctx.store.save(Array.from(lbpPoolsData.values()));
  await ctx.store.insert(poolsPriceData);
});

async function getLBPPoolUpdates(ctx: Ctx) {
  const updates: { [key: string]: LBPPoolDataUpdate } = {};
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == "LBP.PoolUpdated") {
        const e = new LbpPoolUpdatedEvent(ctx, item.event);

        const data = e.asV174.data;

        updates[hexUtil.toHex(e.asV174.pool)] = {
          startBlockNumber: data.start,
          endBlockNumber: data.end,
          repayTarget: data.repayTarget,
          fee: data.fee,
          initialWeight: data.initialWeight,
          finalWeight: data.finalWeight,
          feeCollector: hexUtil.toHex(data.feeCollector),
          owner: hexUtil.toHex(data.owner),
        };
      }
    }
  }
  return updates;
}

async function getPoolPriceData(
  ctx: Ctx,
  pools: Pool[]
): Promise<PoolPriceData[]> {
  let poolPrices: Promise<PoolPriceData | null>[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == "ParachainSystem.set_validation_data") {
        let c = new ParachainSystemSetValidationDataCall(ctx, item.call);
        const relayChainBlockNumber =
          c.asV109.data.validationData.relayParentNumber;
        const parachainBlockNumber = block.header.height;

        poolPrices = poolPrices.concat(
          pools.map(
            async (p) =>
              new Promise<PoolPriceData | null>((resolve) => {
                if (p.createdAtParaBlock > parachainBlockNumber) {
                  resolve(null);
                  return;
                }

                Promise.all([
                  getAssetBalance(ctx, block, p.assetAId, p.id),
                  getAssetBalance(ctx, block, p.assetBId, p.id),
                ]).then(([assetABalance, assetBBalance]) => {
                  resolve({
                    id: p.id + "-" + parachainBlockNumber,
                    assetABalance: assetABalance,
                    assetBBalance: assetBBalance,
                    pool: p,
                    relayChainBlockHeight: relayChainBlockNumber,
                    paraChainBlockHeight: parachainBlockNumber,
                  });
                });
              })
          )
        );
      }
    }
  }

  return (await Promise.all(poolPrices)).filter(isNotNullOrUndefined);
}

function getTransfers(ctx: Ctx, pools: PoolCreatedEvent[]): TransferEvent[] {
  let transfers: TransferEvent[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == "Balances.Transfer") {
        let e = new BalancesTransferEvent(ctx, item.event);
        // TODO: Extract production
        const { from, to, amount } = (() => {
          return { ...e.asV109 };
        })();
        if (isPoolTransfer(pools, hexUtil.toHex(from), hexUtil.toHex(to))) {
          transfers.push({
            id: item.event.id,
            assetId: 0,
            blockNumber: block.header.height,
            timestamp: new Date(block.header.timestamp),
            extrinsicHash: item.event.extrinsic?.hash,
            from: hexUtil.toHex(from),
            to: hexUtil.toHex(to),
            amount: amount,
            fee: item.event.extrinsic?.fee || 0n,
          });
        }
      } else if (item.name == "Tokens.Transfer") {
        let e = new TokensTransferEvent(ctx, item.event);
        //TODO: Extract production
        const { currencyId, from, to, amount } = (() => {
          return { ...e.asV109 };
        })();
        if (isPoolTransfer(pools, hexUtil.toHex(from), hexUtil.toHex(to))) {
          transfers.push({
            id: item.event.id,
            assetId: currencyId,
            blockNumber: block.header.height,
            timestamp: new Date(block.header.timestamp),
            extrinsicHash: item.event.extrinsic?.hash,
            from: hexUtil.toHex(from),
            to: hexUtil.toHex(to),
            amount: amount,
            fee: item.event.extrinsic?.fee || 0n,
          });
        }
      }
    }
  }
  return transfers;
}

async function getPools(ctx: Ctx): Promise<PoolCreatedEvent[]> {
  let pools: PoolCreatedEvent[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == "LBP.PoolCreated") {
        const e = new LbpPoolCreatedEvent(ctx, item.event);

        const { pool, data } = (() => {
          return { ...e.asV174 };
        })();

        const assetABalance = await getAssetBalance(
          ctx,
          block,
          data.assets[0],
          hexUtil.toHex(pool)
        );

        const assetBBalance = await getAssetBalance(
          ctx,
          block,
          data.assets[1],
          hexUtil.toHex(pool)
        );

        pools.push({
          id: hexUtil.toHex(pool),
          assetAId: data.assets[0],
          assetBId: data.assets[1],
          assetABalance,
          assetBBalance,
          createdAt: new Date(block.header.timestamp),
          createdAtParaBlock: block.header.height,
          lbpPoolData: {
            owner: hexUtil.toHex(data.owner),
            feeCollector: hexUtil.toHex(data.feeCollector),
            fee: data.fee,
            initialWeight: data.initialWeight,
            finalWeight: data.finalWeight,
          },
        });
      }
    }
  }
  return pools;
}

function getAccount(m: Map<string, Account>, id: string): Account {
  let acc = m.get(id);
  if (acc == null) {
    acc = new Account();
    acc.id = id;
    m.set(id, acc);
  }
  return acc;
}

function isPoolTransfer(
  pools: PoolCreatedEvent[],
  from: string,
  to: string
): boolean {
  for (let p of pools) {
    if (p.id == from || p.id == to) return true;
  }
  return false;
}

async function getAssetBalance(
  ctx: Ctx,
  block: BatchBlock<Item>,
  assetId: number,
  account: string
) {
  const acc = hexUtil.decodeHex(account);
  if (assetId === 0) {
    const storage = new SystemAccountStorage(ctx, block.header);
    return storage.asV109.get(acc).then((data) => data.data.free);
  } else {
    const storage = new TokensAccountsStorage(ctx, block.header);
    return storage.asV109.get(acc, assetId).then((data) => data.free);
  }
}
