/**
 * @beta
 * Allows registration for an event that fires when an entity
 * is being removed from  the game (for example, unloaded, or a
 * few seconds after they are dead.)
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is being removed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}