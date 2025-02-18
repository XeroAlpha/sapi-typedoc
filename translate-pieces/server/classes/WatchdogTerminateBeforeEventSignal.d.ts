/* IMPORT */ import { WatchdogTerminateBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}