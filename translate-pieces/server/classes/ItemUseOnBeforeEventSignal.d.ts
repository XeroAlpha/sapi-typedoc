/* IMPORT */ import { ItemUseOnBeforeEvent } from '../index';

/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}