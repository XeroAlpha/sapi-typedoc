/* IMPORT */ import { PlayerInputModeChangeAfterEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are connected to player input mode.
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after the player input
     * mode changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after the player input
     * mode changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}