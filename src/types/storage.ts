import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v109 from './v109'
import * as v115 from './v115'
import * as v118 from './v118'
import * as v125 from './v125'
import * as v135 from './v135'
import * as v136 from './v136'
import * as v142 from './v142'
import * as v147 from './v147'
import * as v155 from './v155'
import * as v158 from './v158'
import * as v164 from './v164'
import * as v170 from './v170'
import * as v172 from './v172'
import * as v174 from './v174'
import * as v178 from './v178'
import * as v180 from './v180'
import * as v183 from './v183'

export class AssetRegistryAssetIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetIds'
    }

    /**
     *  Mapping between asset name and asset id.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'b2f6c9709a4d2ff893536be0ecdbcad0fa597aba78428cfcdfc6fef5a1c5414f'
    }

    /**
     *  Mapping between asset name and asset id.
     */
    get asV109(): AssetRegistryAssetIdsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Mapping between asset name and asset id.
 */
export interface AssetRegistryAssetIdsStorageV109 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class AssetRegistryAssetLocationsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetLocations'
    }

    /**
     *  Native location of an asset.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '58dfe00b72f07bf6cab7f6a9e09ab29eb1bddff4ba0c36924d0917313958bca6'
    }

    /**
     *  Native location of an asset.
     */
    get asV109(): AssetRegistryAssetLocationsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Native location of an asset.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '1b2c2085f6cd1b0638f58076aa5133089312b9f5d2be9d4713b80b63b30b527a'
    }

    /**
     *  Native location of an asset.
     */
    get asV155(): AssetRegistryAssetLocationsStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV109 {
    get(key: number): Promise<(v109.AssetLocation | undefined)>
    getAll(): Promise<v109.AssetLocation[]>
    getMany(keys: number[]): Promise<(v109.AssetLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v109.AssetLocation][]>
    getPairs(key: number): Promise<[k: number, v: v109.AssetLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v109.AssetLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v109.AssetLocation][]>
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV155 {
    get(key: number): Promise<(v155.AssetLocation | undefined)>
    getAll(): Promise<v155.AssetLocation[]>
    getMany(keys: number[]): Promise<(v155.AssetLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v155.AssetLocation][]>
    getPairs(key: number): Promise<[k: number, v: v155.AssetLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v155.AssetLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v155.AssetLocation][]>
}

export class AssetRegistryAssetMetadataMapStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetMetadataMap'
    }

    /**
     *  Metadata of an asset.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'baeb301fe81822ac12911469e04bf8d093313d49518fd2908c00cbdeff57ab9f'
    }

    /**
     *  Metadata of an asset.
     */
    get asV109(): AssetRegistryAssetMetadataMapStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface AssetRegistryAssetMetadataMapStorageV109 {
    get(key: number): Promise<(v109.AssetMetadata | undefined)>
    getAll(): Promise<v109.AssetMetadata[]>
    getMany(keys: number[]): Promise<(v109.AssetMetadata | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v109.AssetMetadata][]>
    getPairs(key: number): Promise<[k: number, v: v109.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v109.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v109.AssetMetadata][]>
}

export class AssetRegistryAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'Assets'
    }

    /**
     *  Details of an asset.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'b41077b00f9666bee941bfa5072e6470d7c3f76cc70583e553991180b004e89a'
    }

    /**
     *  Details of an asset.
     */
    get asV109(): AssetRegistryAssetsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Details of an asset.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'bdde139e44bf2281955184a9367a07281be65c531d8deac3b0715dfc4a9d4d2f'
    }

    /**
     *  Details of an asset.
     */
    get asV155(): AssetRegistryAssetsStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Details of an asset.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '65935f9738fdd3cfb70858641a6e1ac1dddbceb257aefc06117f21d16d73b99b'
    }

    /**
     *  Details of an asset.
     */
    get asV172(): AssetRegistryAssetsStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV109 {
    get(key: number): Promise<(v109.AssetDetails | undefined)>
    getAll(): Promise<v109.AssetDetails[]>
    getMany(keys: number[]): Promise<(v109.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v109.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v109.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v109.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v109.AssetDetails][]>
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV155 {
    get(key: number): Promise<(v155.AssetDetails | undefined)>
    getAll(): Promise<v155.AssetDetails[]>
    getMany(keys: number[]): Promise<(v155.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v155.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v155.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v155.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v155.AssetDetails][]>
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV172 {
    get(key: number): Promise<(v172.AssetDetails | undefined)>
    getAll(): Promise<v172.AssetDetails[]>
    getMany(keys: number[]): Promise<(v172.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v172.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v172.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v172.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v172.AssetDetails][]>
}

export class AssetRegistryLocationAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'LocationAssets'
    }

    /**
     *  Local asset for native location.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
    }

    /**
     *  Local asset for native location.
     */
    get asV109(): AssetRegistryLocationAssetsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Local asset for native location.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '7b72e0aec8112c03ef7cc1863ed38b58ac3e4e7b731c9f7ce896d9a6792a7bfc'
    }

    /**
     *  Local asset for native location.
     */
    get asV155(): AssetRegistryLocationAssetsStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV109 {
    get(key: v109.AssetLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v109.AssetLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v109.AssetLocation[]>
    getKeys(key: v109.AssetLocation): Promise<v109.AssetLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v109.AssetLocation[]>
    getKeysPaged(pageSize: number, key: v109.AssetLocation): AsyncIterable<v109.AssetLocation[]>
    getPairs(): Promise<[k: v109.AssetLocation, v: number][]>
    getPairs(key: v109.AssetLocation): Promise<[k: v109.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v109.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v109.AssetLocation): AsyncIterable<[k: v109.AssetLocation, v: number][]>
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV155 {
    get(key: v155.AssetLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v155.AssetLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v155.AssetLocation[]>
    getKeys(key: v155.AssetLocation): Promise<v155.AssetLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v155.AssetLocation[]>
    getKeysPaged(pageSize: number, key: v155.AssetLocation): AsyncIterable<v155.AssetLocation[]>
    getPairs(): Promise<[k: v155.AssetLocation, v: number][]>
    getPairs(key: v155.AssetLocation): Promise<[k: v155.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v155.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v155.AssetLocation): AsyncIterable<[k: v155.AssetLocation, v: number][]>
}

export class AssetRegistryNextAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'NextAssetId'
    }

    /**
     *  Next available asset id. This is sequential id assigned for each new registered asset.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next available asset id. This is sequential id assigned for each new registered asset.
     */
    get asV109(): AssetRegistryNextAssetIdStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Next available asset id. This is sequential id assigned for each new registered asset.
 */
export interface AssetRegistryNextAssetIdStorageV109 {
    get(): Promise<number>
}

export class AuraAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authority set.
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current authority set.
     */
    get asV135(): AuraAuthoritiesStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  The current authority set.
 */
export interface AuraAuthoritiesStorageV135 {
    get(): Promise<Uint8Array[]>
}

export class AuraCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get asV135(): AuraCurrentSlotStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface AuraCurrentSlotStorageV135 {
    get(): Promise<bigint>
}

export class AuraExtAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'AuraExt'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will always
     *  be updated to the latest AuRa authorities in `on_finalize`.
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will always
     *  be updated to the latest AuRa authorities in `on_finalize`.
     */
    get asV135(): AuraExtAuthoritiesStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Serves as cache for the authorities.
 * 
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will always
 *  be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuraExtAuthoritiesStorageV135 {
    get(): Promise<Uint8Array[]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV109(): AuthorshipAuthorStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV109(): AuthorshipDidSetUnclesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV109 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV109(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV109(): AuthorshipUnclesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV109 {
    get(): Promise<v109.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV109(): BalancesAccountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV109 {
    get(key: Uint8Array): Promise<v109.AccountData>
    getAll(): Promise<v109.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v109.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV155(): BalancesInactiveIssuanceStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV155 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV109(): BalancesLocksStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV109 {
    get(key: Uint8Array): Promise<v109.BalanceLock[]>
    getAll(): Promise<v109.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v109.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV109(): BalancesReservesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV109 {
    get(key: Uint8Array): Promise<v109.ReserveData[]>
    getAll(): Promise<v109.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v109.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV109(): BalancesStorageVersionStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV109 {
    get(): Promise<v109.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV109(): BalancesTotalIssuanceStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV109 {
    get(): Promise<bigint>
}

export class BondsBondIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bonds'
    }

    protected getName() {
        return 'BondIds'
    }

    /**
     *  Registered bond ids.
     *  Maps (underlying asset ID, maturity) -> bond ID
     */
    get isV172(): boolean {
        return this.getTypeHash() === 'ba9810db4f6e69748561e28873ecda9e7edd69510f0bf87220c1bb324782695e'
    }

    /**
     *  Registered bond ids.
     *  Maps (underlying asset ID, maturity) -> bond ID
     */
    get asV172(): BondsBondIdsStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Registered bond ids.
 *  Maps (underlying asset ID, maturity) -> bond ID
 */
export interface BondsBondIdsStorageV172 {
    get(key: [number, bigint]): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, bigint][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, bigint][]>
    getKeys(key: [number, bigint]): Promise<[number, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, bigint][]>
    getKeysPaged(pageSize: number, key: [number, bigint]): AsyncIterable<[number, bigint][]>
    getPairs(): Promise<[k: [number, bigint], v: number][]>
    getPairs(key: [number, bigint]): Promise<[k: [number, bigint], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, bigint], v: number][]>
    getPairsPaged(pageSize: number, key: [number, bigint]): AsyncIterable<[k: [number, bigint], v: number][]>
}

export class BondsBondsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bonds'
    }

    protected getName() {
        return 'Bonds'
    }

    /**
     *  Registered bonds.
     *  Maps bond ID -> (underlying asset ID, maturity)
     */
    get isV172(): boolean {
        return this.getTypeHash() === '491b0533374f76ad3ceb944351e1c7a1c7984c7babe0f24f54d892dad0ced5d6'
    }

    /**
     *  Registered bonds.
     *  Maps bond ID -> (underlying asset ID, maturity)
     */
    get asV172(): BondsBondsStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Registered bonds.
 *  Maps bond ID -> (underlying asset ID, maturity)
 */
export interface BondsBondsStorageV172 {
    get(key: number): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: number[]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint]][]>
}

export class CircuitBreakerAllowedAddLiquidityAmountPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'AllowedAddLiquidityAmountPerAsset'
    }

    /**
     *  Add liquidity volumes per asset
     */
    get isV135(): boolean {
        return this.getTypeHash() === '6c0986952384c855f0192e03221aa2d4221c9d42f2e4338deea33fa0f3663f34'
    }

    /**
     *  Add liquidity volumes per asset
     */
    get asV135(): CircuitBreakerAllowedAddLiquidityAmountPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Add liquidity volumes per asset
 */
export interface CircuitBreakerAllowedAddLiquidityAmountPerAssetStorageV135 {
    get(key: number): Promise<(v135.LiquidityLimit | undefined)>
    getAll(): Promise<v135.LiquidityLimit[]>
    getMany(keys: number[]): Promise<(v135.LiquidityLimit | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v135.LiquidityLimit][]>
    getPairs(key: number): Promise<[k: number, v: v135.LiquidityLimit][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v135.LiquidityLimit][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v135.LiquidityLimit][]>
}

export class CircuitBreakerAllowedRemoveLiquidityAmountPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'AllowedRemoveLiquidityAmountPerAsset'
    }

    /**
     *  Remove liquidity volumes per asset
     */
    get isV135(): boolean {
        return this.getTypeHash() === '6c0986952384c855f0192e03221aa2d4221c9d42f2e4338deea33fa0f3663f34'
    }

    /**
     *  Remove liquidity volumes per asset
     */
    get asV135(): CircuitBreakerAllowedRemoveLiquidityAmountPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Remove liquidity volumes per asset
 */
export interface CircuitBreakerAllowedRemoveLiquidityAmountPerAssetStorageV135 {
    get(key: number): Promise<(v135.LiquidityLimit | undefined)>
    getAll(): Promise<v135.LiquidityLimit[]>
    getMany(keys: number[]): Promise<(v135.LiquidityLimit | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v135.LiquidityLimit][]>
    getPairs(key: number): Promise<[k: number, v: v135.LiquidityLimit][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v135.LiquidityLimit][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v135.LiquidityLimit][]>
}

export class CircuitBreakerAllowedTradeVolumeLimitPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'AllowedTradeVolumeLimitPerAsset'
    }

    /**
     *  Trade volumes per asset
     */
    get isV135(): boolean {
        return this.getTypeHash() === '2210672e19ce2a8e2784ed45af5a42d146218da3befb85a2676a320a34e8dbd5'
    }

    /**
     *  Trade volumes per asset
     */
    get asV135(): CircuitBreakerAllowedTradeVolumeLimitPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Trade volumes per asset
 */
