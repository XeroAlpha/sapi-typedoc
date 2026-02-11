/* IMPORT */ import { EntityHealBeforeEvent, EntityHealEventOptions } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity will
 * be healed.
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity will be
     * healed.
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
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity will be
     * healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}
