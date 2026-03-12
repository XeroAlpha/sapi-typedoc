/* IMPORT */ import { EntityContainerAccessEventOptions, EntityContainerClosedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity
 * container is closed.
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity
     * container is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}
