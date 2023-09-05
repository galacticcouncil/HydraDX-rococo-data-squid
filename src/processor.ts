import { lookupArchive } from "@subsquid/archive-registry";
import {
  BatchContext,
  BatchProcessorCallItem,
  BatchProcessorEventItem,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";

export const processor = new SubstrateBatchProcessor()
  .setDataSource({
    // Lookup archive by the network name in the Subsquid registry
    //archive: lookupArchive("kusama", {release: "FireSquid"})

    // Use archive created by archive/docker-compose.yml
    archive: "https://hydradx-rococo-firesquid.play.hydration.cloud/graphql",
    chain: "wss://hydradx-rococo-rpc.play.hydration.cloud",
  })
  .addEvent("Balances.Transfer", {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true,
        },
      },
    },
  } as const)
  .addEvent("Tokens.Transfer", {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true,
        },
      },
    },
  } as const)
  .addEvent("LBP.PoolUpdated", {
    data: {
      event: {
        args: true,
      },
    },
  } as const)
  .addEvent("LBP.PoolCreated", {
    data: {
      event: {
        args: true,
      },
    },
  } as const)
  .addCall("ParachainSystem.set_validation_data", {} as const)
  .setBlockRange({ from: 1650000 });

export type Item = BatchProcessorItem<typeof processor>;
export type EventItem = BatchProcessorEventItem<typeof processor>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type ProcessorContext<Store> = BatchContext<Store, Item>;