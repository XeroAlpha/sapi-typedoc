/* IMPORT */ import { EntityHealBeforeEvent, EntityHealEventOptions } from '..';

/**
 * @beta
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
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}
