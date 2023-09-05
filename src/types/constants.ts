import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v109 from './v109'
import * as v115 from './v115'
import * as v142 from './v142'
import * as v155 from './v155'
import * as v164 from './v164'

export class AssetRegistryNativeAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset Id
     */
    get isV109() {
        return this._chain.getConstantTypeHash('AssetRegistry', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset Id
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('AssetRegistry', 'NativeAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('AssetRegistry', 'NativeAssetId') != null
    }
}

export class AssetRegistrySequentialIdStartAtConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV135() {
        return this._chain.getConstantTypeHash('AssetRegistry', 'SequentialIdStartAt') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('AssetRegistry', 'SequentialIdStartAt')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('AssetRegistry', 'SequentialIdStartAt') != null
    }
}

export class AuthorshipUncleGenerationsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The number of blocks back we should accept uncles.
     *  This means that we will deal with uncle-parents that are
     *  `UncleGenerations + 1` before `now`.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The number of blocks back we should accept uncles.
     *  This means that we will deal with uncle-parents that are
     *  `UncleGenerations + 1` before `now`.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Authorship', 'UncleGenerations')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') != null
    }
}

export class BalancesExistentialDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Balances', 'ExistentialDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
    }
}

export class BalancesMaxLocksConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Balances', 'MaxLocks')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
    }
}

export class BalancesMaxReservesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Balances', 'MaxReserves')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
    }
}

export class BondsFeeReceiverConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Protocol fee receiver.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Bonds', 'FeeReceiver') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
    }

    /**
     *  Protocol fee receiver.
     */
    get asV172(): Uint8Array {
        assert(this.isV172)
        return this._chain.getConstant('Bonds', 'FeeReceiver')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Bonds', 'FeeReceiver') != null
    }
}

export class BondsPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The pallet id, used for deriving its sovereign account ID.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Bonds', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  The pallet id, used for deriving its sovereign account ID.
     */
    get asV172(): Uint8Array {
        assert(this.isV172)
        return this._chain.getConstant('Bonds', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Bonds', 'PalletId') != null
    }
}

export class BondsProtocolFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Protocol fee.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Bonds', 'ProtocolFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Protocol fee.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Bonds', 'ProtocolFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Bonds', 'ProtocolFee') != null
    }
}

export class CircuitBreakerDefaultMaxAddLiquidityLimitPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be added in a block.
     *  Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
     *  If set to None, the limits are not enforced.
     */
    get isV138() {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxAddLiquidityLimitPerBlock') === 'ca64c770eb4dab87f2b6bc317381cbf5987c334a6147e12a94fca65cffa082c4'
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be added in a block.
     *  Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
     *  If set to None, the limits are not enforced.
     */
    get asV138(): ([number, number] | undefined) {
        assert(this.isV138)
        return this._chain.getConstant('CircuitBreaker', 'DefaultMaxAddLiquidityLimitPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxAddLiquidityLimitPerBlock') != null
    }
}

export class CircuitBreakerDefaultMaxNetTradeVolumeLimitPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be traded in a block.
     *  Represented as a non-zero fraction (nominator, denominator) with the max value being 10_000.
     */
    get isV138() {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxNetTradeVolumeLimitPerBlock') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be traded in a block.
     *  Represented as a non-zero fraction (nominator, denominator) with the max value being 10_000.
     */
    get asV138(): [number, number] {
        assert(this.isV138)
        return this._chain.getConstant('CircuitBreaker', 'DefaultMaxNetTradeVolumeLimitPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxNetTradeVolumeLimitPerBlock') != null
    }
}

export class CircuitBreakerDefaultMaxRemoveLiquidityLimitPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be removed in a block.
     *  Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
     *  If set to None, the limits are not enforced.
     */
    get isV138() {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxRemoveLiquidityLimitPerBlock') === 'ca64c770eb4dab87f2b6bc317381cbf5987c334a6147e12a94fca65cffa082c4'
    }

    /**
     *  The maximum percentage of a pool's liquidity that can be removed in a block.
     *  Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
     *  If set to None, the limits are not enforced.
     */
    get asV138(): ([number, number] | undefined) {
        assert(this.isV138)
        return this._chain.getConstant('CircuitBreaker', 'DefaultMaxRemoveLiquidityLimitPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CircuitBreaker', 'DefaultMaxRemoveLiquidityLimitPerBlock') != null
    }
}

export class CollatorRewardsRewardCurrencyIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Reward Asset Id
     */
    get isV109() {
        return this._chain.getConstantTypeHash('CollatorRewards', 'RewardCurrencyId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Reward Asset Id
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('CollatorRewards', 'RewardCurrencyId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CollatorRewards', 'RewardCurrencyId') != null
    }
}

export class CollatorRewardsRewardPerCollatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Reward amount per one collator.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('CollatorRewards', 'RewardPerCollator') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Reward amount per one collator.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('CollatorRewards', 'RewardPerCollator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('CollatorRewards', 'RewardPerCollator') != null
    }
}

export class CurrenciesGetNativeCurrencyIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV109() {
        return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Currencies', 'GetNativeCurrencyId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') != null
    }
}

export class DCAFeeReceiverConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * The fee receiver for transaction fees
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'FeeReceiver') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
    }

    /**
     * The fee receiver for transaction fees
     */
    get asV155(): Uint8Array {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'FeeReceiver')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'FeeReceiver') != null
    }
}

export class DCAMaxNumberOfRetriesOnErrorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * The number of max retries in case of trade limit error
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'MaxNumberOfRetriesOnError') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     * The number of max retries in case of trade limit error
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'MaxNumberOfRetriesOnError')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'MaxNumberOfRetriesOnError') != null
    }
}

export class DCAMaxPriceDifferenceBetweenBlocksConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * Max price difference allowed between blocks
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'MaxPriceDifferenceBetweenBlocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     * Max price difference allowed between blocks
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'MaxPriceDifferenceBetweenBlocks')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'MaxPriceDifferenceBetweenBlocks') != null
    }
}

export class DCAMaxSchedulePerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * The number of max schedules to be executed per block
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'MaxSchedulePerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     * The number of max schedules to be executed per block
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'MaxSchedulePerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'MaxSchedulePerBlock') != null
    }
}

export class DCAMinBudgetInNativeCurrencyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     * Minimum budget to be able to schedule a DCA, specified in native currency
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'MinBudgetInNativeCurrency') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     * Minimum budget to be able to schedule a DCA, specified in native currency
     */
    get asV155(): bigint {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'MinBudgetInNativeCurrency')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'MinBudgetInNativeCurrency') != null
    }
}

export class DCAMinimumTradingLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum trading limit for a single trade
     */
    get isV164() {
        return this._chain.getConstantTypeHash('DCA', 'MinimumTradingLimit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum trading limit for a single trade
     */
    get asV164(): bigint {
        assert(this.isV164)
        return this._chain.getConstant('DCA', 'MinimumTradingLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'MinimumTradingLimit') != null
    }
}

export class DCANamedReserveIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Named reserve identifier to store named reserves for orders of each users
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'NamedReserveId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  Named reserve identifier to store named reserves for orders of each users
     */
    get asV155(): Uint8Array {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'NamedReserveId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'NamedReserveId') != null
    }
}

export class DCANativeAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset Id
     */
    get isV155() {
        return this._chain.getConstantTypeHash('DCA', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset Id
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('DCA', 'NativeAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DCA', 'NativeAssetId') != null
    }
}

export class DemocracyCooloffPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'CooloffPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') != null
    }
}

export class DemocracyEnactmentPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The period between a proposal being approved and enacted.
     * 
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case
     *  where they are on the losing side of a vote.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The period between a proposal being approved and enacted.
     * 
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case
     *  where they are on the losing side of a vote.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'EnactmentPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') != null
    }
}

export class DemocracyFastTrackVotingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum voting period allowed for a fast-track referendum.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum voting period allowed for a fast-track referendum.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'FastTrackVotingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') != null
    }
}

export class DemocracyInstantAllowedConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
     *  want to set this permanently to `false`, others may want to condition it on things such
     *  as an upgrade having happened recently.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
    }

    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
     *  want to set this permanently to `false`, others may want to condition it on things such
     *  as an upgrade having happened recently.
     */
    get asV109(): boolean {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'InstantAllowed')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') != null
    }
}

export class DemocracyLaunchPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How often (in blocks) new public referenda are launched.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  How often (in blocks) new public referenda are launched.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'LaunchPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') != null
    }
}

export class DemocracyMaxBlacklistedConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of items which can be blacklisted.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of items which can be blacklisted.
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('Democracy', 'MaxBlacklisted')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') != null
    }
}

export class DemocracyMaxDepositsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('Democracy', 'MaxDeposits')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') != null
    }
}

export class DemocracyMaxProposalsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'MaxProposals')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') != null
    }
}

export class DemocracyMaxVotesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of votes for an account.
     * 
     *  Also used to compute weight, an overly big value can
     *  lead to extrinsic with very big weight: see `delegate` for instance.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of votes for an account.
     * 
     *  Also used to compute weight, an overly big value can
     *  lead to extrinsic with very big weight: see `delegate` for instance.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'MaxVotes')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') != null
    }
}

export class DemocracyMinimumDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'MinimumDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') != null
    }
}

export class DemocracyPreimageByteDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of balance that must be deposited per byte of preimage stored.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of balance that must be deposited per byte of preimage stored.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'PreimageByteDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') != null
    }
}

export class DemocracyVoteLockingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period of vote locking.
     * 
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The minimum period of vote locking.
     * 
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'VoteLockingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') != null
    }
}

export class DemocracyVotingPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How often (in blocks) to check for new votes.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  How often (in blocks) to check for new votes.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Democracy', 'VotingPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') != null
    }
}

