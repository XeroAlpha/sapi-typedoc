/* IMPORT */ import { ExplosionAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}