/* IMPORT */ import { PlayerInteractWithBlockBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
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
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}
