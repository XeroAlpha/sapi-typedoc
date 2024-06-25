/* IMPORT */ import { PlayerGameModeChangeBeforeEvent } from '../index';

export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
}