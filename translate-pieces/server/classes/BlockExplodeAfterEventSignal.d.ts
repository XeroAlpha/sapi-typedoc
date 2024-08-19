/* IMPORT */ import { BlockExplodeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}