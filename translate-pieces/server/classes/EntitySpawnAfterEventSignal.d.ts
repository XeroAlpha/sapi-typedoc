/* IMPORT */ import { EntitySpawnAfterEvent } from '..';

/**
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
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function that handles the spawn event.
     * @seeExample logEntitySpawnEvent.ts
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}
