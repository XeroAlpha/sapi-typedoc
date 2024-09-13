/* IMPORT */ import { PlayerEmoteAfterEvent } from '../index';

/**
 * @rc
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: PlayerEmoteAfterEvent) => void): (arg: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PlayerEmoteAfterEvent) => void): void;
}