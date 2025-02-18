/* IMPORT */ import { Entity, EntityInitializationCause } from '../index';

/**
 * Contains data related to an entity spawning within the
 * world.
 * @seeExample logEntitySpawnEvent.ts
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