export class DusterNativeCurrencyIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset Id
     */
    get isV135() {
        return this._chain.getConstantTypeHash('Duster', 'NativeCurrencyId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset Id
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('Duster', 'NativeCurrencyId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Duster', 'NativeCurrencyId') != null
    }
}

export class DusterRewardConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Reward amount
     */
    get isV135() {
        return this._chain.getConstantTypeHash('Duster', 'Reward') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Reward amount
     */
    get asV135(): bigint {
        assert(this.isV135)
        return this._chain.getConstant('Duster', 'Reward')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Duster', 'Reward') != null
    }
}

export class DynamicFeesAssetFeeParametersConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV164() {
        return this._chain.getConstantTypeHash('DynamicFees', 'AssetFeeParameters') === 'bf7797341d93aef262c750c671235c642f33a8efa04e9062d5dfa34c61e66c38'
    }

    get asV164(): v164.FeeParams {
        assert(this.isV164)
        return this._chain.getConstant('DynamicFees', 'AssetFeeParameters')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DynamicFees', 'AssetFeeParameters') != null
    }
}

export class DynamicFeesProtocolFeeParametersConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV164() {
        return this._chain.getConstantTypeHash('DynamicFees', 'ProtocolFeeParameters') === 'bf7797341d93aef262c750c671235c642f33a8efa04e9062d5dfa34c61e66c38'
    }

    get asV164(): v164.FeeParams {
        assert(this.isV164)
        return this._chain.getConstant('DynamicFees', 'ProtocolFeeParameters')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('DynamicFees', 'ProtocolFeeParameters') != null
    }
}

export class ElectionsCandidacyBondConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How much should be locked up in order to submit one's candidacy.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  How much should be locked up in order to submit one's candidacy.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'CandidacyBond')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') != null
    }
}

export class ElectionsDesiredMembersConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of members to elect.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of members to elect.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'DesiredMembers')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') != null
    }
}

export class ElectionsDesiredRunnersUpConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of runners_up to keep.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of runners_up to keep.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'DesiredRunnersUp')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') != null
    }
}

export class ElectionsMaxCandidatesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of candidates in a phragmen election.
     * 
     *  Warning: The election happens onchain, and this value will determine
     *  the size of the election. When this limit is reached no more
     *  candidates are accepted in the election.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of candidates in a phragmen election.
     * 
     *  Warning: The election happens onchain, and this value will determine
     *  the size of the election. When this limit is reached no more
     *  candidates are accepted in the election.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Elections', 'MaxCandidates')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') != null
    }
}

export class ElectionsMaxVotersConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of voters to allow in a phragmen election.
     * 
     *  Warning: This impacts the size of the election which is run onchain.
     *  When the limit is reached the new voters are ignored.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Elections', 'MaxVoters') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of voters to allow in a phragmen election.
     * 
     *  Warning: This impacts the size of the election which is run onchain.
     *  When the limit is reached the new voters are ignored.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Elections', 'MaxVoters')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'MaxVoters') != null
    }
}

export class ElectionsPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Identifier for the elections-phragmen pallet's lock
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  Identifier for the elections-phragmen pallet's lock
     */
    get asV109(): Uint8Array {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'PalletId') != null
    }
}

export class ElectionsTermDurationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  How long each seat is kept. This defines the next block number at which an election
     *  round will happen. If set to zero, no elections are ever triggered and the module will
     *  be in passive mode.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'TermDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  How long each seat is kept. This defines the next block number at which an election
     *  round will happen. If set to zero, no elections are ever triggered and the module will
     *  be in passive mode.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'TermDuration')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'TermDuration') != null
    }
}

export class ElectionsVotingBondBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Base deposit associated with voting.
     * 
     *  This should be sensibly high to economically ensure the pallet cannot be attacked by
     *  creating a gigantic number of votes.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Base deposit associated with voting.
     * 
     *  This should be sensibly high to economically ensure the pallet cannot be attacked by
     *  creating a gigantic number of votes.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'VotingBondBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') != null
    }
}

export class ElectionsVotingBondFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of bond that need to be locked for each vote (32 bytes).
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of bond that need to be locked for each vote (32 bytes).
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Elections', 'VotingBondFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') != null
    }
}

export class EmaOracleMaxUniqueEntriesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of unique oracle entries expected in one block.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('EmaOracle', 'MaxUniqueEntries') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of unique oracle entries expected in one block.
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('EmaOracle', 'MaxUniqueEntries')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('EmaOracle', 'MaxUniqueEntries') != null
    }
}

export class IdentityBasicDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit for a registered identity
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit for a registered identity
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'BasicDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') != null
    }
}

export class IdentityFieldDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'FieldDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') != null
    }
}

export class IdentityMaxAdditionalFieldsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'MaxAdditionalFields')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') != null
    }
}

export class IdentityMaxRegistrarsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'MaxRegistrars')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') != null
    }
}

export class IdentityMaxSubAccountsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'MaxSubAccounts')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') != null
    }
}

export class IdentitySubAccountDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will
     *  be another trie item whose value is the size of an account ID plus 32 bytes.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will
     *  be another trie item whose value is the size of an account ID plus 32 bytes.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Identity', 'SubAccountDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') != null
    }
}

export class LBPMaxInRatioConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max fraction of pool to sell in single transaction
     */
    get isV174() {
        return this._chain.getConstantTypeHash('LBP', 'MaxInRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Max fraction of pool to sell in single transaction
     */
    get asV174(): bigint {
        assert(this.isV174)
        return this._chain.getConstant('LBP', 'MaxInRatio')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LBP', 'MaxInRatio') != null
    }
}

export class LBPMaxOutRatioConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max fraction of pool to buy in single transaction
     */
    get isV174() {
        return this._chain.getConstantTypeHash('LBP', 'MaxOutRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Max fraction of pool to buy in single transaction
     */
    get asV174(): bigint {
        assert(this.isV174)
        return this._chain.getConstant('LBP', 'MaxOutRatio')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LBP', 'MaxOutRatio') != null
    }
}

export class LBPMinPoolLiquidityConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum pool liquidity, sole purpose of this is to keep the math working
     */
    get isV174() {
        return this._chain.getConstantTypeHash('LBP', 'MinPoolLiquidity') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum pool liquidity, sole purpose of this is to keep the math working
     */
    get asV174(): bigint {
        assert(this.isV174)
        return this._chain.getConstant('LBP', 'MinPoolLiquidity')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LBP', 'MinPoolLiquidity') != null
    }
}

export class LBPMinTradingLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum trading limit, sole purpose of this is to keep the math working
     */
    get isV174() {
        return this._chain.getConstantTypeHash('LBP', 'MinTradingLimit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum trading limit, sole purpose of this is to keep the math working
     */
    get asV174(): bigint {
        assert(this.isV174)
        return this._chain.getConstant('LBP', 'MinTradingLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LBP', 'MinTradingLimit') != null
    }
}

export class LBPrepay_feeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV174() {
        return this._chain.getConstantTypeHash('LBP', 'repay_fee') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
    }

    get asV174(): [number, number] {
        assert(this.isV174)
        return this._chain.getConstant('LBP', 'repay_fee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('LBP', 'repay_fee') != null
    }
}

export class MultiTransactionPaymentFeeReceiverConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Account where fees are deposited
     */
    get isV115() {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'FeeReceiver') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
    }

    /**
     *  Account where fees are deposited
     */
    get asV115(): Uint8Array {
        assert(this.isV115)
        return this._chain.getConstant('MultiTransactionPayment', 'FeeReceiver')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'FeeReceiver') != null
    }
}

export class MultiTransactionPaymentNativeAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset
     */
    get isV109() {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('MultiTransactionPayment', 'NativeAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'NativeAssetId') != null
    }
}

export class MultiTransactionPaymentWithdrawFeeForSetCurrencyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Should fee be paid for setting a currency
     */
    get isV109() {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'WithdrawFeeForSetCurrency') === 'b9c1afe70451c7d51ebb0c0c6ee25953c121c6e3aaa57e729862616f580daa35'
    }

    /**
     *  Should fee be paid for setting a currency
     */
    get asV109(): v109.Pays {
        assert(this.isV109)
        return this._chain.getConstant('MultiTransactionPayment', 'WithdrawFeeForSetCurrency')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('MultiTransactionPayment', 'WithdrawFeeForSetCurrency') != null
    }
}

export class MultisigDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The base amount of currency needed to reserve for creating a multisig execution or to
     *  store a dispatch call for later.
     * 
     *  This is held for an additional storage item whose value size is
     *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
     *  `32 + sizeof(AccountId)` bytes.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Multisig', 'DepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The base amount of currency needed to reserve for creating a multisig execution or to
     *  store a dispatch call for later.
     * 
     *  This is held for an additional storage item whose value size is
     *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
     *  `32 + sizeof(AccountId)` bytes.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Multisig', 'DepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Multisig', 'DepositBase') != null
    }
}

export class MultisigDepositFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of currency needed per unit threshold when creating a multisig execution.
     * 
     *  This is held for adding 32 bytes more into a pre-existing storage value.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of currency needed per unit threshold when creating a multisig execution.
     * 
     *  This is held for adding 32 bytes more into a pre-existing storage value.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Multisig', 'DepositFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') != null
    }
}

export class MultisigMaxSignatoriesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Multisig', 'MaxSignatories')
    }

    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('Multisig', 'MaxSignatories')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') != null
    }
}

export class OTCExistentialDepositMultiplierConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV136() {
        return this._chain.getConstantTypeHash('OTC', 'ExistentialDepositMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    get asV136(): number {
        assert(this.isV136)
        return this._chain.getConstant('OTC', 'ExistentialDepositMultiplier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OTC', 'ExistentialDepositMultiplier') != null
    }
}

