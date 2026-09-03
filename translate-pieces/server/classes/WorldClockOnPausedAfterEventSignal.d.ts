/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnPausedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to a {@link WorldClock}
 * being paused.
 */
export class WorldClockOnPausedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * paused.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnPausedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnPausedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * paused.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnPausedAfterEvent) => void): void;
}
