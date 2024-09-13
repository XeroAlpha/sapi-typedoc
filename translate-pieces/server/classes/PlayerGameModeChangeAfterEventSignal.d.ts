/* IMPORT */ import { PlayerGameModeChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
}