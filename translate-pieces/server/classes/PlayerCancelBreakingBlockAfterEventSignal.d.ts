/* IMPORT */ import { PlayerBreakingBlockEventOptions, PlayerCancelBreakingBlockAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when a player
 * cancels breaking a block.
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player cancels
     * breaking a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}
