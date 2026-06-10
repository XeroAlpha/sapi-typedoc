/* IMPORT */ import { EntityTamedBeforeEvent, EntityTamedEventFilter } from '..';

/**
 * @beta
 * Manages callbacks that are connected to before an entity is
 * tamed.
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
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
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}
