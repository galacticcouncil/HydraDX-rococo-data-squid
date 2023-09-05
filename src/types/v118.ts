import type {Result, Option} from './support'

export interface Position {
    assetId: number
    amount: bigint
    shares: bigint
    price: [bigint, bigint]
}
