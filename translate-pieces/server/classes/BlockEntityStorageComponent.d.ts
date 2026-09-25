/* IMPORT */ import { Block, BlockComponent, BlockEntityStorageInfo, Entity, InvalidBlockComponentError, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * Represents storage for entities associated with a block
 * entity. This component is available on blocks whose behavior
 * pack definition enables entity storage with the
 * `minecraft:block_entity` component. Stored entities are
 * serialized and removed from the world until they are
 * released or transferred. A block can store up to four
 * entities. Entity storage is scoped to the content pack
 * accessing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockEntityStorageComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:entity_storage';
    /**
     * @remarks
     * Returns information about the entities stored in this
     * block's entity storage. The returned entities are not
     * present in the world while they are stored. Only entities
     * stored by the current content pack are included.
     *
     * @returns
     * An array of {@link BlockEntityStorageInfo} values containing
     * the unique ID and definition ID of each stored entity.
     * Returns an empty array when no entities are stored by the
     * current content pack.
     * @throws
     * Throws if the block entity is invalid or the block's
     * location is not loaded or is outside the world boundaries.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getEntities(): BlockEntityStorageInfo[];
    /**
     * @remarks
     * Releases a stored entity from this block's entity storage
     * and spawns it back into the world, at the same location it
     * was when stored.
     *
     * @worldMutation
     *
     * @param entityId
     * The unique ID of the stored entity. Use the value returned
     * by {@link BlockEntityStorageComponent.store} or the
     * `uniqueId` property from {@link BlockEntityStorageInfo}.
     * @returns
     * The released {@link Entity}. The released entity receives a
     * new runtime ID.
     * @throws
     * Throws if the entity ID is invalid or does not identify an
     * entity stored by the current content pack, if the stored
     * entity cannot be loaded or spawned, or if the block entity
     * is invalid.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    release(entityId: string): Entity;
    /**
     * @remarks
     * Returns the number of entities stored in this block's entity
     * storage by the current content pack.
     *
     * @returns
     * The number of entities stored by the current content pack.
     * @throws
     * Throws if the block entity is invalid or the block's
     * location is not loaded or is outside the world boundaries.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    size(): number;
    /**
     * @remarks
     * Serializes and stores an entity in this block's entity
     * storage. The entity is removed from the world after it is
     * stored. Only non-player mob entities can be stored. Entities
     * with passengers or that are passengers cannot be stored.
     *
     * @worldMutation
     *
     * @param entity
     * The {@link Entity} to store.
     * @returns
     * The unique ID assigned to the stored entity. Keep this ID to
     * release, transfer, or inspect the stored entity later.
     * @throws
     * Throws if the storage is full, the entity is already stored,
     * the entity cannot be serialized, or the block entity is
     * invalid.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    store(entity: Entity): string;
    /**
     * @remarks
     * Moves a stored entity from this block's entity storage to
     * the target block's entity storage without releasing it into
     * the world.
     *
     * @worldMutation
     *
     * @param entityId
     * The unique ID of the stored entity. Use the value returned
     * by {@link BlockEntityStorageComponent.store} or the
     * `uniqueId` property from {@link BlockEntityStorageInfo}.
     * @param targetBlock
     * The target {@link Block} with an entity storage component.
     * The target block must be in the same dimension as this
     * block.
     * @throws
     * Throws if the entity ID is invalid or not stored by the
     * current content pack, if the target block is invalid, in
     * another dimension, lacks entity storage, or is full, or if
     * the source and target blocks are the same.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    transfer(entityId: string, targetBlock: Block): void;
}
