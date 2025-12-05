/* IMPORT */ import { EntityHealAfterEvent, EntityHealEventOptions } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity is
 * healed.
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is
     * healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is
     * healed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}
