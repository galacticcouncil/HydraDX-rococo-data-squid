import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class BlockHeader {
    constructor(props?: Partial<BlockHeader>) {
        Object.assign(this, props)
    }

    /**
     * blockNumber
     */
    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    paraChainBlockHeight!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    relayChainBlockHeight!: bigint
}
