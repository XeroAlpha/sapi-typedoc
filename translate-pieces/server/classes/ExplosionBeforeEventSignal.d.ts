/* IMPORT */ import { ExplosionBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
}