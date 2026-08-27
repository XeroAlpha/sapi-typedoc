/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnResumedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to a {@link WorldClock}
 * being resumed.
 */
export class WorldClockOnResumedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * resumed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnResumedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnResumedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * resumed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnResumedAfterEvent) => void): void;
}
