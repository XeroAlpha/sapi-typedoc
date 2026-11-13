/* IMPORT */ import { VirtualContainerEventOptions, VirtualContainerItemChangeAfterEvent } from '..';

/**
 * Manages callbacks that are invoked when a player changes a
 * slot of a virtual container.
 */
export class VirtualContainerItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player changes a
     * slot of a virtual container.
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
        callback: (arg0: VirtualContainerItemChangeAfterEvent) => void,
        options?: VirtualContainerEventOptions,
    ): (arg0: VirtualContainerItemChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player changes a
     * slot of a virtual container.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: VirtualContainerItemChangeAfterEvent) => void): void;
}
