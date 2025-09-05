/* IMPORT */ import { PlayerInteractWithBlockAfterEvent } from '..';

/**
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}
