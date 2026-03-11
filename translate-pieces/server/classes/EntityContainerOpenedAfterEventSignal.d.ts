/* IMPORT */ import { EntityContainerAccessEventOptions, EntityContainerOpenedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity
 * container is opened.
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity
     * container is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}
