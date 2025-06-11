/* IMPORT */ import { HotbarEventOptions, PlayerHotbarSelectedSlotChangeAfterEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are connected after a player selected
 * hotbar slot is changed.
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player selected
     * hotbar slot is changed.
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
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player selected
     * hotbar slot is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}