/* IMPORT */ import { ItemUseBeforeEvent } from '../index';

/**
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}