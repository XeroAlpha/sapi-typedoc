/* IMPORT */ import { EntityEventOptions, EntityHitEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}