/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockBeforeEvent } from '../index';

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
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}