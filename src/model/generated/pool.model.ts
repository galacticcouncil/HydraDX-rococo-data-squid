import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {PoolType} from "./_poolType"
import {HistoricalPoolPriceData} from "./historicalPoolPriceData.model"

@Entity_()
export class Pool {
    constructor(props?: Partial<Pool>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Column_("int4", {nullable: false})
    assetAId!: number

    @Column_("int4", {nullable: false})
    assetBId!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetABalance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetBBalance!: bigint

    @Column_("varchar", {length: 3, nullable: false})
    poolType!: PoolType

    @Column_("int4", {nullable: false})
    createdAtParaBlock!: number

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @OneToMany_(() => HistoricalPoolPriceData, e => e.pool)
    historicalBalances!: HistoricalPoolPriceData[]
}
