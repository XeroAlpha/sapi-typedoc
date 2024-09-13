/* IMPORT */ import { PlayerDimensionChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}