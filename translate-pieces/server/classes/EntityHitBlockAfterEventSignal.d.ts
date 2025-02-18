/* IMPORT */ import { EntityEventOptions, EntityHitBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an entity hits
 * a block.
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity hits a
     * block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}