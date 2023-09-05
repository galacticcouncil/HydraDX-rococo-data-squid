type Item = BatchProcessorItem<typeof processor>;

type Ctx = BatchContext<Store, Item>;

interface TransferEvent {
  id: string;
  assetId: number;
  blockNumber: number;
  timestamp: Date;
  extrinsicHash?: string;
  from: string;
  to: string;
  amount: bigint;
  fee?: bigint;
}

interface LBPPoolDataUpdate {
  owner: string;
  feeCollector: string;
  initialWeight: number;
  finalWeight: number;
  fee: [number, number];
  startBlockNumber?: number;
  endBlockNumber?: number;
  repayTarget?: bigint;
}

interface PoolCreatedEvent {
  id: string;
  assetAId: number;
  assetBId: number;
  assetABalance: bigint;
  assetBBalance: bigint;
  poolType: PoolType;
  createdAt: Date;
  createdAtParaBlock: number;
  lbpPoolData?: LBPPoolDataUpdate;
}

interface PoolPriceData {
  id: string;
  poolType: PoolType;
  assetABalance: bigint;
  assetBBalance: bigint;
  pool: Pool;
  relayChainBlockHeight: number;
  paraChainBlockHeight: number;
}
