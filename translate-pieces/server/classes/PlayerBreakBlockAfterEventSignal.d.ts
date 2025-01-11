/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}