export interface CircuitBreakerAllowedTradeVolumeLimitPerAssetStorageV135 {
    get(key: number): Promise<(v135.TradeVolumeLimit | undefined)>
    getAll(): Promise<v135.TradeVolumeLimit[]>
    getMany(keys: number[]): Promise<(v135.TradeVolumeLimit | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v135.TradeVolumeLimit][]>
    getPairs(key: number): Promise<[k: number, v: v135.TradeVolumeLimit][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v135.TradeVolumeLimit][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v135.TradeVolumeLimit][]>
}

export class CircuitBreakerLiquidityAddLimitPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'LiquidityAddLimitPerAsset'
    }

    /**
     *  Add liquidity limits of assets that don't use the default value
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'a5f1c1eabab4278b73b5e024b0ba593962f07ea1c5436a43b9e16262935418a3'
    }

    /**
     *  Add liquidity limits of assets that don't use the default value
     */
    get asV135(): CircuitBreakerLiquidityAddLimitPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Add liquidity limits of assets that don't use the default value
 */
export interface CircuitBreakerLiquidityAddLimitPerAssetStorageV135 {
    get(key: number): Promise<([number, number] | undefined)>
    getAll(): Promise<([number, number] | undefined)[]>
    getMany(keys: number[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([number, number] | undefined)][]>
    getPairs(key: number): Promise<[k: number, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([number, number] | undefined)][]>
}

export class CircuitBreakerLiquidityRemoveLimitPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'LiquidityRemoveLimitPerAsset'
    }

    /**
     *  Remove liquidity limits of assets that don't use the default value
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'a5f1c1eabab4278b73b5e024b0ba593962f07ea1c5436a43b9e16262935418a3'
    }

    /**
     *  Remove liquidity limits of assets that don't use the default value
     */
    get asV135(): CircuitBreakerLiquidityRemoveLimitPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Remove liquidity limits of assets that don't use the default value
 */
export interface CircuitBreakerLiquidityRemoveLimitPerAssetStorageV135 {
    get(key: number): Promise<([number, number] | undefined)>
    getAll(): Promise<([number, number] | undefined)[]>
    getMany(keys: number[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([number, number] | undefined)][]>
    getPairs(key: number): Promise<[k: number, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([number, number] | undefined)][]>
}

export class CircuitBreakerTradeVolumeLimitPerAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'CircuitBreaker'
    }

    protected getName() {
        return 'TradeVolumeLimitPerAsset'
    }

    /**
     *  Trade volume limits of assets that don't use the default value
     */
    get isV135(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Trade volume limits of assets that don't use the default value
     */
    get asV135(): CircuitBreakerTradeVolumeLimitPerAssetStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Trade volume limits of assets that don't use the default value
 */
export interface CircuitBreakerTradeVolumeLimitPerAssetStorageV135 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    /**
     *  Asset id storage for each shared token
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    /**
     *  Asset id storage for each shared token
     */
    get asV109(): ClaimsClaimsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Asset id storage for each shared token
 */
export interface ClaimsClaimsStorageV109 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class CollatorRewardsCollatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorRewards'
    }

    protected getName() {
        return 'Collators'
    }

    /**
     *  Stores the collators per session (index).
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Stores the collators per session (index).
     */
    get asV109(): CollatorRewardsCollatorsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Stores the collators per session (index).
 */
export interface CollatorRewardsCollatorsStorageV109 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class CollatorSelectionCandidacyBondStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'CandidacyBond'
    }

    /**
     *  Fixed amount to deposit to become a collator.
     * 
     *  When a collator calls `leave_intent` they immediately receive the deposit back.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fixed amount to deposit to become a collator.
     * 
     *  When a collator calls `leave_intent` they immediately receive the deposit back.
     */
    get asV109(): CollatorSelectionCandidacyBondStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Fixed amount to deposit to become a collator.
 * 
 *  When a collator calls `leave_intent` they immediately receive the deposit back.
 */
export interface CollatorSelectionCandidacyBondStorageV109 {
    get(): Promise<bigint>
}

export class CollatorSelectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get asV109(): CollatorSelectionCandidatesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The (community, limited) collation candidates.
 */
export interface CollatorSelectionCandidatesStorageV109 {
    get(): Promise<v109.CandidateInfo[]>
}

export class CollatorSelectionDesiredCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'DesiredCandidates'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get asV109(): CollatorSelectionDesiredCandidatesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface CollatorSelectionDesiredCandidatesStorageV109 {
    get(): Promise<number>
}

export class CollatorSelectionInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get asV109(): CollatorSelectionInvulnerablesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The invulnerable, fixed collators.
 */
export interface CollatorSelectionInvulnerablesStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class CollatorSelectionLastAuthoredBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'LastAuthoredBlock'
    }

    /**
     *  Last block authored by collator.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Last block authored by collator.
     */
    get asV109(): CollatorSelectionLastAuthoredBlockStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Last block authored by collator.
 */
