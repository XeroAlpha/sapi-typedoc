/* IMPORT */ import { EntityHurtAfterEvent, EntityHurtAfterEventOptions } from '..';

/**
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}
