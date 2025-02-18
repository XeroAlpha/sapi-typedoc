/* IMPORT */ import { ItemStopUseOnAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
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
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}