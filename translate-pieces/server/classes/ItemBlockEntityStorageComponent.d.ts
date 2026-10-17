/* IMPORT */ import { Block, BlockEntityStorageInfo, DimensionLocation, Entity, InvalidItemStackError, ItemComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * Stores serialized non-player mobs on an item stack. Each
 * calling behavior pack can only access its manifest UUID
 * bucket. All buckets share a four-entity limit. Available on
 * item stacks even when empty. Destroying the item discards
 * its storage without spawning entities. Data is compatible
 * with entity-storage block carry-over and placement.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockEntityStorageComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_entity_storage';
    /**
     * @remarks
     * Inspects the serialized entities in the calling pack's
     * manifest UUID bucket without loading or spawning them.
     *
     * @returns
     * Stored entity IDs and definition IDs, or an empty array for
     * an empty bucket.
     * @throws
     * Throws if the item is invalid or its entity-storage format
     * is unsupported.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    getEntities(): BlockEntityStorageInfo[];
    /**
     * @remarks
     * Releases a stored mob at the supplied dimension and world
     * position. Does not require a block target. The serialized
     * position is replaced before the actor is loaded. Removes the
     * entry from this item after spawning it.
     *
     * @worldMutation
     *
     * @param entityId
     * A stored entity ID in the calling pack's bucket.
     * @param location
     * The target DimensionLocation. Must be finite, within world
     * bounds, and in a loaded, ticking chunk.
     * @returns
     * The spawned entity.
     * @throws
     * Throws for an invalid item, ID, dimension, or location, a
     * missing entity, or a load or spawn failure. Failed releases
     * preserve serialized storage.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    release(entityId: string, location: DimensionLocation): Entity;
    /**
     * @remarks
     * Returns the number of serialized entities in the calling
     * pack's manifest UUID bucket.
     *
     * @returns
     * The number of entities in this pack's bucket, or zero if
     * empty.
     * @throws
     * Throws if the item is invalid or its entity-storage format
     * is unsupported.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    size(): number;
    /**
     * @remarks
     * Serializes and despawns a non-player mob into the calling
     * pack's item storage. Mounted entities and entities with
     * passengers cannot be stored.
     *
     * @worldMutation
     *
     * @param entity
     * The live mob to store.
     * @returns
     * The stored entity ID, used for inspection, release, or
     * transfer.
     * @throws
     * Throws if the item or entity is invalid, storage is full,
     * the entity is already stored, serialization fails, or the
     * entity is not allowed. Rejected entities remain in the
     * world.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    store(entity: Entity): string;
    /**
     * @remarks
     * Moves serialized ownership from the calling pack's item
     * bucket into the same bucket of a block's entity-storage
     * without loading or spawning the entity. The target can be in
     * any dimension and must have entity storage.
     *
     * @worldMutation
     *
     * @param entityId
     * A stored entity ID in the calling pack's bucket.
     * @param targetBlock
     * A loaded block with an entity-storage component and
     * available capacity.
     * @throws
     * Throws for an invalid item, ID, or target, a missing entity,
     * full target storage, or an ID already stored at the target.
     * Failure preserves both owners.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    transfer(entityId: string, targetBlock: Block): void;
}
