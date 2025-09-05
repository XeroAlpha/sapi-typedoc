/* IMPORT */ import { EntityEventOptions, EntityRemoveAfterEvent } from '..';

/**
 * Allows registration for an event that fires when an entity
 * is removed from  the game (for example, unloaded, or a few
 * seconds after they are dead.)
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is removed from
     * the game.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function to call.
     * @param options
     * Additional filtering options for this event.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}
