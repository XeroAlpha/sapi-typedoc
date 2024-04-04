/* IMPORT */ import { ItemCompleteUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}