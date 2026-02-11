/* IMPORT */ import { EntityItemPickupAfterEvent, EntityItemPickupEventOptions } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity has
 * picked up items.
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity has
     * picked up items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}
