/* IMPORT */ import { PlayerInputModeChangeAfterEvent } from '../index';

/**
 * @beta
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
    subscribe(callback: (arg: PlayerInputModeChangeAfterEvent) => void): (arg: PlayerInputModeChangeAfterEvent) => void;
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
    unsubscribe(callback: (arg: PlayerInputModeChangeAfterEvent) => void): void;
}