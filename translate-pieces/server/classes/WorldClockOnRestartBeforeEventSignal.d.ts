/* IMPORT */ import { WorldClock, WorldClockEventOptions, WorldClockOnRestartBeforeEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to a {@link WorldClock}
 * restarting.
 */
export class WorldClockOnRestartBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * restarting.
     *
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
        callback: (arg0: WorldClockOnRestartBeforeEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnRestartBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * restarting.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: WorldClockOnRestartBeforeEvent) => void): void;
}
