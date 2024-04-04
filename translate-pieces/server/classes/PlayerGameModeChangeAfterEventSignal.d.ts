/* IMPORT */ import { PlayerGameModeChangeAfterEvent } from '../index';

/**
 * @beta
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
}