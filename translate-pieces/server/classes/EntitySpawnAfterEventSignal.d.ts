/* IMPORT */ import { EntitySpawnAfterEvent } from '../index';

/**
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 * @example logEntitySpawnEvents.ts
 * ```typescript
 * // Register a new function that is called when a new entity is created.
 * import { world, EntitySpawnAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
 *     const spawnLocation = entityEvent.entity.location;
 *     world.sendMessage(
 *         `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
 *     );
 * });
 * ```
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function that handles the spawn event.
     */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}