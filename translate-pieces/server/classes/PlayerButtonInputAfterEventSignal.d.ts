/* IMPORT */ import { InputEventOptions, PlayerButtonInputAfterEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to player inputs.
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after the player
     * performs an input.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after the player
     * performs an input.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PlayerButtonInputAfterEvent) => void): void;
}