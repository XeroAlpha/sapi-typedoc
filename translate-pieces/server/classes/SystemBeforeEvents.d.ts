/* IMPORT */ import { ShutdownBeforeEventSignal, StartupBeforeEventSignal, WatchdogTerminateBeforeEventSignal } from '..';

/**
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error.
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when the scripting watchdog shuts down the server. The
     * can be due to using too much memory, or by causing
     * significant slowdown or hang.
     * To prevent shutdown, set the event's cancel property to
     * true.
     *
     * @earlyExecution
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}