export class OmnipoolAssetFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Asset fee
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'AssetFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Asset fee
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'AssetFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'AssetFee') != null
    }
}

export class OmnipoolHdxAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset ID
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'HdxAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset ID
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'HdxAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'HdxAssetId') != null
    }
}

export class OmnipoolHubAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Hub Asset ID
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'HubAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Hub Asset ID
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'HubAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'HubAssetId') != null
    }
}

export class OmnipoolMaxInRatioConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max fraction of asset reserve to sell in single transaction
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'MaxInRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Max fraction of asset reserve to sell in single transaction
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'MaxInRatio')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'MaxInRatio') != null
    }
}

export class OmnipoolMaxOutRatioConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max fraction of asset reserve to buy in single transaction
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'MaxOutRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Max fraction of asset reserve to buy in single transaction
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'MaxOutRatio')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'MaxOutRatio') != null
    }
}

export class OmnipoolMinWithdrawalFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum withdrawal fee
     */
    get isV142() {
        return this._chain.getConstantTypeHash('Omnipool', 'MinWithdrawalFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum withdrawal fee
     */
    get asV142(): number {
        assert(this.isV142)
        return this._chain.getConstant('Omnipool', 'MinWithdrawalFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'MinWithdrawalFee') != null
    }
}

export class OmnipoolMinimumPoolLiquidityConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum pool liquidity which can be added
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'MinimumPoolLiquidity') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum pool liquidity which can be added
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'MinimumPoolLiquidity')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'MinimumPoolLiquidity') != null
    }
}

export class OmnipoolMinimumTradingLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum trading limit
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'MinimumTradingLimit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum trading limit
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'MinimumTradingLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'MinimumTradingLimit') != null
    }
}

export class OmnipoolNFTCollectionIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Non fungible class id
     */
    get isV118() {
        return this._chain.getConstantTypeHash('Omnipool', 'NFTCollectionId') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Non fungible class id
     */
    get asV118(): bigint {
        assert(this.isV118)
        return this._chain.getConstant('Omnipool', 'NFTCollectionId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'NFTCollectionId') != null
    }
}

export class OmnipoolPriceDifferencePercentageConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Price difference percentage for allowing add or remove liquidity.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('Omnipool', 'PriceDifferencePercentage') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Price difference percentage for allowing add or remove liquidity.
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('Omnipool', 'PriceDifferencePercentage')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'PriceDifferencePercentage') != null
    }
}

export class OmnipoolProtocolFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Protocol fee
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'ProtocolFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Protocol fee
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'ProtocolFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'ProtocolFee') != null
    }
}

export class OmnipoolStableCoinAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Preferred stable Asset ID
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'StableCoinAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Preferred stable Asset ID
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'StableCoinAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'StableCoinAssetId') != null
    }
}

export class OmnipoolTVLCapConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  TVL cap
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Omnipool', 'TVLCap') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  TVL cap
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Omnipool', 'TVLCap')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Omnipool', 'TVLCap') != null
    }
}

export class OmnipoolLiquidityMiningNFTCollectionIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  NFT collection id for liquidity mining's deposit nfts.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'NFTCollectionId') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  NFT collection id for liquidity mining's deposit nfts.
     */
    get asV135(): bigint {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolLiquidityMining', 'NFTCollectionId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'NFTCollectionId') != null
    }
}

export class OmnipoolLiquidityMiningOraclePeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Oracle's price aggregation period.
     */
    get isV142() {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'OraclePeriod') === 'c9221dab1b6174cd069b2df99dc2d76a7b34727e74d2c8beb9cddb53f744ab57'
    }

    /**
     *  Oracle's price aggregation period.
     */
    get asV142(): v142.OraclePeriod {
        assert(this.isV142)
        return this._chain.getConstant('OmnipoolLiquidityMining', 'OraclePeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'OraclePeriod') != null
    }
}

export class OmnipoolLiquidityMiningOracleSourceConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Identifier of oracle data soruce
     */
    get isV142() {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'OracleSource') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  Identifier of oracle data soruce
     */
    get asV142(): Uint8Array {
        assert(this.isV142)
        return this._chain.getConstant('OmnipoolLiquidityMining', 'OracleSource')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolLiquidityMining', 'OracleSource') != null
    }
}

export class OmnipoolWarehouseLMMaxFarmEntriesPerDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of yield farms same LP shares can be re/deposited into. This value always
     *  MUST BE >= 1.         
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MaxFarmEntriesPerDeposit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of yield farms same LP shares can be re/deposited into. This value always
     *  MUST BE >= 1.         
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolWarehouseLM', 'MaxFarmEntriesPerDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MaxFarmEntriesPerDeposit') != null
    }
}

