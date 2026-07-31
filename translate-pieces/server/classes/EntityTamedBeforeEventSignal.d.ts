/* IMPORT */ import { EntityTamedBeforeEvent, EntityTamedEventOptions } from '..';

/**
 * @rc
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
        options?: EntityTamedEventOptions,
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
