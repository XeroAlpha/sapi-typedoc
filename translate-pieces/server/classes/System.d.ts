/* IMPORT */ import { NamespaceNameError, SystemAfterEvents, SystemBeforeEvents, SystemInfo, minecraftcommon } from '../index';

/**
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @remarks
     * Returns a collection of after-events for system-level
     * operations.
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @beta
     * @remarks
     * Returns a collection of before-events for system-level
     * operations.
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * Contains the device information for the server.
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * Cancels the execution of a job queued via {@link
     * System.runJob}.
     *
     * This function can be called in early-execution mode.
     *
     * @param jobId
     * The job ID returned from {@link System.runJob}.
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via {@link System.run}.
     *
     * This function can be called in early-execution mode.
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at the next available future time.
     * This is frequently used to implement delayed behaviors and
     * game loops. When run within the context of an event handler,
     * this will generally run the code at the end of the same tick
     * where the event occurred. When run in other code (a
     * system.run callout), this will run the function in the next
     * tick. Note, however, that depending on load on the system,
     * running in the same or next tick is not guaranteed.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function callback to run at the next game tick.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @seeExample trapTick.ts
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @seeExample every30Seconds.ts
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * Queues a generator to run until completion.  The generator
     * will be given a time slice each tick, and will be run until
     * it yields or completes.
     *
     * This function can be called in early-execution mode.
     *
     * @param generator
     * The instance of the generator to run.
     * @returns
     * An opaque handle that can be used with {@link
     * System.clearJob} to stop the run of this generator.
     * @seeExample cubeGenerator.ts
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @beta
     * @remarks
     * Causes an event to fire within script with the specified
     * message ID and payload.
     *
     * This function can't be called in read-only mode.
     *
     * @param id
     * Identifier of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world.
     * @param message
     * Data component of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world. Message may not exceed 2048
     * characters in length.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    scriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks returns a promise that resolves after the
     * requested number of ticks.
     *
     * This function can be called in early-execution mode.
     *
     * @param ticks
     * The amount of ticks to wait. Minimum value is 1.
     * @returns
     * A promise that is resolved when the specified amount of
     * ticks have occurred.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}