export class OmnipoolWarehouseLMMaxYieldFarmsPerGlobalFarmConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max number of yield farms can exist in global farm. This includes all farms in the
     *  storage(active, stopped, deleted).
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MaxYieldFarmsPerGlobalFarm') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Max number of yield farms can exist in global farm. This includes all farms in the
     *  storage(active, stopped, deleted).
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolWarehouseLM', 'MaxYieldFarmsPerGlobalFarm')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MaxYieldFarmsPerGlobalFarm') != null
    }
}

export class OmnipoolWarehouseLMMinPlannedYieldingPeriodsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum number of periods to run liquidity mining program.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MinPlannedYieldingPeriods') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Minimum number of periods to run liquidity mining program.
     */
    get asV135(): number {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolWarehouseLM', 'MinPlannedYieldingPeriods')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MinPlannedYieldingPeriods') != null
    }
}

export class OmnipoolWarehouseLMMinTotalFarmRewardsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum total rewards to distribute from global farm during liquidity mining.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MinTotalFarmRewards') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum total rewards to distribute from global farm during liquidity mining.
     */
    get asV135(): bigint {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolWarehouseLM', 'MinTotalFarmRewards')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'MinTotalFarmRewards') != null
    }
}

export class OmnipoolWarehouseLMPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Pallet id.
     */
    get isV135() {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  Pallet id.
     */
    get asV135(): Uint8Array {
        assert(this.isV135)
        return this._chain.getConstant('OmnipoolWarehouseLM', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('OmnipoolWarehouseLM', 'PalletId') != null
    }
}

export class ProxyAnnouncementDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     * 
     *  This is held when a new storage item holding a `Balance` is created (typically 16
     *  bytes).
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     * 
     *  This is held when a new storage item holding a `Balance` is created (typically 16
     *  bytes).
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'AnnouncementDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') != null
    }
}

export class ProxyAnnouncementDepositFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of currency needed per announcement made.
     * 
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of currency needed per announcement made.
     * 
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'AnnouncementDepositFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') != null
    }
}

export class ProxyMaxPendingConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'MaxPending') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'MaxPending')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'MaxPending') != null
    }
}

export class ProxyMaxProxiesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'MaxProxies')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') != null
    }
}

export class ProxyProxyDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     * 
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     * 
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'ProxyDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') != null
    }
}

export class ProxyProxyDepositFactorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount of currency needed per proxy added.
     * 
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
     *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
     *  into account `32 + proxy_type.encode().len()` bytes of data.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount of currency needed per proxy added.
     * 
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
     *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
     *  into account `32 + proxy_type.encode().len()` bytes of data.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Proxy', 'ProxyDepositFactor')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') != null
    }
}

export class RouterMaxNumberOfTradesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max limit for the number of trades within a route
     */
    get isV155() {
        return this._chain.getConstantTypeHash('Router', 'MaxNumberOfTrades') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Max limit for the number of trades within a route
     */
    get asV155(): number {
        assert(this.isV155)
        return this._chain.getConstant('Router', 'MaxNumberOfTrades')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Router', 'MaxNumberOfTrades') != null
    }
}

export class SchedulerMaxScheduledPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *  Not strictly enforced, but used for weight estimation.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of scheduled calls in the queue for a single block.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Scheduler', 'MaxScheduledPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') != null
    }
}

export class SchedulerMaximumWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === '1b058ef6de7359608215c10da8805ac54828d3049661d044ee918c62627b6885'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables of less
     *  priority than `schedule::HARD_DEADLINE`.
     */
    get asV115(): v115.Weight {
        assert(this.isV115)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
    }

    /**
     *  The maximum weight that may be scheduled per block for any dispatchables.
     */
    get asV155(): v155.Weight {
        assert(this.isV155)
        return this._chain.getConstant('Scheduler', 'MaximumWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') != null
    }
}

export class StakingActionPointsWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Weight of the action points in total points calculations.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'ActionPointsWeight') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Weight of the action points in total points calculations.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'ActionPointsWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'ActionPointsWeight') != null
    }
}

export class StakingCurrentStakeWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Weight of the actual stake in slash points calculation. Bigger the value lower the calculated slash points.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'CurrentStakeWeight') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Weight of the actual stake in slash points calculation. Bigger the value lower the calculated slash points.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'CurrentStakeWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'CurrentStakeWeight') != null
    }
}

export class StakingMaxVotesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max amount of votes the user can have at any time.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Max amount of votes the user can have at any time.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'MaxVotes')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'MaxVotes') != null
    }
}

export class StakingMinStakeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Min amount user must stake.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'MinStake') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Min amount user must stake.
     */
    get asV172(): bigint {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'MinStake')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'MinStake') != null
    }
}

export class StakingNFTCollectionIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  NFT collection id.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'NFTCollectionId') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  NFT collection id.
     */
    get asV172(): bigint {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'NFTCollectionId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'NFTCollectionId') != null
    }
}

