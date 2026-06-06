/* IMPORT */ import { EntitySneakingChangedEventOptions, EntityStopSneakingAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when an entity stops
 * sneaking.
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity stops
     * sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity stops
     * sneaking.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}
