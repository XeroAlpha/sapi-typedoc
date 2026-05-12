/* IMPORT */ import { EntitySneakingChangedEventOptions, EntityStartSneakingAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity
 * begins sneaking.
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity begins
     * sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity begins
     * sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}
