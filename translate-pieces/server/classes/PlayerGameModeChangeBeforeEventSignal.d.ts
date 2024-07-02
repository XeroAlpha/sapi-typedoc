/* IMPORT */ import { PlayerGameModeChangeBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
}