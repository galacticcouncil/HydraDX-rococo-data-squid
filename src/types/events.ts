import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v174 from './v174'

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV109(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV109(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV109)
        return this._chain.decodeEvent(this.event)
    }
}

export class LbpPoolCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LBP.PoolCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool was created by the `CreatePool` origin.
     */
    get isV174(): boolean {
        return this._chain.getEventHash('LBP.PoolCreated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
    }

    /**
     * Pool was created by the `CreatePool` origin.
     */
    get asV174(): {pool: Uint8Array, data: v174.Pool} {
        assert(this.isV174)
        return this._chain.decodeEvent(this.event)
    }
}

export class LbpPoolUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LBP.PoolUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool data were updated.
     */
    get isV174(): boolean {
        return this._chain.getEventHash('LBP.PoolUpdated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
    }

    /**
     * Pool data were updated.
     */
    get asV174(): {pool: Uint8Array, data: v174.Pool} {
        assert(this.isV174)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV109(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
    }

    /**
     * Transfer succeeded.
     */
    get asV109(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV109)
        return this._chain.decodeEvent(this.event)
    }
}