export interface CollatorSelectionLastAuthoredBlockStorageV109 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV109(): CouncilMembersStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV109(): CouncilPrimeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV109(): CouncilProposalCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV109 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'bfc06c27f0a67a5d0b88023ef9f2ea0709b0385bb6d97afce41e87711ba65719'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV109(): CouncilProposalOfStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '4e55a1d1db147e15ea55ddb7762805919d11dd4150336b397c8db82495cfc1c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV115(): CouncilProposalOfStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '91ea66f9536c1a58a46c0e174f160765775162108d884c478546e57103a55c58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV125(): CouncilProposalOfStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '48a0b897e2d24ed190b3c1f6aea22f06c8d6163e75eca7357621e34b311f6762'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV135(): CouncilProposalOfStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV136(): boolean {
        return this.getTypeHash() === 'a6d87090d71c3a87c6fb2103391d7b97ed14018bafaafc294480c52ce8a17732'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV136(): CouncilProposalOfStorageV136 {
        assert(this.isV136)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV142(): boolean {
        return this.getTypeHash() === '836679e810e596c84a725ed14f9f76f8a671f1a3bf061adc7a965c0d03e72410'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV142(): CouncilProposalOfStorageV142 {
        assert(this.isV142)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV147(): boolean {
        return this.getTypeHash() === 'e9a9c37441f2860c7c91dd0a3e76cef9ed6150cd65454a592b17f67fabe6c15b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV147(): CouncilProposalOfStorageV147 {
        assert(this.isV147)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '25a8b45253a6a9d28bfa249316134ef6aff747505c5360f5a2a2325ac27c3bd1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): CouncilProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV158(): boolean {
        return this.getTypeHash() === 'd0417d928d536a95fc2dd07b8e0285a9e562fca7f45a5908d336cc553675ef23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV158(): CouncilProposalOfStorageV158 {
        assert(this.isV158)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV164(): boolean {
        return this.getTypeHash() === 'f259adcd3e996bee34f8c30ff07ec6726f1a0504be04bdbe83a9f7ed648dcc84'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV164(): CouncilProposalOfStorageV164 {
        assert(this.isV164)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '03f7b715830a500af52d2765e99fd61b7a470ebfd505c8c1f249fdb5d018289a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV172(): CouncilProposalOfStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV174(): boolean {
        return this.getTypeHash() === '9e14b3d6c300b4c3d0d7abd73c15764179b2e9cc01bc30a6d15723e50c8f0b66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV174(): CouncilProposalOfStorageV174 {
        assert(this.isV174)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV178(): boolean {
        return this.getTypeHash() === 'e39cc633e1d1feeb2a2726972ec27849cb3e02552b7609dbcc8141eebbae082d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV178(): CouncilProposalOfStorageV178 {
        assert(this.isV178)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV180(): boolean {
        return this.getTypeHash() === '3db30cb65c21288fc487ac2409e2342c06846038331e7aaa5182cefe5bffc195'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV180(): CouncilProposalOfStorageV180 {
        assert(this.isV180)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV109 {
    get(key: Uint8Array): Promise<(v109.Call | undefined)>
    getAll(): Promise<v109.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v109.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV115 {
    get(key: Uint8Array): Promise<(v115.Call | undefined)>
    getAll(): Promise<v115.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v115.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV125 {
    get(key: Uint8Array): Promise<(v125.Call | undefined)>
    getAll(): Promise<v125.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v125.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV135 {
    get(key: Uint8Array): Promise<(v135.Call | undefined)>
    getAll(): Promise<v135.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v135.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v135.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v135.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v135.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v135.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV136 {
    get(key: Uint8Array): Promise<(v136.Call | undefined)>
    getAll(): Promise<v136.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v136.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v136.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v136.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v136.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v136.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV142 {
    get(key: Uint8Array): Promise<(v142.Call | undefined)>
    getAll(): Promise<v142.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v142.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v142.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v142.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v142.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v142.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV147 {
    get(key: Uint8Array): Promise<(v147.Call | undefined)>
    getAll(): Promise<v147.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v147.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v147.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v147.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v147.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v147.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Call | undefined)>
    getAll(): Promise<v155.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV158 {
    get(key: Uint8Array): Promise<(v158.Call | undefined)>
    getAll(): Promise<v158.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v158.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v158.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v158.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v158.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v158.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV164 {
    get(key: Uint8Array): Promise<(v164.Call | undefined)>
    getAll(): Promise<v164.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v164.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v164.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v164.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v164.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v164.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV172 {
    get(key: Uint8Array): Promise<(v172.Call | undefined)>
    getAll(): Promise<v172.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v172.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV174 {
    get(key: Uint8Array): Promise<(v174.Call | undefined)>
    getAll(): Promise<v174.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v174.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v174.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v174.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v174.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v174.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV178 {
    get(key: Uint8Array): Promise<(v178.Call | undefined)>
    getAll(): Promise<v178.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v178.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v178.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v178.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v178.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v178.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV180 {
    get(key: Uint8Array): Promise<(v180.Call | undefined)>
    getAll(): Promise<v180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v180.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV109(): CouncilProposalsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV109(): CouncilVotingStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV109 {
    get(key: Uint8Array): Promise<(v109.Votes | undefined)>
    getAll(): Promise<v109.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v109.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Votes][]>
}

export class DCARemainingAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'RemainingAmounts'
    }

    /**
     *  Keep tracking the remaining amounts to spend for DCA schedules
     */
    get isV155(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Keep tracking the remaining amounts to spend for DCA schedules
     */
    get asV155(): DCARemainingAmountsStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Keep tracking the remaining amounts to spend for DCA schedules
 */
export interface DCARemainingAmountsStorageV155 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class DCARetriesOnErrorStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'RetriesOnError'
    }

    /**
     *  Keep tracking the retry on error flag for DCA schedules
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'a3e619d490df97bf53d27ef56b2de9c9735f5261e6d3704096163c163e899b9d'
    }

    /**
     *  Keep tracking the retry on error flag for DCA schedules
     */
    get asV155(): DCARetriesOnErrorStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Keep tracking the retry on error flag for DCA schedules
 */
export interface DCARetriesOnErrorStorageV155 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class DCAScheduleIdSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'ScheduleIdSequencer'
    }

    /**
     *  Id sequencer for schedules
     */
    get isV155(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Id sequencer for schedules
     */
    get asV155(): DCAScheduleIdSequencerStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Id sequencer for schedules
 */
export interface DCAScheduleIdSequencerStorageV155 {
    get(): Promise<number>
}

export class DCAScheduleIdsPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'ScheduleIdsPerBlock'
    }

    /**
     *  Keep tracking of the schedule ids to be executed in the block
     */
    get isV155(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  Keep tracking of the schedule ids to be executed in the block
     */
    get asV155(): DCAScheduleIdsPerBlockStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Keep tracking of the schedule ids to be executed in the block
 */
export interface DCAScheduleIdsPerBlockStorageV155 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class DCAScheduleOwnershipStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'ScheduleOwnership'
    }

    /**
     *  Storing schedule ownership
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'f86593c001e887d0d33262a00fdffe621db8bf4870a2476b2191c167bbc3e4d8'
    }

    /**
     *  Storing schedule ownership
     */
    get asV155(): DCAScheduleOwnershipStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Storing schedule ownership
 */
export interface DCAScheduleOwnershipStorageV155 {
    get(key1: Uint8Array, key2: number): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, number][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: null][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: null][]>
}

export class DCASchedulesStorage extends StorageBase {
    protected getPrefix() {
        return 'DCA'
    }

    protected getName() {
        return 'Schedules'
    }

    /**
     *  Storing schedule details
     */
    get isV155(): boolean {
        return this.getTypeHash() === '7faa7c731736405c1aef9fa2c14113e57ca9a6b2afc39dafb703ae6413baaba9'
    }

    /**
     *  Storing schedule details
     */
    get asV155(): DCASchedulesStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Storing schedule details
     */
    get isV158(): boolean {
        return this.getTypeHash() === '6d813922a05fc4840c92831a03f31fb9697a0c42475da874a2832ef8ff2816c7'
    }

    /**
     *  Storing schedule details
     */
    get asV158(): DCASchedulesStorageV158 {
        assert(this.isV158)
        return this as any
    }
}

/**
 *  Storing schedule details
 */
export interface DCASchedulesStorageV155 {
    get(key: number): Promise<(v155.Schedule | undefined)>
    getAll(): Promise<v155.Schedule[]>
    getMany(keys: number[]): Promise<(v155.Schedule | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v155.Schedule][]>
    getPairs(key: number): Promise<[k: number, v: v155.Schedule][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v155.Schedule][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v155.Schedule][]>
}

/**
 *  Storing schedule details
 */
export interface DCASchedulesStorageV158 {
    get(key: number): Promise<(v158.Schedule | undefined)>
    getAll(): Promise<v158.Schedule[]>
    getMany(keys: number[]): Promise<(v158.Schedule | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v158.Schedule][]>
    getPairs(key: number): Promise<[k: number, v: v158.Schedule][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v158.Schedule][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v158.Schedule][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV109(): DemocracyBlacklistStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV109 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV109(): DemocracyCancellationsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV109 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV109(): DemocracyDepositOfStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV109 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV109(): DemocracyLastTabledWasExternalStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV109 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV109(): DemocracyLocksStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyLocksStorageV109 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV109(): DemocracyLowestUnbakedStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV109 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV109(): DemocracyNextExternalStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV155(): DemocracyNextExternalStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV109 {
    get(): Promise<([Uint8Array, v109.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV155 {
    get(): Promise<([v155.Bounded, v155.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV109(): DemocracyPreimagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV109 {
    get(key: Uint8Array): Promise<(v109.PreimageStatus | undefined)>
    getAll(): Promise<v109.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v109.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV109(): DemocracyPublicPropCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV109 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV109(): DemocracyPublicPropsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV155(): DemocracyPublicPropsStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV109 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV155 {
    get(): Promise<[number, v155.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV109(): DemocracyReferendumCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV109 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV109(): DemocracyReferendumInfoOfStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV155(): DemocracyReferendumInfoOfStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV109 {
    get(key: number): Promise<(v109.ReferendumInfo | undefined)>
    getAll(): Promise<v109.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v109.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v109.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v109.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v109.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v109.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV155 {
    get(key: number): Promise<(v155.ReferendumInfo | undefined)>
    getAll(): Promise<v155.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v155.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v155.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v155.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v155.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v155.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV109(): DemocracyStorageVersionStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV109 {
    get(): Promise<(v109.Type_330 | undefined)>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV109(): DemocracyVotingOfStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV109 {
    get(key: Uint8Array): Promise<v109.Voting>
    getAll(): Promise<v109.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v109.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Voting][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asV109(): DmpQueueConfigurationStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
    }

    /**
     *  The configuration.
     */
    get asV115(): DmpQueueConfigurationStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asV155(): DmpQueueConfigurationStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV109 {
    get(): Promise<v109.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV115 {
    get(): Promise<v115.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV155 {
    get(): Promise<v155.ConfigData>
}

export class DmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV155(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV155(): DmpQueueCounterForOverweightStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageV155 {
    get(): Promise<number>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asV109(): DmpQueueOverweightStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageV109 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asV109(): DmpQueuePageIndexStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageV109 {
    get(): Promise<v109.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asV109(): DmpQueuePagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageV109 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class DusterAccountBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'AccountBlacklist'
    }

    /**
     *  Accounts excluded from dusting.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  Accounts excluded from dusting.
     */
    get asV135(): DusterAccountBlacklistStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Accounts excluded from dusting.
 */
export interface DusterAccountBlacklistStorageV135 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class DusterDustAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'DustAccount'
    }

    /**
     *  Account to send dust to.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to send dust to.
     */
    get asV135(): DusterDustAccountStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Account to send dust to.
 */
export interface DusterDustAccountStorageV135 {
    get(): Promise<(Uint8Array | undefined)>
}

export class DusterRewardAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'RewardAccount'
    }

    /**
     *  Account to take reward from.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to take reward from.
     */
    get asV135(): DusterRewardAccountStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Account to take reward from.
 */
export interface DusterRewardAccountStorageV135 {
    get(): Promise<(Uint8Array | undefined)>
}

export class DynamicFeesAssetFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'DynamicFees'
    }

    protected getName() {
        return 'AssetFee'
    }

    /**
     *  Stores last calculated fee of an asset and block number in which it was changed..
     *  Stored as (Asset fee, Protocol fee, Block number)
     */
    get isV164(): boolean {
        return this.getTypeHash() === '2368ed1a7ca9473081be493e334ff59757adace374ac9a619edbed1e5df8ed60'
    }

    /**
     *  Stores last calculated fee of an asset and block number in which it was changed..
     *  Stored as (Asset fee, Protocol fee, Block number)
     */
    get asV164(): DynamicFeesAssetFeeStorageV164 {
        assert(this.isV164)
        return this as any
    }
}

/**
 *  Stores last calculated fee of an asset and block number in which it was changed..
 *  Stored as (Asset fee, Protocol fee, Block number)
 */
export interface DynamicFeesAssetFeeStorageV164 {
    get(key: number): Promise<(v164.FeeEntry | undefined)>
    getAll(): Promise<v164.FeeEntry[]>
    getMany(keys: number[]): Promise<(v164.FeeEntry | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v164.FeeEntry][]>
    getPairs(key: number): Promise<[k: number, v: v164.FeeEntry][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v164.FeeEntry][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v164.FeeEntry][]>
}

export class ElectionsCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV109(): ElectionsCandidatesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsCandidatesStorageV109 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class ElectionsElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV109(): ElectionsElectionRoundsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsElectionRoundsStorageV109 {
    get(): Promise<number>
}

export class ElectionsMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV109(): ElectionsMembersStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsMembersStorageV109 {
    get(): Promise<v109.SeatHolder[]>
}

export class ElectionsRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV109(): ElectionsRunnersUpStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsRunnersUpStorageV109 {
    get(): Promise<v109.SeatHolder[]>
}

export class ElectionsVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV109(): ElectionsVotingStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsVotingStorageV109 {
    get(key: Uint8Array): Promise<v109.Voter>
    getAll(): Promise<v109.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v109.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Voter][]>
}

export class EmaOracleAccumulatorStorage extends StorageBase {
    protected getPrefix() {
        return 'EmaOracle'
    }

    protected getName() {
        return 'Accumulator'
    }

    /**
     *  Accumulator for oracle data in current block that will be recorded at the end of the block.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '2935acad960ffe612abd9182aab884f17235674c74c6c4ed24ea359bcd73f81f'
    }

    /**
     *  Accumulator for oracle data in current block that will be recorded at the end of the block.
     */
    get asV135(): EmaOracleAccumulatorStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Accumulator for oracle data in current block that will be recorded at the end of the block.
     */
    get isV164(): boolean {
        return this.getTypeHash() === 'b736d244345cb79fb2b60b44aad527f96edc7d93ecc2959c65c250522ecb910c'
    }

    /**
     *  Accumulator for oracle data in current block that will be recorded at the end of the block.
     */
    get asV164(): EmaOracleAccumulatorStorageV164 {
        assert(this.isV164)
        return this as any
    }
}

/**
 *  Accumulator for oracle data in current block that will be recorded at the end of the block.
 */
export interface EmaOracleAccumulatorStorageV135 {
    get(): Promise<[[Uint8Array, [number, number]], v135.OracleEntry][]>
}

/**
 *  Accumulator for oracle data in current block that will be recorded at the end of the block.
 */
export interface EmaOracleAccumulatorStorageV164 {
    get(): Promise<[[Uint8Array, [number, number]], v164.OracleEntry][]>
}

export class EmaOracleOraclesStorage extends StorageBase {
    protected getPrefix() {
        return 'EmaOracle'
    }

    protected getName() {
        return 'Oracles'
    }

    /**
     *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
     * 
     *  Stores the data entry as well as the block number when the oracle was first initialized.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '0d7f31af5455fe95682bfc32ef219f6de10219e8414327735fdd3e09d1c4c0bf'
    }

    /**
     *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
     * 
     *  Stores the data entry as well as the block number when the oracle was first initialized.
     */
    get asV135(): EmaOracleOraclesStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
     * 
     *  Stores the data entry as well as the block number when the oracle was first initialized.
     */
    get isV164(): boolean {
        return this.getTypeHash() === 'd1205252d58c603af7b9da684c40f3acf5a97e49dc6f4a953ab0b6044af60fc5'
    }

    /**
     *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
     * 
     *  Stores the data entry as well as the block number when the oracle was first initialized.
     */
    get asV164(): EmaOracleOraclesStorageV164 {
        assert(this.isV164)
        return this as any
    }
}

/**
 *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
 * 
 *  Stores the data entry as well as the block number when the oracle was first initialized.
 */
export interface EmaOracleOraclesStorageV135 {
    get(key1: Uint8Array, key2: [number, number], key3: v135.OraclePeriod): Promise<([v135.OracleEntry, number] | undefined)>
    getAll(): Promise<[v135.OracleEntry, number][]>
    getMany(keys: [Uint8Array, [number, number], v135.OraclePeriod][]): Promise<([v135.OracleEntry, number] | undefined)[]>
    getKeys(): Promise<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeys(key1: Uint8Array, key2: [number, number]): Promise<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeys(key1: Uint8Array, key2: [number, number], key3: v135.OraclePeriod): Promise<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: [number, number]): AsyncIterable<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: [number, number], key3: v135.OraclePeriod): AsyncIterable<[Uint8Array, [number, number], v135.OraclePeriod][]>
    getPairs(): Promise<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairs(key1: Uint8Array, key2: [number, number]): Promise<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairs(key1: Uint8Array, key2: [number, number], key3: v135.OraclePeriod): Promise<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: [number, number]): AsyncIterable<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: [number, number], key3: v135.OraclePeriod): AsyncIterable<[k: [Uint8Array, [number, number], v135.OraclePeriod], v: [v135.OracleEntry, number]][]>
}

/**
 *  Orace storage keyed by data source, involved asset ids and the period length of the oracle.
 * 
 *  Stores the data entry as well as the block number when the oracle was first initialized.
 */
export interface EmaOracleOraclesStorageV164 {
    get(key1: Uint8Array, key2: [number, number], key3: v164.OraclePeriod): Promise<([v164.OracleEntry, number] | undefined)>
    getAll(): Promise<[v164.OracleEntry, number][]>
    getMany(keys: [Uint8Array, [number, number], v164.OraclePeriod][]): Promise<([v164.OracleEntry, number] | undefined)[]>
    getKeys(): Promise<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeys(key1: Uint8Array, key2: [number, number]): Promise<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeys(key1: Uint8Array, key2: [number, number], key3: v164.OraclePeriod): Promise<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: [number, number]): AsyncIterable<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: [number, number], key3: v164.OraclePeriod): AsyncIterable<[Uint8Array, [number, number], v164.OraclePeriod][]>
    getPairs(): Promise<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairs(key1: Uint8Array, key2: [number, number]): Promise<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairs(key1: Uint8Array, key2: [number, number], key3: v164.OraclePeriod): Promise<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: [number, number]): AsyncIterable<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: [number, number], key3: v164.OraclePeriod): AsyncIterable<[k: [Uint8Array, [number, number], v164.OraclePeriod], v: [v164.OracleEntry, number]][]>
}

export class GenesisHistoryPreviousChainStorage extends StorageBase {
    protected getPrefix() {
        return 'GenesisHistory'
    }

    protected getName() {
        return 'PreviousChain'
    }

    get isV109(): boolean {
        return this.getTypeHash() === 'c84428468d55569ba858db430bf2052bed6c62d8725e5789f3917e6f3a7e4b6a'
    }

    get asV109(): GenesisHistoryPreviousChainStorageV109 {
        assert(this.isV109)
        return this as any
    }

    get isV170(): boolean {
        return this.getTypeHash() === '34367dd54f3ee2babb992a280d36b5a65c44776083818bac202025bbaaebdfc0'
    }

    get asV170(): GenesisHistoryPreviousChainStorageV170 {
        assert(this.isV170)
        return this as any
    }
}

export interface GenesisHistoryPreviousChainStorageV109 {
    get(): Promise<v109.Chain>
}

export interface GenesisHistoryPreviousChainStorageV170 {
    get(): Promise<v170.Chain>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV109(): IdentityIdentityOfStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV109 {
    get(key: Uint8Array): Promise<(v109.Registration | undefined)>
    getAll(): Promise<v109.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v109.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV109(): IdentityRegistrarsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV109 {
    get(): Promise<(v109.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV109(): IdentitySubsOfStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV109 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV109(): IdentitySuperOfStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV109 {
    get(key: Uint8Array): Promise<([Uint8Array, v109.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v109.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v109.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v109.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v109.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v109.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v109.Data]][]>
}

export class LBPFeeCollectorWithAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'LBP'
    }

    protected getName() {
        return 'FeeCollectorWithAsset'
    }

    /**
     *  Storage used for tracking existing fee collectors
     *  Not more than one fee collector per asset possible
     */
    get isV174(): boolean {
        return this.getTypeHash() === 'ebdf043edab397a5ed3d655551fad928a7307d1bde214adf993157ad9d1521e0'
    }

    /**
     *  Storage used for tracking existing fee collectors
     *  Not more than one fee collector per asset possible
     */
    get asV174(): LBPFeeCollectorWithAssetStorageV174 {
        assert(this.isV174)
        return this as any
    }
}

/**
 *  Storage used for tracking existing fee collectors
 *  Not more than one fee collector per asset possible
 */
export interface LBPFeeCollectorWithAssetStorageV174 {
    get(key1: Uint8Array, key2: number): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [Uint8Array, number][]): Promise<boolean[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
}

export class LBPPoolDataStorage extends StorageBase {
    protected getPrefix() {
        return 'LBP'
    }

    protected getName() {
        return 'PoolData'
    }

    /**
     *  Details of a pool.
     */
    get isV174(): boolean {
        return this.getTypeHash() === '122378a7b6f80edd2b209a84c4ae915782df86cf92d66d0932085716a7dbccf9'
    }

    /**
     *  Details of a pool.
     */
    get asV174(): LBPPoolDataStorageV174 {
        assert(this.isV174)
        return this as any
    }
}

/**
 *  Details of a pool.
 */
export interface LBPPoolDataStorageV174 {
    get(key: Uint8Array): Promise<(v174.Pool | undefined)>
    getAll(): Promise<v174.Pool[]>
    getMany(keys: Uint8Array[]): Promise<(v174.Pool | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v174.Pool][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v174.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v174.Pool][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v174.Pool][]>
}

export class MultiTransactionPaymentAcceptedCurrenciesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AcceptedCurrencies'
    }

    /**
     *  Curated list of currencies which fees can be paid with
     */
    get isV109(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Curated list of currencies which fees can be paid with
     */
    get asV109(): MultiTransactionPaymentAcceptedCurrenciesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Curated list of currencies which fees can be paid with
 */
export interface MultiTransactionPaymentAcceptedCurrenciesStorageV109 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class MultiTransactionPaymentAcceptedCurrencyPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AcceptedCurrencyPrice'
    }

    /**
     *  Block storage for accepted currency price
     */
    get isV109(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Block storage for accepted currency price
     */
    get asV109(): MultiTransactionPaymentAcceptedCurrencyPriceStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Block storage for accepted currency price
 */
export interface MultiTransactionPaymentAcceptedCurrencyPriceStorageV109 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class MultiTransactionPaymentAccountCurrencyMapStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AccountCurrencyMap'
    }

    /**
     *  Account currency map
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Account currency map
     */
    get asV109(): MultiTransactionPaymentAccountCurrencyMapStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Account currency map
 */
export interface MultiTransactionPaymentAccountCurrencyMapStorageV109 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class MultiTransactionPaymentFallbackAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'FallbackAccount'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get asV109(): MultiTransactionPaymentFallbackAccountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Account to use when pool does not exist.
 */
export interface MultiTransactionPaymentFallbackAccountStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV109(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV109(): MultisigCallsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

export interface MultisigCallsStorageV109 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV109(): MultisigMultisigsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV109 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v109.Multisig | undefined)>
    getAll(): Promise<v109.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v109.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v109.Multisig][]>
}

export class OTCNextOrderIdStorage extends StorageBase {
    protected getPrefix() {
        return 'OTC'
    }

    protected getName() {
        return 'NextOrderId'
    }

    /**
     *  ID sequencer for Orders
     */
    get isV136(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  ID sequencer for Orders
     */
    get asV136(): OTCNextOrderIdStorageV136 {
        assert(this.isV136)
        return this as any
    }
}

/**
 *  ID sequencer for Orders
 */
export interface OTCNextOrderIdStorageV136 {
    get(): Promise<number>
}

export class OTCOrdersStorage extends StorageBase {
    protected getPrefix() {
        return 'OTC'
    }

    protected getName() {
        return 'Orders'
    }

    get isV136(): boolean {
        return this.getTypeHash() === 'fb8d75ed1d67cf4705a345aa7db163c63f08571dd39737384947e451ae7979dd'
    }

    get asV136(): OTCOrdersStorageV136 {
        assert(this.isV136)
        return this as any
    }
}

export interface OTCOrdersStorageV136 {
    get(key: number): Promise<(v136.Order | undefined)>
    getAll(): Promise<v136.Order[]>
    getMany(keys: number[]): Promise<(v136.Order | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v136.Order][]>
    getPairs(key: number): Promise<[k: number, v: v136.Order][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v136.Order][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v136.Order][]>
}

export class OmnipoolAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'Assets'
    }

    /**
     *  State of an asset in the omnipool
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'e9d175ccf43f4534de030cc68b59361b729e5bc590b17200ab03088a09a1bd29'
    }

    /**
     *  State of an asset in the omnipool
     */
    get asV115(): OmnipoolAssetsStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  State of an asset in the omnipool
 */
export interface OmnipoolAssetsStorageV115 {
    get(key: number): Promise<(v115.AssetState | undefined)>
    getAll(): Promise<v115.AssetState[]>
    getMany(keys: number[]): Promise<(v115.AssetState | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v115.AssetState][]>
    getPairs(key: number): Promise<[k: number, v: v115.AssetState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v115.AssetState][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v115.AssetState][]>
}

export class OmnipoolHubAssetImbalanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'HubAssetImbalance'
    }

    /**
     *  Imbalance of hub asset
     */
    get isV115(): boolean {
        return this.getTypeHash() === '9e816d08971ef5e41ed1ad5bceebcca61bda2da41c127d1388748985314217d6'
    }

    /**
     *  Imbalance of hub asset
     */
    get asV115(): OmnipoolHubAssetImbalanceStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Imbalance of hub asset
 */
export interface OmnipoolHubAssetImbalanceStorageV115 {
    get(): Promise<v115.SimpleImbalance>
}

export class OmnipoolHubAssetTradabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'HubAssetTradability'
    }

    /**
     *  Tradable state of hub asset.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'e15351094e9728a7322db1f1dc2dece788c1a18fc70bddda3cd80a1bf391b755'
    }

    /**
     *  Tradable state of hub asset.
     */
    get asV115(): OmnipoolHubAssetTradabilityStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Tradable state of hub asset.
 */
export interface OmnipoolHubAssetTradabilityStorageV115 {
    get(): Promise<v115.Tradability>
}

export class OmnipoolNextPositionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'NextPositionId'
    }

    /**
     *  Position ids sequencer
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Position ids sequencer
     */
    get asV115(): OmnipoolNextPositionIdStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Position ids sequencer
 */
export interface OmnipoolNextPositionIdStorageV115 {
    get(): Promise<bigint>
}

export class OmnipoolPositionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'Positions'
    }

    /**
     *  LP positions. Maps NFT instance id to corresponding position
     */
    get isV115(): boolean {
        return this.getTypeHash() === '1d8990c9656eac8feaeaedd40fdef01c0dbee37807d29a7a276760f2c61d62c7'
    }

    /**
     *  LP positions. Maps NFT instance id to corresponding position
     */
    get asV115(): OmnipoolPositionsStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  LP positions. Maps NFT instance id to corresponding position
     */
    get isV118(): boolean {
        return this.getTypeHash() === 'af427bb2ed1643dc9836c996e9e1440736c5a7025b9ddaa493c1b9b4c6800de5'
    }

    /**
     *  LP positions. Maps NFT instance id to corresponding position
     */
    get asV118(): OmnipoolPositionsStorageV118 {
        assert(this.isV118)
        return this as any
    }
}

/**
 *  LP positions. Maps NFT instance id to corresponding position
 */
export interface OmnipoolPositionsStorageV115 {
    get(key: bigint): Promise<(v115.Position | undefined)>
    getAll(): Promise<v115.Position[]>
    getMany(keys: bigint[]): Promise<(v115.Position | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v115.Position][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v115.Position][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v115.Position][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v115.Position][]>
}

/**
 *  LP positions. Maps NFT instance id to corresponding position
 */
export interface OmnipoolPositionsStorageV118 {
    get(key: bigint): Promise<(v118.Position | undefined)>
    getAll(): Promise<v118.Position[]>
    getMany(keys: bigint[]): Promise<(v118.Position | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v118.Position][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v118.Position][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v118.Position][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v118.Position][]>
}

export class OmnipoolTvlCapStorage extends StorageBase {
    protected getPrefix() {
        return 'Omnipool'
    }

    protected getName() {
        return 'TvlCap'
    }

    /**
     *  TVL cap
     */
    get isV125(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  TVL cap
     */
    get asV125(): OmnipoolTvlCapStorageV125 {
        assert(this.isV125)
        return this as any
    }
}

/**
 *  TVL cap
 */
export interface OmnipoolTvlCapStorageV125 {
    get(): Promise<bigint>
}

export class OmnipoolLiquidityMiningOmniPositionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolLiquidityMining'
    }

    protected getName() {
        return 'OmniPositionId'
    }

    /**
     *  Map of omnipool position's ids to LM's deposit ids.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    /**
     *  Map of omnipool position's ids to LM's deposit ids.
     */
    get asV135(): OmnipoolLiquidityMiningOmniPositionIdStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Map of omnipool position's ids to LM's deposit ids.
 */
export interface OmnipoolLiquidityMiningOmniPositionIdStorageV135 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class OmnipoolWarehouseLMActiveYieldFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'ActiveYieldFarm'
    }

    /**
     *  Active(farms able to receive LP shares deposits) yield farms.
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'a0516d776b944cf45819403e1f494eac38a96659f4293080a680aae9de448d0e'
    }

    /**
     *  Active(farms able to receive LP shares deposits) yield farms.
     */
    get asV135(): OmnipoolWarehouseLMActiveYieldFarmStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Active(farms able to receive LP shares deposits) yield farms.
 */
export interface OmnipoolWarehouseLMActiveYieldFarmStorageV135 {
    get(key1: number, key2: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, number][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: number][]>
    getPairs(key1: number): Promise<[k: [number, number], v: number][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: number][]>
}

export class OmnipoolWarehouseLMDepositStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'Deposit'
    }

    /**
     *  Deposit details.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '9bae3a50a66f5272301b23523fe77c4a073c260ef42ed96c937b987f23d4734a'
    }

    /**
     *  Deposit details.
     */
    get asV135(): OmnipoolWarehouseLMDepositStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Deposit details.
 */
export interface OmnipoolWarehouseLMDepositStorageV135 {
    get(key: bigint): Promise<(v135.DepositData | undefined)>
    getAll(): Promise<v135.DepositData[]>
    getMany(keys: bigint[]): Promise<(v135.DepositData | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v135.DepositData][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v135.DepositData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v135.DepositData][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v135.DepositData][]>
}

export class OmnipoolWarehouseLMDepositSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'DepositSequencer'
    }

    get isV135(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV135(): OmnipoolWarehouseLMDepositSequencerStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

export interface OmnipoolWarehouseLMDepositSequencerStorageV135 {
    get(): Promise<bigint>
}

export class OmnipoolWarehouseLMFarmSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'FarmSequencer'
    }

    /**
     *  Id sequencer for `GlobalFarm` and `YieldFarm`.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Id sequencer for `GlobalFarm` and `YieldFarm`.
     */
    get asV135(): OmnipoolWarehouseLMFarmSequencerStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Id sequencer for `GlobalFarm` and `YieldFarm`.
 */
export interface OmnipoolWarehouseLMFarmSequencerStorageV135 {
    get(): Promise<number>
}

export class OmnipoolWarehouseLMGlobalFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'GlobalFarm'
    }

    get isV135(): boolean {
        return this.getTypeHash() === '2de44279f97e489b38496f3f6ebcbdc99a5d5cec2f43cb489d871451fe66d1f6'
    }

    get asV135(): OmnipoolWarehouseLMGlobalFarmStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

export interface OmnipoolWarehouseLMGlobalFarmStorageV135 {
    get(key: number): Promise<(v135.GlobalFarmData | undefined)>
    getAll(): Promise<v135.GlobalFarmData[]>
    getMany(keys: number[]): Promise<(v135.GlobalFarmData | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v135.GlobalFarmData][]>
    getPairs(key: number): Promise<[k: number, v: v135.GlobalFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v135.GlobalFarmData][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v135.GlobalFarmData][]>
}

export class OmnipoolWarehouseLMYieldFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'OmnipoolWarehouseLM'
    }

    protected getName() {
        return 'YieldFarm'
    }

    /**
     *  Yield farm details.
     */
    get isV135(): boolean {
        return this.getTypeHash() === 'c54887d672750eddc7e51dec2e31d85fec2c5268b73c9be014369949488d02bc'
    }

    /**
     *  Yield farm details.
     */
    get asV135(): OmnipoolWarehouseLMYieldFarmStorageV135 {
        assert(this.isV135)
        return this as any
    }
}

/**
 *  Yield farm details.
 */
export interface OmnipoolWarehouseLMYieldFarmStorageV135 {
    get(key1: number, key2: number, key3: number): Promise<(v135.YieldFarmData | undefined)>
    getAll(): Promise<v135.YieldFarmData[]>
    getMany(keys: [number, number, number][]): Promise<(v135.YieldFarmData | undefined)[]>
    getKeys(): Promise<[number, number, number][]>
    getKeys(key1: number): Promise<[number, number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number, number][]>
    getKeys(key1: number, key2: number, key3: number): Promise<[number, number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number, key3: number): AsyncIterable<[number, number, number][]>
    getPairs(): Promise<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairs(key1: number): Promise<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairs(key1: number, key2: number, key3: number): Promise<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number, number], v: v135.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: number, key2: number, key3: number): AsyncIterable<[k: [number, number, number], v: v135.YieldFarmData][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV109(): ParachainInfoParachainIdStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageV109 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asV109(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV109 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV109(): ParachainSystemAuthorizedUpgradeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asV109(): ParachainSystemCustomValidationHeadDataStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asV109(): ParachainSystemDidSetValidationCodeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageV109 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV109(): ParachainSystemHostConfigurationStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV109 {
    get(): Promise<(v109.V1AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV109(): ParachainSystemHrmpOutboundMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageV109 {
    get(): Promise<v109.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV109(): ParachainSystemHrmpWatermarkStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageV109 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV109(): ParachainSystemLastDmqMqcHeadStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageV109 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV109(): ParachainSystemLastHrmpMqcHeadsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageV109 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asV115(): ParachainSystemLastRelayChainBlockNumberStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageV115 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asV109(): ParachainSystemNewValidationCodeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asV109(): ParachainSystemPendingUpwardMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get asV109(): ParachainSystemPendingValidationCodeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface ParachainSystemPendingValidationCodeStorageV109 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV109(): ParachainSystemProcessedDownwardMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageV109 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV115(): ParachainSystemRelayStateProofStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageV115 {
    get(): Promise<(v115.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV109(): ParachainSystemRelevantMessagingStateStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV109 {
    get(): Promise<(v109.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV109(): ParachainSystemReservedDmpWeightOverrideStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV115(): ParachainSystemReservedDmpWeightOverrideStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV155(): ParachainSystemReservedDmpWeightOverrideStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV109 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV115 {
    get(): Promise<(v115.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV155 {
    get(): Promise<(v155.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV109(): ParachainSystemReservedXcmpWeightOverrideStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV115(): ParachainSystemReservedXcmpWeightOverrideStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV155(): ParachainSystemReservedXcmpWeightOverrideStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV109 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV115 {
    get(): Promise<(v115.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV155 {
    get(): Promise<(v155.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asV109(): ParachainSystemUpgradeRestrictionSignalStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageV109 {
    get(): Promise<(v109.V1UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV109(): ParachainSystemUpwardMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asV109(): ParachainSystemValidationDataStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageV109 {
    get(): Promise<(v109.V1PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV109(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV109(): PolkadotXcmAssetTrapsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageV109 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV109(): PolkadotXcmCurrentMigrationStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageV109 {
    get(): Promise<(v109.VersionMigrationStage | undefined)>
}

export class PolkadotXcmLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV155(): PolkadotXcmLockedFungiblesStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageV155 {
    get(key: Uint8Array): Promise<([bigint, v155.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v155.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v155.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v155.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v155.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v155.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v155.VersionedMultiLocation][]][]>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV109(): PolkadotXcmQueriesStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV155(): PolkadotXcmQueriesStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV109 {
    get(key: bigint): Promise<(v109.QueryStatus | undefined)>
    getAll(): Promise<v109.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v109.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v109.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v109.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v109.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v109.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV155 {
    get(key: bigint): Promise<(v155.QueryStatus | undefined)>
    getAll(): Promise<v155.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v155.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v155.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v155.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v155.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v155.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV109(): PolkadotXcmQueryCounterStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageV109 {
    get(): Promise<bigint>
}

export class PolkadotXcmRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV155(): PolkadotXcmRemoteLockedFungiblesStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV155 {
    get(key1: number, key2: Uint8Array, key3: v155.VersionedAssetId): Promise<(v155.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v155.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v155.VersionedAssetId][]): Promise<(v155.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v155.VersionedAssetId): Promise<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v155.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v155.VersionedAssetId): AsyncIterable<[number, Uint8Array, v155.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v155.VersionedAssetId): Promise<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v155.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v155.VersionedAssetId], v: v155.RemoteLockedFungibleRecord][]>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV109(): PolkadotXcmSafeXcmVersionStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageV109 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV109(): PolkadotXcmSupportedVersionStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV155(): PolkadotXcmSupportedVersionStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV109 {
    get(key1: number, key2: v109.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v109.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v109.VersionedMultiLocation): Promise<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v109.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v109.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v109.VersionedMultiLocation): Promise<[k: [number, v109.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV155 {
    get(key1: number, key2: v155.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v155.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v155.VersionedMultiLocation): Promise<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v155.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v155.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v155.VersionedMultiLocation): Promise<[k: [number, v155.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV109(): PolkadotXcmVersionDiscoveryQueueStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV155(): PolkadotXcmVersionDiscoveryQueueStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV109 {
    get(): Promise<[v109.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV155 {
    get(): Promise<[v155.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV109(): PolkadotXcmVersionNotifiersStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV155(): PolkadotXcmVersionNotifiersStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV109 {
    get(key1: number, key2: v109.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v109.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v109.VersionedMultiLocation): Promise<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v109.VersionedMultiLocation): Promise<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV155 {
    get(key1: number, key2: v155.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v155.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v155.VersionedMultiLocation): Promise<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v155.VersionedMultiLocation): Promise<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV109(): PolkadotXcmVersionNotifyTargetsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV155(): PolkadotXcmVersionNotifyTargetsStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV109 {
    get(key1: number, key2: v109.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v109.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v109.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v109.VersionedMultiLocation): Promise<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[number, v109.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v109.VersionedMultiLocation): Promise<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v109.VersionedMultiLocation): AsyncIterable<[k: [number, v109.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV155 {
    get(key1: number, key2: v155.VersionedMultiLocation): Promise<([bigint, v155.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v155.Weight, number][]>
    getMany(keys: [number, v155.VersionedMultiLocation][]): Promise<([bigint, v155.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v155.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v155.VersionedMultiLocation): Promise<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[number, v155.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
    getPairs(key1: number, key2: v155.VersionedMultiLocation): Promise<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v155.VersionedMultiLocation): AsyncIterable<[k: [number, v155.VersionedMultiLocation], v: [bigint, v155.Weight, number]][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV109(): PreimagePreimageForStorageV109 {
        assert(this.isV109)
        return this as any
    }

    get isV155(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV155(): PreimagePreimageForStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV109 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV155 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV109(): PreimageStatusForStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV155(): PreimageStatusForStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV109 {
    get(key: Uint8Array): Promise<(v109.RequestStatus | undefined)>
    getAll(): Promise<v109.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v109.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV155 {
    get(key: Uint8Array): Promise<(v155.RequestStatus | undefined)>
    getAll(): Promise<v155.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v155.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.RequestStatus][]>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV109(): ProxyAnnouncementsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV109 {
    get(key: Uint8Array): Promise<[v109.Announcement[], bigint]>
    getAll(): Promise<[v109.Announcement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v109.Announcement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v109.Announcement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v109.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v109.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v109.Announcement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a9460961c694ba8fec4a9f1f4b7ab7cbb4c85c421757f859b3b379acf27ad5c9'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV109(): ProxyProxiesStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV164(): boolean {
        return this.getTypeHash() === '1fbee74312fce9a45fa0994a95820a247263c6f9bd50a942461b4527fb0b686c'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV164(): ProxyProxiesStorageV164 {
        assert(this.isV164)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV109 {
    get(key: Uint8Array): Promise<[v109.ProxyDefinition[], bigint]>
    getAll(): Promise<[v109.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v109.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v109.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v109.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v109.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v109.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV164 {
    get(key: Uint8Array): Promise<[v164.ProxyDefinition[], bigint]>
    getAll(): Promise<[v164.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v164.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v164.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v164.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v164.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v164.ProxyDefinition[], bigint]][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f1aa061eacfa5e448d9b2f2e70ab2352baeca6d8473a1be46db00bd65859a4fe'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV109(): SchedulerAgendaStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'a22120e740a7f57f34a183c6e0c369b53396125ccb2dab2874703cc1aaec4293'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV115(): SchedulerAgendaStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '5b816602d9c21cfc29d72a3cd711129d6dab5701752b37623f7cef07d42c760b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV125(): SchedulerAgendaStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '847eb5ca6e2d7b732720f4d4419857813e915eab8175328847cae0d2eb5d251f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV135(): SchedulerAgendaStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV136(): boolean {
        return this.getTypeHash() === '38b7eb08ed5a4441898b65f1638fb550dd5552c852f5f9b7b56bab257c684804'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV136(): SchedulerAgendaStorageV136 {
        assert(this.isV136)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV142(): boolean {
        return this.getTypeHash() === '209ac07e0e11da57d6165df3abfb75d079e5a881d25392eabddfa688c6139ec0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV142(): SchedulerAgendaStorageV142 {
        assert(this.isV142)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV147(): boolean {
        return this.getTypeHash() === 'cb68bf5a9a3b640561dcca42ec86c58f1d48fb384c2e81f5594e6b4df341e3ed'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV147(): SchedulerAgendaStorageV147 {
        assert(this.isV147)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV155(): SchedulerAgendaStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV109 {
    get(key: number): Promise<(v109.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v109.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v109.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v109.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v109.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v109.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v109.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV115 {
    get(key: number): Promise<(v115.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v115.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v115.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v115.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v115.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v115.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v115.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV125 {
    get(key: number): Promise<(v125.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v125.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v125.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v125.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v125.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v125.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v125.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV135 {
    get(key: number): Promise<(v135.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v135.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v135.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v135.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v135.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v135.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v135.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV136 {
    get(key: number): Promise<(v136.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v136.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v136.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v136.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v136.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v136.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v136.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV142 {
    get(key: number): Promise<(v142.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v142.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v142.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v142.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v142.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v142.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v142.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV147 {
    get(key: number): Promise<(v147.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v147.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v147.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v147.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v147.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v147.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v147.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV155 {
    get(key: number): Promise<(v155.Scheduled | undefined)[]>
    getAll(): Promise<(v155.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v155.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v155.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v155.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV155(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV155(): SchedulerIncompleteSinceStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV155 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV109(): SchedulerLookupStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV155(): SchedulerLookupStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV109 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV155 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV109(): SessionCurrentIndexStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV109 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asV109(): SessionDisabledValidatorsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV109 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV109(): SessionKeyOwnerStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV109 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV109(): SessionNextKeysStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV109 {
    get(key: Uint8Array): Promise<(v109.SessionKeys | undefined)>
    getAll(): Promise<v109.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v109.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV109(): SessionQueuedChangedStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV109 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV109(): SessionQueuedKeysStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV109 {
    get(): Promise<[Uint8Array, v109.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV109(): SessionValidatorsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class StableswapAssetTradabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'Stableswap'
    }

    protected getName() {
        return 'AssetTradability'
    }

    /**
     *  Tradability state of pool assets.
     */
    get isV178(): boolean {
        return this.getTypeHash() === 'fc4b351202ccc0b4e683c255c2c41a11a99314d78c41f3c57d487561dda1e5ae'
    }

    /**
     *  Tradability state of pool assets.
     */
    get asV178(): StableswapAssetTradabilityStorageV178 {
        assert(this.isV178)
        return this as any
    }
}

/**
 *  Tradability state of pool assets.
 */
export interface StableswapAssetTradabilityStorageV178 {
    get(key1: number, key2: number): Promise<v178.Tradability>
    getAll(): Promise<v178.Tradability[]>
    getMany(keys: [number, number][]): Promise<v178.Tradability[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v178.Tradability][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v178.Tradability][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v178.Tradability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v178.Tradability][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v178.Tradability][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v178.Tradability][]>
}

export class StableswapPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Stableswap'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Existing pools
     */
    get isV178(): boolean {
        return this.getTypeHash() === '39ba762e39ca66eefa42e9c2303464e978aa61ea12a85ea23b66d0bf70697ffb'
    }

    /**
     *  Existing pools
     */
    get asV178(): StableswapPoolsStorageV178 {
        assert(this.isV178)
        return this as any
    }
}

/**
 *  Existing pools
 */
export interface StableswapPoolsStorageV178 {
    get(key: number): Promise<(v178.PoolInfo | undefined)>
    getAll(): Promise<v178.PoolInfo[]>
    getMany(keys: number[]): Promise<(v178.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v178.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v178.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v178.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v178.PoolInfo][]>
}

export class StakingNextPositionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NextPositionId'
    }

    /**
     *  Position ids sequencer.
     */
    get isV172(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Position ids sequencer.
     */
    get asV172(): StakingNextPositionIdStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Position ids sequencer.
 */
export interface StakingNextPositionIdStorageV172 {
    get(): Promise<bigint>
}

export class StakingPositionVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'PositionVotes'
    }

    /**
     *  List of position votes.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '1877e9e1c29c5eb8caf4ac8f4ce13f1c9d82de922f2369ccb5f34ee6ef9a3cb4'
    }

    /**
     *  List of position votes.
     */
    get asV172(): StakingPositionVotesStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  List of position votes.
 */
export interface StakingPositionVotesStorageV172 {
    get(key: bigint): Promise<v172.Type_462>
    getAll(): Promise<v172.Type_462[]>
    getMany(keys: bigint[]): Promise<v172.Type_462[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v172.Type_462][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v172.Type_462][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v172.Type_462][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v172.Type_462][]>
}

export class StakingPositionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Positions'
    }

    /**
     *  User's position state.
     */
    get isV172(): boolean {
        return this.getTypeHash() === 'ce7179565f0e9d22c7fb57c1b1e7dacc1957171ee7a006d6b88abfce4c5001dc'
    }

    /**
     *  User's position state.
     */
    get asV172(): StakingPositionsStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  User's position state.
 */
export interface StakingPositionsStorageV172 {
    get(key: bigint): Promise<(v172.Type_461 | undefined)>
    getAll(): Promise<v172.Type_461[]>
    getMany(keys: bigint[]): Promise<(v172.Type_461 | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v172.Type_461][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v172.Type_461][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v172.Type_461][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v172.Type_461][]>
}

export class StakingStakingStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Staking'
    }

    /**
     *  Global staking state.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '0eab0de87972883572569a051eb72372f1e579e6de3915d3cf41f9a352bea983'
    }

    /**
     *  Global staking state.
     */
    get asV172(): StakingStakingStorageV172 {
        assert(this.isV172)
        return this as any
    }
}

/**
 *  Global staking state.
 */
export interface StakingStakingStorageV172 {
    get(): Promise<v172.StakingData>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV109(): SudoKeyStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV109(): SystemAccountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV109 {
    get(key: Uint8Array): Promise<v109.AccountInfo>
    getAll(): Promise<v109.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v109.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV109(): SystemAllExtrinsicsLenStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV109 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV109(): SystemBlockHashStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV109 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV109(): SystemBlockWeightStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV115(): SystemBlockWeightStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV155(): SystemBlockWeightStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV109 {
    get(): Promise<v109.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV115 {
    get(): Promise<v115.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV155 {
    get(): Promise<v155.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV109(): SystemDigestStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV109 {
    get(): Promise<v109.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV109(): SystemEventCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV109 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV109(): SystemEventTopicsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV109 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'cfd1b728cc34809f9cf2c669d85165dbc2636a3d330caab46efadcb1a29e5f13'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV109(): SystemEventsStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '7a6b93af6441578697951373674a21dd28fdd96ee07394dda8b8e0682318fee0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV115(): SystemEventsStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '1526720cb5237ba5d91f1bedd7b57da5b255cc530c9787ca40cc04a14ece6606'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV125(): SystemEventsStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '588135975c28b0e4050fab5c64477c3989d9fdd35f417ed80e33616ce4d58c97'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV135(): SystemEventsStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV136(): boolean {
        return this.getTypeHash() === '268c90a88fac4ff1933d5f89c47b9df0ee146342c5dcd2b4602ed5c65ee9c568'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV136(): SystemEventsStorageV136 {
        assert(this.isV136)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV142(): boolean {
        return this.getTypeHash() === '6466462dd651bc1467df8c2c5620ee8cc7d3bbe99b90cd5d905b309ac6f3ddba'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV142(): SystemEventsStorageV142 {
        assert(this.isV142)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV147(): boolean {
        return this.getTypeHash() === '1564a1ddafa5615c8c919e0f5df04df6c8d0a4e1fe3829e2b0b3a16d164dcf0d'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV147(): SystemEventsStorageV147 {
        assert(this.isV147)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '68f0128a4c252a4c2d654db2c09d112a2b4b22e1f75ec8142b4740c67edf61e7'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV155(): SystemEventsStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV164(): boolean {
        return this.getTypeHash() === 'a0c32c467f30bbf2a06ed1d898f7e41853546e4b40f15e5bae3928c3b54b0ddd'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV164(): SystemEventsStorageV164 {
        assert(this.isV164)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV170(): boolean {
        return this.getTypeHash() === 'e1329630b1bae4e2895998abc776fe2567e7e992eb1333977d0f244a71ad0250'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV170(): SystemEventsStorageV170 {
        assert(this.isV170)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '3200e5dffba033e4bb0be29732076bae344becf99e928ce61c9ff789e26c5b27'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV172(): SystemEventsStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV174(): boolean {
        return this.getTypeHash() === 'f5dab01ee4a2c4151b9e5c21ef567689095cd9efd5df20f90611caba05385db5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV174(): SystemEventsStorageV174 {
        assert(this.isV174)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV178(): boolean {
        return this.getTypeHash() === '6fd9fb24f16cabfeb4b4cd540e75ae6d3a3d405732c79c71931e895e94ef45a9'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV178(): SystemEventsStorageV178 {
        assert(this.isV178)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV180(): boolean {
        return this.getTypeHash() === '3768bcdb0b91b960bf911ec19060b83dc0c087bfaf5232308a1e79b2ba0535ef'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV180(): SystemEventsStorageV180 {
        assert(this.isV180)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV183(): boolean {
        return this.getTypeHash() === 'ec27bc0d281ae7bfce8f07e8024019483f05f6ad8f52810ff2feb7a0ffe21ec5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV183(): SystemEventsStorageV183 {
        assert(this.isV183)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV109 {
    get(): Promise<v109.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV115 {
    get(): Promise<v115.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV125 {
    get(): Promise<v125.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV135 {
    get(): Promise<v135.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV136 {
    get(): Promise<v136.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV142 {
    get(): Promise<v142.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV147 {
    get(): Promise<v147.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV155 {
    get(): Promise<v155.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV164 {
    get(): Promise<v164.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV170 {
    get(): Promise<v170.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV172 {
    get(): Promise<v172.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV174 {
    get(): Promise<v174.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV178 {
    get(): Promise<v178.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV180 {
    get(): Promise<v180.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV183 {
    get(): Promise<v183.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV109(): SystemExecutionPhaseStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV109 {
    get(): Promise<(v109.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV109(): SystemExtrinsicCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV109 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV109(): SystemExtrinsicDataStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV109 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV109(): SystemLastRuntimeUpgradeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV109 {
    get(): Promise<(v109.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV109(): SystemNumberStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV109 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV109(): SystemParentHashStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV109 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV109(): SystemUpgradedToTripleRefCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV109 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV109(): SystemUpgradedToU32RefCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV109 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV109(): TechnicalCommitteeMembersStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV109(): TechnicalCommitteePrimeStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV109 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV109(): TechnicalCommitteeProposalCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV109 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'bfc06c27f0a67a5d0b88023ef9f2ea0709b0385bb6d97afce41e87711ba65719'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV109(): TechnicalCommitteeProposalOfStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '4e55a1d1db147e15ea55ddb7762805919d11dd4150336b397c8db82495cfc1c3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV115(): TechnicalCommitteeProposalOfStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV125(): boolean {
        return this.getTypeHash() === '91ea66f9536c1a58a46c0e174f160765775162108d884c478546e57103a55c58'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV125(): TechnicalCommitteeProposalOfStorageV125 {
        assert(this.isV125)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV135(): boolean {
        return this.getTypeHash() === '48a0b897e2d24ed190b3c1f6aea22f06c8d6163e75eca7357621e34b311f6762'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV135(): TechnicalCommitteeProposalOfStorageV135 {
        assert(this.isV135)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV136(): boolean {
        return this.getTypeHash() === 'a6d87090d71c3a87c6fb2103391d7b97ed14018bafaafc294480c52ce8a17732'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV136(): TechnicalCommitteeProposalOfStorageV136 {
        assert(this.isV136)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV142(): boolean {
        return this.getTypeHash() === '836679e810e596c84a725ed14f9f76f8a671f1a3bf061adc7a965c0d03e72410'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV142(): TechnicalCommitteeProposalOfStorageV142 {
        assert(this.isV142)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV147(): boolean {
        return this.getTypeHash() === 'e9a9c37441f2860c7c91dd0a3e76cef9ed6150cd65454a592b17f67fabe6c15b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV147(): TechnicalCommitteeProposalOfStorageV147 {
        assert(this.isV147)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '25a8b45253a6a9d28bfa249316134ef6aff747505c5360f5a2a2325ac27c3bd1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV155(): TechnicalCommitteeProposalOfStorageV155 {
        assert(this.isV155)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV158(): boolean {
        return this.getTypeHash() === 'd0417d928d536a95fc2dd07b8e0285a9e562fca7f45a5908d336cc553675ef23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV158(): TechnicalCommitteeProposalOfStorageV158 {
        assert(this.isV158)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV164(): boolean {
        return this.getTypeHash() === 'f259adcd3e996bee34f8c30ff07ec6726f1a0504be04bdbe83a9f7ed648dcc84'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV164(): TechnicalCommitteeProposalOfStorageV164 {
        assert(this.isV164)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV172(): boolean {
        return this.getTypeHash() === '03f7b715830a500af52d2765e99fd61b7a470ebfd505c8c1f249fdb5d018289a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV172(): TechnicalCommitteeProposalOfStorageV172 {
        assert(this.isV172)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV174(): boolean {
        return this.getTypeHash() === '9e14b3d6c300b4c3d0d7abd73c15764179b2e9cc01bc30a6d15723e50c8f0b66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV174(): TechnicalCommitteeProposalOfStorageV174 {
        assert(this.isV174)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV178(): boolean {
        return this.getTypeHash() === 'e39cc633e1d1feeb2a2726972ec27849cb3e02552b7609dbcc8141eebbae082d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV178(): TechnicalCommitteeProposalOfStorageV178 {
        assert(this.isV178)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV180(): boolean {
        return this.getTypeHash() === '3db30cb65c21288fc487ac2409e2342c06846038331e7aaa5182cefe5bffc195'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV180(): TechnicalCommitteeProposalOfStorageV180 {
        assert(this.isV180)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV109 {
    get(key: Uint8Array): Promise<(v109.Call | undefined)>
    getAll(): Promise<v109.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v109.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV115 {
    get(key: Uint8Array): Promise<(v115.Call | undefined)>
    getAll(): Promise<v115.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v115.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v115.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV125 {
    get(key: Uint8Array): Promise<(v125.Call | undefined)>
    getAll(): Promise<v125.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v125.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v125.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV135 {
    get(key: Uint8Array): Promise<(v135.Call | undefined)>
    getAll(): Promise<v135.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v135.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v135.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v135.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v135.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v135.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV136 {
    get(key: Uint8Array): Promise<(v136.Call | undefined)>
    getAll(): Promise<v136.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v136.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v136.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v136.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v136.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v136.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV142 {
    get(key: Uint8Array): Promise<(v142.Call | undefined)>
    getAll(): Promise<v142.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v142.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v142.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v142.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v142.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v142.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV147 {
    get(key: Uint8Array): Promise<(v147.Call | undefined)>
    getAll(): Promise<v147.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v147.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v147.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v147.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v147.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v147.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV155 {
    get(key: Uint8Array): Promise<(v155.Call | undefined)>
    getAll(): Promise<v155.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v155.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v155.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v155.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v155.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v155.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV158 {
    get(key: Uint8Array): Promise<(v158.Call | undefined)>
    getAll(): Promise<v158.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v158.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v158.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v158.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v158.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v158.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV164 {
    get(key: Uint8Array): Promise<(v164.Call | undefined)>
    getAll(): Promise<v164.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v164.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v164.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v164.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v164.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v164.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV172 {
    get(key: Uint8Array): Promise<(v172.Call | undefined)>
    getAll(): Promise<v172.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v172.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v172.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV174 {
    get(key: Uint8Array): Promise<(v174.Call | undefined)>
    getAll(): Promise<v174.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v174.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v174.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v174.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v174.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v174.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV178 {
    get(key: Uint8Array): Promise<(v178.Call | undefined)>
    getAll(): Promise<v178.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v178.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v178.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v178.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v178.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v178.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV180 {
    get(key: Uint8Array): Promise<(v180.Call | undefined)>
    getAll(): Promise<v180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v180.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV109(): TechnicalCommitteeProposalsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV109 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV109(): TechnicalCommitteeVotingStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV109 {
    get(key: Uint8Array): Promise<(v109.Votes | undefined)>
    getAll(): Promise<v109.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v109.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.Votes][]>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV109(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV109(): TimestampDidUpdateStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV109 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV109(): TimestampNowStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV109 {
    get(): Promise<bigint>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV109(): TipsReasonsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV109 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV109(): TipsTipsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV109 {
    get(key: Uint8Array): Promise<(v109.OpenTip | undefined)>
    getAll(): Promise<v109.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v109.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.OpenTip][]>
}

export class TokensAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f23ccc2edbd0e524d74d373fab61041d022935fc96a13cb996c4083b37cae759'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV109(): TokensAccountsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV109 {
    get(key1: Uint8Array, key2: number): Promise<v109.Type_368>
    getAll(): Promise<v109.Type_368[]>
    getMany(keys: [Uint8Array, number][]): Promise<v109.Type_368[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v109.Type_368][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v109.Type_368][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v109.Type_368][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_368][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_368][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_368][]>
}

export class TokensLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '94d13c37bf173a8e289a7abf6d778dc28e075e16963c06c041136f789ac66572'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV109(): TokensLocksStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV109 {
    get(key1: Uint8Array, key2: number): Promise<v109.Type_366[]>
    getAll(): Promise<v109.Type_366[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v109.Type_366[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v109.Type_366[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v109.Type_366[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v109.Type_366[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_366[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_366[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v109.Type_366[]][]>
}

export class TokensReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '94d13c37bf173a8e289a7abf6d778dc28e075e16963c06c041136f789ac66572'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV115(): TokensReservesStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface TokensReservesStorageV115 {
    get(key1: Uint8Array, key2: number): Promise<v115.ReserveData[]>
    getAll(): Promise<v115.ReserveData[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v115.ReserveData[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v115.ReserveData[]][]>
}

export class TokensTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total issuance of a token type.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV109(): TokensTotalIssuanceStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV109 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class TransactionPausePausedTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPause'
    }

    protected getName() {
        return 'PausedTransactions'
    }

    /**
     *  The paused transaction map
     * 
     *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'b84898f3d187596a7b6e3678769d37269c8b37c42ad19309d36b974ad9f3d352'
    }

    /**
     *  The paused transaction map
     * 
     *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
     */
    get asV115(): TransactionPausePausedTransactionsStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The paused transaction map
 * 
 *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
 */
export interface TransactionPausePausedTransactionsStorageV115 {
    get(key: [Uint8Array, Uint8Array]): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV109(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV109(): TransactionPaymentNextFeeMultiplierStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV109 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV109(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV109(): TransactionPaymentStorageVersionStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV109 {
    get(): Promise<v109.Type_291>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV109(): TreasuryApprovalsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV109 {
    get(): Promise<number[]>
}

export class TreasuryDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV155(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV155(): TreasuryDeactivatedStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryDeactivatedStorageV155 {
    get(): Promise<bigint>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV109(): TreasuryProposalCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV109 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV109(): TreasuryProposalsStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV109 {
    get(key: number): Promise<(v109.Proposal | undefined)>
    getAll(): Promise<v109.Proposal[]>
    getMany(keys: number[]): Promise<(v109.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v109.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v109.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v109.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v109.Proposal][]>
}

export class UniquesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The items held by any given account; set out this way so that items owned by a single
     *  account can be enumerated.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'dd717df0f824c1616e58c0f411648150ead9ba80eb70d3fa1d3ce17cf15cdb99'
    }

    /**
     *  The items held by any given account; set out this way so that items owned by a single
     *  account can be enumerated.
     */
    get asV115(): UniquesAccountStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The items held by any given account; set out this way so that items owned by a single
 *  account can be enumerated.
 */
export interface UniquesAccountStorageV115 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
}

export class UniquesAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Asset'
    }

    /**
     *  The items in existence and their ownership details.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '473a8db9ad3cadcd73a4d1d940a1b477f877f8a199d89bcf4b57a170d7e2e7fb'
    }

    /**
     *  The items in existence and their ownership details.
     */
    get asV115(): UniquesAssetStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The items in existence and their ownership details.
 */
export interface UniquesAssetStorageV115 {
    get(key1: bigint, key2: bigint): Promise<(v115.ItemDetails | undefined)>
    getAll(): Promise<v115.ItemDetails[]>
    getMany(keys: [bigint, bigint][]): Promise<(v115.ItemDetails | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v115.ItemDetails][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v115.ItemDetails][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v115.ItemDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v115.ItemDetails][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v115.ItemDetails][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v115.ItemDetails][]>
}

export class UniquesAttributeStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Attribute'
    }

    /**
     *  Attributes of a collection.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'a3a0ccec7ada073a05ca828d16c2decda5dc3aaf3545c5c22f508123c0751a45'
    }

    /**
     *  Attributes of a collection.
     */
    get asV115(): UniquesAttributeStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Attributes of a collection.
 */
export interface UniquesAttributeStorageV115 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<([Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<([Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
}

export class UniquesClassStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Class'
    }

    /**
     *  Details of a collection.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '73a840238efb8714da70fd9dd693522d9b2f2a675103b7104133e1e222977fbb'
    }

    /**
     *  Details of a collection.
     */
    get asV115(): UniquesClassStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Details of a collection.
 */
export interface UniquesClassStorageV115 {
    get(key: bigint): Promise<(v115.CollectionDetails | undefined)>
    getAll(): Promise<v115.CollectionDetails[]>
    getMany(keys: bigint[]): Promise<(v115.CollectionDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v115.CollectionDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v115.CollectionDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v115.CollectionDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v115.CollectionDetails][]>
}

export class UniquesClassAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ClassAccount'
    }

    /**
     *  The collections owned by any given account; set out this way so that collections owned by
     *  a single account can be enumerated.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'aa05d715557dda88cd21e53b8460b3ef83dc91868ade890f7afcc69de18cb707'
    }

    /**
     *  The collections owned by any given account; set out this way so that collections owned by
     *  a single account can be enumerated.
     */
    get asV115(): UniquesClassAccountStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The collections owned by any given account; set out this way so that collections owned by
 *  a single account can be enumerated.
 */
export interface UniquesClassAccountStorageV115 {
    get(key1: Uint8Array, key2: bigint): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, bigint][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
}

export class UniquesClassMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ClassMetadataOf'
    }

    /**
     *  Metadata of a collection.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '4ca83ab7415e7250d6c720a9930f95ae0d08c121898b5e01b38abf9add691411'
    }

    /**
     *  Metadata of a collection.
     */
    get asV115(): UniquesClassMetadataOfStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Metadata of a collection.
 */
export interface UniquesClassMetadataOfStorageV115 {
    get(key: bigint): Promise<(v115.CollectionMetadata | undefined)>
    getAll(): Promise<v115.CollectionMetadata[]>
    getMany(keys: bigint[]): Promise<(v115.CollectionMetadata | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v115.CollectionMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v115.CollectionMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v115.CollectionMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v115.CollectionMetadata][]>
}

export class UniquesCollectionMaxSupplyStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'CollectionMaxSupply'
    }

    /**
     *  Keeps track of the number of items a collection might have.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '9f62a6a8b43200f35fa1fc57463869be42d2dc9a1bddbdf57ca30f05c51d6786'
    }

    /**
     *  Keeps track of the number of items a collection might have.
     */
    get asV115(): UniquesCollectionMaxSupplyStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Keeps track of the number of items a collection might have.
 */
export interface UniquesCollectionMaxSupplyStorageV115 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class UniquesInstanceMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'InstanceMetadataOf'
    }

    /**
     *  Metadata of an item.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'b930ce9a1c8bff9d1191f22c2274c59d0c049903864e92d1c09b9b65303145cd'
    }

    /**
     *  Metadata of an item.
     */
    get asV115(): UniquesInstanceMetadataOfStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Metadata of an item.
 */
export interface UniquesInstanceMetadataOfStorageV115 {
    get(key1: bigint, key2: bigint): Promise<(v115.ItemMetadata | undefined)>
    getAll(): Promise<v115.ItemMetadata[]>
    getMany(keys: [bigint, bigint][]): Promise<(v115.ItemMetadata | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v115.ItemMetadata][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v115.ItemMetadata][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v115.ItemMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v115.ItemMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v115.ItemMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v115.ItemMetadata][]>
}

export class UniquesItemPriceOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ItemPriceOf'
    }

    /**
     *  Price of an asset instance.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'aeb23c868d0bbc880699b1dcae9f5c78b89d50c31eb7324014031d29d7806afa'
    }

    /**
     *  Price of an asset instance.
     */
    get asV115(): UniquesItemPriceOfStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Price of an asset instance.
 */
export interface UniquesItemPriceOfStorageV115 {
    get(key1: bigint, key2: bigint): Promise<([bigint, (Uint8Array | undefined)] | undefined)>
    getAll(): Promise<[bigint, (Uint8Array | undefined)][]>
    getMany(keys: [bigint, bigint][]): Promise<([bigint, (Uint8Array | undefined)] | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
}

export class UniquesOwnershipAcceptanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'OwnershipAcceptance'
    }

    /**
     *  The collection, if any, of which an account is willing to take ownership.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  The collection, if any, of which an account is willing to take ownership.
     */
    get asV115(): UniquesOwnershipAcceptanceStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  The collection, if any, of which an account is willing to take ownership.
 */
export interface UniquesOwnershipAcceptanceStorageV115 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class UnknownTokensAbstractFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'UnknownTokens'
    }

    protected getName() {
        return 'AbstractFungibleBalances'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f6cf7e5c9878cef27f99d1df60d9721e0034a66cd864d15d65a9196bb951c149'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV109(): UnknownTokensAbstractFungibleBalancesStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV155(): boolean {
        return this.getTypeHash() === '2cdb52f1cd1e3f70782b7078136a80df021294d9315c40925ce0c4da237d5d1e'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV155(): UnknownTokensAbstractFungibleBalancesStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV109 {
    get(key1: v109.V1MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v109.V1MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v109.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v109.V1MultiLocation): Promise<[v109.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v109.V1MultiLocation, key2: Uint8Array): Promise<[v109.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v109.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v109.V1MultiLocation): AsyncIterable<[v109.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v109.V1MultiLocation, key2: Uint8Array): AsyncIterable<[v109.V1MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v109.V1MultiLocation): Promise<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v109.V1MultiLocation, key2: Uint8Array): Promise<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v109.V1MultiLocation): AsyncIterable<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v109.V1MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v109.V1MultiLocation, Uint8Array], v: bigint][]>
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV155 {
    get(key1: v155.V3MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v155.V3MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v155.V3MultiLocation, Uint8Array][]>
    getKeys(key1: v155.V3MultiLocation): Promise<[v155.V3MultiLocation, Uint8Array][]>
    getKeys(key1: v155.V3MultiLocation, key2: Uint8Array): Promise<[v155.V3MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v155.V3MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v155.V3MultiLocation): AsyncIterable<[v155.V3MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v155.V3MultiLocation, key2: Uint8Array): AsyncIterable<[v155.V3MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v155.V3MultiLocation): Promise<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v155.V3MultiLocation, key2: Uint8Array): Promise<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v155.V3MultiLocation): AsyncIterable<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v155.V3MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v155.V3MultiLocation, Uint8Array], v: bigint][]>
}

export class UnknownTokensConcreteFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'UnknownTokens'
    }

    protected getName() {
        return 'ConcreteFungibleBalances'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'a1d05d2a23ba410062fdbbbbea5e8c90763e56102572e63e7d9a78dff938ef51'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV109(): UnknownTokensConcreteFungibleBalancesStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV155(): boolean {
        return this.getTypeHash() === '429007a90401f2fd71a7158df1e035eb488f5c7deeea55820b6a11ba2848b2bb'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV155(): UnknownTokensConcreteFungibleBalancesStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV109 {
    get(key1: v109.V1MultiLocation, key2: v109.V1MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v109.V1MultiLocation, v109.V1MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getKeys(key1: v109.V1MultiLocation): Promise<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getKeys(key1: v109.V1MultiLocation, key2: v109.V1MultiLocation): Promise<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v109.V1MultiLocation): AsyncIterable<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v109.V1MultiLocation, key2: v109.V1MultiLocation): AsyncIterable<[v109.V1MultiLocation, v109.V1MultiLocation][]>
    getPairs(): Promise<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
    getPairs(key1: v109.V1MultiLocation): Promise<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
    getPairs(key1: v109.V1MultiLocation, key2: v109.V1MultiLocation): Promise<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v109.V1MultiLocation): AsyncIterable<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v109.V1MultiLocation, key2: v109.V1MultiLocation): AsyncIterable<[k: [v109.V1MultiLocation, v109.V1MultiLocation], v: bigint][]>
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV155 {
    get(key1: v155.V3MultiLocation, key2: v155.V3MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v155.V3MultiLocation, v155.V3MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getKeys(key1: v155.V3MultiLocation): Promise<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getKeys(key1: v155.V3MultiLocation, key2: v155.V3MultiLocation): Promise<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v155.V3MultiLocation): AsyncIterable<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v155.V3MultiLocation, key2: v155.V3MultiLocation): AsyncIterable<[v155.V3MultiLocation, v155.V3MultiLocation][]>
    getPairs(): Promise<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
    getPairs(key1: v155.V3MultiLocation): Promise<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
    getPairs(key1: v155.V3MultiLocation, key2: v155.V3MultiLocation): Promise<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v155.V3MultiLocation): AsyncIterable<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v155.V3MultiLocation, key2: v155.V3MultiLocation): AsyncIterable<[k: [v155.V3MultiLocation, v155.V3MultiLocation], v: bigint][]>
}

export class VestingVestingSchedulesStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'VestingSchedules'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get asV109(): VestingVestingSchedulesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Vesting schedules of an account.
 * 
 *  VestingSchedules: map AccountId => Vec<VestingSchedule>
 */
export interface VestingVestingSchedulesStorageV109 {
    get(key: Uint8Array): Promise<v109.VestingSchedule[]>
    getAll(): Promise<v109.VestingSchedule[][]>
    getMany(keys: Uint8Array[]): Promise<v109.VestingSchedule[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v109.VestingSchedule[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v109.VestingSchedule[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v109.VestingSchedule[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v109.VestingSchedule[]][]>
}

export class XYKPoolAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'PoolAssets'
    }

    /**
     *  Asset pair in a pool.
     */
    get isV180(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Asset pair in a pool.
     */
    get asV180(): XYKPoolAssetsStorageV180 {
        assert(this.isV180)
        return this as any
    }
}

/**
 *  Asset pair in a pool.
 */
export interface XYKPoolAssetsStorageV180 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class XYKShareTokenStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'ShareToken'
    }

    /**
     *  Asset id storage for shared pool tokens
     */
    get isV180(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Asset id storage for shared pool tokens
     */
    get asV180(): XYKShareTokenStorageV180 {
        assert(this.isV180)
        return this as any
    }
}

/**
 *  Asset id storage for shared pool tokens
 */
export interface XYKShareTokenStorageV180 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XYKTotalLiquidityStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'TotalLiquidity'
    }

    /**
     *  Total liquidity in a pool.
     */
    get isV180(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Total liquidity in a pool.
     */
    get asV180(): XYKTotalLiquidityStorageV180 {
        assert(this.isV180)
        return this as any
    }
}

/**
 *  Total liquidity in a pool.
 */
export interface XYKTotalLiquidityStorageV180 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class XcmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV155(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV155(): XcmpQueueCounterForOverweightStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageV155 {
    get(): Promise<number>
}

export class XcmpQueueDeferredXcmMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'DeferredXcmMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId.
     */
    get isV170(): boolean {
        return this.getTypeHash() === '1c1d0a2b639239fd095d5b9fd1c4f4b8be9ef6b65e358b5933a2df09c20bcbf2'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId.
     */
    get asV170(): XcmpQueueDeferredXcmMessagesStorageV170 {
        assert(this.isV170)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId.
 */
export interface XcmpQueueDeferredXcmMessagesStorageV170 {
    get(key: number): Promise<v170.DeferredMessage[]>
    getAll(): Promise<v170.DeferredMessage[][]>
    getMany(keys: number[]): Promise<v170.DeferredMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v170.DeferredMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v170.DeferredMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v170.DeferredMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v170.DeferredMessage[]][]>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asV109(): XcmpQueueInboundXcmpMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageV109 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV109(): XcmpQueueInboundXcmpStatusStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV109 {
    get(): Promise<v109.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asV109(): XcmpQueueOutboundXcmpMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageV109 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV109(): XcmpQueueOutboundXcmpStatusStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV109 {
    get(): Promise<v109.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asV109(): XcmpQueueOverweightStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageV109 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isV109(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asV109(): XcmpQueueOverweightCountStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageV109 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV109(): XcmpQueueQueueConfigStorageV109 {
        assert(this.isV109)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV115(): boolean {
        return this.getTypeHash() === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV115(): XcmpQueueQueueConfigStorageV115 {
        assert(this.isV115)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV155(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV155(): XcmpQueueQueueConfigStorageV155 {
        assert(this.isV155)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV109 {
    get(): Promise<v109.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV115 {
    get(): Promise<v115.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV155 {
    get(): Promise<v155.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isV115(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asV115(): XcmpQueueQueueSuspendedStorageV115 {
        assert(this.isV115)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageV115 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isV109(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asV109(): XcmpQueueSignalMessagesStorageV109 {
        assert(this.isV109)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageV109 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
