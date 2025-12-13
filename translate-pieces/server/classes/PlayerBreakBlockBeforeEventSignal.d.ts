/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
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
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}
