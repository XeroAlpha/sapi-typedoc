/* IMPORT */ import { Block, BoundingBox, EntitySpawnCategory, Vector3 } from '../index';

/**
 * @beta
 * A container for information relating to an entity spawn
 * event.
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class EntitySpawnType {
    private constructor();
    /**
     * @remarks
     * The entity Id.
     *
     */
    readonly entityId: string;
    /**
     * @remarks
     * The height of the entity to spawn.
     *
     */
    readonly height: number;
    /**
     * @remarks
     * Is the entity immune to fire.
     *
     */
    readonly isImmuneFire: boolean;
    /**
     * @remarks
     * Is the entity summonable.
     *
     */
    readonly isSummonable: boolean;
    /**
     * @remarks
     * The category determining the type of spawn.
     *
     */
    readonly spawnCategory: EntitySpawnCategory;
    /**
     * @remarks
     * The width of the entity to spawn.
     *
     */
    readonly width: number;
    /**
     * @remarks
     * Helper to get the AABB for the entity at a given location
     *
     */
    getSpawnAABB(position: Vector3): BoundingBox;
    /**
     * @remarks
     * Is the block being spawned on dangerous.
     *
     */
    isBlockDangerous(block: Block): boolean;
}