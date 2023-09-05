import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"

@Entity_()
export class LBPPoolData {
    constructor(props?: Partial<LBPPoolData>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    feeCollector!: Account | undefined | null

    @Column_("int4", {array: true, nullable: true})
    fee!: (number | undefined | null)[] | undefined | null

    @Column_("int4", {nullable: true})
    startBlockNumber!: number | undefined | null

    @Column_("int4", {nullable: true})
    endBlockNumber!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    repayTarget!: bigint | undefined | null

    @Column_("int4", {nullable: true})
    initialWeight!: number | undefined | null

    @Column_("int4", {nullable: true})
    finalWeight!: number | undefined | null
}