export class StakingNativeAssetIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Native Asset ID.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Native Asset ID.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'NativeAssetId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'NativeAssetId') != null
    }
}

export class StakingPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Pallet id.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  Pallet id.
     */
    get asV172(): Uint8Array {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'PalletId') != null
    }
}

export class StakingPeriodLengthConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Staking period length in blocks.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'PeriodLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Staking period length in blocks.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'PeriodLength')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'PeriodLength') != null
    }
}

export class StakingRewardedVoteUnitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Unit we are distributing action points for.
     *  e.g if RewardedVoteUnit is 1HDX user will receive `x` action points per each voted 1 HDX.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'RewardedVoteUnit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Unit we are distributing action points for.
     *  e.g if RewardedVoteUnit is 1HDX user will receive `x` action points per each voted 1 HDX.
     */
    get asV172(): bigint {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'RewardedVoteUnit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'RewardedVoteUnit') != null
    }
}

export class StakingTimePointsPerPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of time points users receive for each period.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'TimePointsPerPeriod') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Number of time points users receive for each period.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'TimePointsPerPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'TimePointsPerPeriod') != null
    }
}

export class StakingTimePointsWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Weight of the time points in total points calculations.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'TimePointsWeight') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Weight of the time points in total points calculations.
     */
    get asV172(): number {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'TimePointsWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'TimePointsWeight') != null
    }
}

export class StakingUnclaimablePeriodsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of periods user can't claim rewards for. User can exit but won't receive any rewards.
     *  If he stay longer than `UnclaimablePeriods` he will receive rewards also for these periods.
     */
    get isV172() {
        return this._chain.getConstantTypeHash('Staking', 'UnclaimablePeriods') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Number of periods user can't claim rewards for. User can exit but won't receive any rewards.
     *  If he stay longer than `UnclaimablePeriods` he will receive rewards also for these periods.
     */
    get asV172(): bigint {
        assert(this.isV172)
        return this._chain.getConstant('Staking', 'UnclaimablePeriods')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'UnclaimablePeriods') != null
    }
}

export class SystemBlockHashCountConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('System', 'BlockHashCount')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
    }
}

export class SystemBlockLengthConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get asV109(): v109.BlockLength {
        assert(this.isV109)
        return this._chain.getConstant('System', 'BlockLength')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockLength') != null
    }
}

export class SystemBlockWeightsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'd29c2183888a350ee5f1702b52be3920c60d1d8dd2937c2870d4ec0d78845224'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV109(): v109.BlockWeights {
        assert(this.isV109)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'ec3db939326335562b7b8567675fe4ea6cf2eafd9f5adf1012604a6e2fed11eb'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV115(): v115.BlockWeights {
        assert(this.isV115)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'fa5692d9032f25a42ae01892fea053f75130751d1302a6b4db45a7a98a9d0760'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV155(): v155.BlockWeights {
        assert(this.isV155)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
    }
}

export class SystemDbWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get asV109(): v109.RuntimeDbWeight {
        assert(this.isV109)
        return this._chain.getConstant('System', 'DbWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'DbWeight') != null
    }
}

export class SystemSS58PrefixConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('System', 'SS58Prefix')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
    }
}

export class SystemVersionConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Get the chain's current version.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
    }

    /**
     *  Get the chain's current version.
     */
    get asV109(): v109.RuntimeVersion {
        assert(this.isV109)
        return this._chain.getConstant('System', 'Version')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'Version') != null
    }
}

export class TimestampMinimumPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Timestamp', 'MinimumPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
    }
}

export class TipsDataDepositPerByteConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit per byte within the tip report reason or bounty description.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit per byte within the tip report reason or bounty description.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Tips', 'DataDepositPerByte')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') != null
    }
}

export class TipsMaximumReasonLengthConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum acceptable reason length.
     * 
     *  Benchmarks depend on this value, be sure to update weights file when changing this value
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum acceptable reason length.
     * 
     *  Benchmarks depend on this value, be sure to update weights file when changing this value
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Tips', 'MaximumReasonLength')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') != null
    }
}

export class TipsTipCountdownConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The period for which a tip remains open after is has achieved threshold tippers.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Tips', 'TipCountdown') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The period for which a tip remains open after is has achieved threshold tippers.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Tips', 'TipCountdown')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tips', 'TipCountdown') != null
    }
}

export class TipsTipFindersFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The percent of the final tip which goes to the original reporter of the tip.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  The percent of the final tip which goes to the original reporter of the tip.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Tips', 'TipFindersFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') != null
    }
}

export class TipsTipReportDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The amount held on deposit for placing a tip report.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The amount held on deposit for placing a tip report.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Tips', 'TipReportDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') != null
    }
}

export class TokensMaxLocksConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV109() {
        return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Tokens', 'MaxLocks')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') != null
    }
}

export class TokensMaxReservesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Tokens', 'MaxReserves')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') != null
    }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
    }
}

export class TransactionPaymentTransactionByteFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('TransactionPayment', 'TransactionByteFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') != null
    }
}

export class TransactionPaymentWeightToFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get asV109(): v109.WeightToFeeCoefficient[] {
        assert(this.isV109)
        return this._chain.getConstant('TransactionPayment', 'WeightToFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') != null
    }
}

export class TreasuryBurnConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'Burn') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Percentage of spare funds (if any) that are burnt per spend period.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'Burn')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'Burn') != null
    }
}

export class TreasuryMaxApprovalsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of approvals that can wait in the spending queue.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of approvals that can wait in the spending queue.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'MaxApprovals')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') != null
    }
}

export class TreasuryPalletIdConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
    }

    /**
     *  The treasury's pallet id, used for deriving its sovereign account ID.
     */
    get asV109(): Uint8Array {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'PalletId')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'PalletId') != null
    }
}

export class TreasuryProposalBondConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Fraction of a proposal's value that should be bonded in order to place the proposal.
     *  An accepted proposal gets these back. A rejected proposal does not.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'ProposalBond')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') != null
    }
}

export class TreasuryProposalBondMaximumConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
    }

    /**
     *  Maximum amount of funds that should be placed in a deposit for making a proposal.
     */
    get asV109(): (bigint | undefined) {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'ProposalBondMaximum')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') != null
    }
}

export class TreasuryProposalBondMinimumConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  Minimum amount of funds that should be placed in a deposit for making a proposal.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'ProposalBondMinimum')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') != null
    }
}

export class TreasurySpendPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Period between successive spends.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Period between successive spends.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Treasury', 'SpendPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') != null
    }
}

export class UniquesAttributeDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved when adding an attribute to an item.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved when adding an attribute to an item.
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'AttributeDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') != null
    }
}

export class UniquesCollectionDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved for collection.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'CollectionDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved for collection.
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'CollectionDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'CollectionDeposit') != null
    }
}

export class UniquesDepositPerByteConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The additional funds that must be reserved for the number of bytes store in metadata,
     *  either "normal" metadata or attribute metadata.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The additional funds that must be reserved for the number of bytes store in metadata,
     *  either "normal" metadata or attribute metadata.
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'DepositPerByte')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') != null
    }
}

export class UniquesItemDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved for an item.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'ItemDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved for an item.
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'ItemDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'ItemDeposit') != null
    }
}

export class UniquesKeyLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of an attribute key.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum length of an attribute key.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'KeyLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') != null
    }
}

export class UniquesMetadataDepositBaseConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your item.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The basic amount of funds that must be reserved when adding metadata to your item.
     */
    get asV115(): bigint {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'MetadataDepositBase')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') != null
    }
}

export class UniquesStringLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of data stored on-chain.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum length of data stored on-chain.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'StringLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'StringLimit') != null
    }
}

export class UniquesValueLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of an attribute value.
     */
    get isV115() {
        return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum length of an attribute value.
     */
    get asV115(): number {
        assert(this.isV115)
        return this._chain.getConstant('Uniques', 'ValueLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') != null
    }
}

export class Utilitybatched_calls_limitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The limit on the number of batched calls.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The limit on the number of batched calls.
     */
    get asV109(): number {
        assert(this.isV109)
        return this._chain.getConstant('Utility', 'batched_calls_limit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
    }
}

export class VestingMinVestedTransferConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount transferred to call `vested_transfer`.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount transferred to call `vested_transfer`.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('Vesting', 'MinVestedTransfer')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') != null
    }
}

export class XTokensBaseXcmWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get asV109(): bigint {
        assert(this.isV109)
        return this._chain.getConstant('XTokens', 'BaseXcmWeight')
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
    }

    /**
     *  Base XCM weight.
     * 
     *  The actually weight for an XCM message is `T::BaseXcmWeight +
     *  T::Weigher::weight(&msg)`.
     */
    get asV155(): v155.Weight {
        assert(this.isV155)
        return this._chain.getConstant('XTokens', 'BaseXcmWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') != null
    }
}

export class XTokensSelfLocationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Self chain location.
     */
    get isV109() {
        return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') === '596335720c12dda4acafdb8b7ed539c4b47f1563ed97456e9a3fcd771714568c'
    }

    /**
     *  Self chain location.
     */
    get asV109(): v109.V1MultiLocation {
        assert(this.isV109)
        return this._chain.getConstant('XTokens', 'SelfLocation')
    }

    /**
     *  Self chain location.
     */
    get isV155() {
        return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') === '9427c3584e190cdb6b915f9592427dbb2551fbad0e8c8ab9a42e5bff424455f1'
    }

    /**
     *  Self chain location.
     */
    get asV155(): v155.V3MultiLocation {
        assert(this.isV155)
        return this._chain.getConstant('XTokens', 'SelfLocation')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') != null
    }
}
