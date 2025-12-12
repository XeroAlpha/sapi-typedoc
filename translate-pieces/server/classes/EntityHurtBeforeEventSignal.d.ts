/* IMPORT */ import { EntityHurtBeforeEvent, EntityHurtBeforeEventOptions } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity will
 * be hurt.
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity will be
     * hurt.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}
