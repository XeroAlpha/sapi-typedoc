/* IMPORT */ import { Entity, EntityInitializationCause } from '..';

/**
 * Contains data related to an entity spawning within the
 * world.
 * @seeExample logEntitySpawnEvent.ts daa66279
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * Initialization cause (Spawned, Born ...).
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * Entity that was spawned.
     *
     * @worldMutation
     *
     */
    entity: Entity;
}
