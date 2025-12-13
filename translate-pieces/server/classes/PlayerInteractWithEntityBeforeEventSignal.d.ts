/* IMPORT */ import { PlayerInteractWithEntityBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}
