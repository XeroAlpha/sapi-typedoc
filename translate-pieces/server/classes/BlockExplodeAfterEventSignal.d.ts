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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}