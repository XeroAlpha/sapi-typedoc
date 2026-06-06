/* IMPORT */ import { EntityTamedAfterEvent, EntityTamedEventFilter } from '..';

/**
 * @beta
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
        options?: EntityTamedEventFilter,
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
