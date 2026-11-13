/* IMPORT */ import { VirtualContainerCloseAfterEvent, VirtualContainerEventOptions } from '..';

/**
 * Manages callbacks that are invoked when a player's virtual
 * container screen closes.
 */
export class VirtualContainerCloseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player's virtual
     * container screen closes.
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
        callback: (arg0: VirtualContainerCloseAfterEvent) => void,
        options?: VirtualContainerEventOptions,
    ): (arg0: VirtualContainerCloseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player's virtual
     * container screen closes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: VirtualContainerCloseAfterEvent) => void): void;
}
