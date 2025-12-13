/* IMPORT */ import { EntityRemoveBeforeEvent } from '..';

/**
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
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function to call.
     * This closure is called with restricted-execution privilege.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is being removed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}
