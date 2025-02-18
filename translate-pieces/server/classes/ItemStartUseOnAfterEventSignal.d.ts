/* IMPORT */ import { ItemStartUseOnAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}