/* IMPORT */ import { EntityEventOptions, EntityHealthChangedAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the health of an
     * entity changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when the health of an
     * entity changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}
