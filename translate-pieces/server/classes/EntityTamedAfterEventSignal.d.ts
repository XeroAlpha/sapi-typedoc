/* IMPORT */ import { EntityTamedAfterEvent, EntityTamedEventOptions } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity is
 * tamed.
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}
