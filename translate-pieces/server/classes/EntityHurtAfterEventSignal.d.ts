/* IMPORT */ import { EntityEventOptions, EntityHurtAfterEvent } from '../index';

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
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}