/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnTimeModifiedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to changes to the time
 * of a {@link WorldClock}.
 */
export class WorldClockOnTimeModifiedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock's
     * time is modified.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnTimeModifiedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock's
     * time is modified.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void): void;
}
