/**
 * @beta
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
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
     * @param callback
     * Function that handles the spawn event.
     * @example runEntitySpawnEvent.ts
     * ```typescript
     *   // register a new function that is called when a new entity is created.
     *   mc.world.afterEvents.entitySpawn.subscribe((entityEvent: mc.EntitySpawnAfterEvent) => {
     *     if (entityEvent && entityEvent.entity) {
     *       log(`New entity of type '${entityEvent.entity.typeId}' created!`, 1);
     *     } else {
     *       log(`The entity event didn't work as expected.`, -1);
     *     }
     *   });
     *
     *   mc.system.runTimeout(() => {
     *     createOldHorse(log, targetLocation);
     *   }, 20);
     * ```
     */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}