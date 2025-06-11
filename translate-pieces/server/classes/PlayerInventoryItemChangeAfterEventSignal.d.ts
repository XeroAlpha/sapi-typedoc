/* IMPORT */ import { InventoryItemEventOptions, PlayerInventoryItemChangeAfterEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are connected after a player's
 * inventory item is changed.
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function callback that is called when this event fires.
     * @param options
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player's
     * inventory item is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}