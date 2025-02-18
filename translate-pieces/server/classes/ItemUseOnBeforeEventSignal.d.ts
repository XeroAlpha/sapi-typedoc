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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): (arg0: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): void;
}