import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {PoolType} from "./_poolType"
import {Pool} from "./pool.model"
import {BlockHeader} from "./blockHeader.model"

@Entity_()
export class HistoricalPoolPriceData {
    constructor(props?: Partial<HistoricalPoolPriceData>) {
        Object.assign(this, props)
    }

    /**
     * PoolId-paraChainBlockHeight
     */
    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 3, nullable: false})
    poolType!: PoolType

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetABalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetBBalance!: bigint

    @Index_()
    @ManyToOne_(() => Pool, {nullable: true})
    pool!: Pool

    @Column_("int4", {nullable: false})
    relayChainBlockHeight!: number

    @Column_("int4", {nullable: false})
    paraChainBlockHeight!: number

    @Index_()
    @ManyToOne_(() => BlockHeader, {nullable: true})
    block!: BlockHeader | undefined | null
}
