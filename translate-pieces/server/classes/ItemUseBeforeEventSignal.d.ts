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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}