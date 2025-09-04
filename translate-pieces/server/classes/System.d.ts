/* IMPORT */ import { EngineError, InvalidArgumentError, NamespaceNameError, SystemAfterEvents, SystemBeforeEvents, SystemInfo } from '../index';

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
     * @earlyExecution
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * Returns a collection of before-events for system-level
     * operations.
     *
     * @earlyExecution
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * Represents the current world tick of the server.
     *
     * @earlyExecution
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * Returns true if this is a world where the editor is
     * currently loaded, returns false otherwise.
     *
     * @earlyExecution
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * Contains the device information for the server.
     *
     * @earlyExecution
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * Cancels the execution of a job queued via {@link
     * System.runJob}.
     *
     * @earlyExecution
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
     * @earlyExecution
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
     * @earlyExecution
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
     * @earlyExecution
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
     * @earlyExecution
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
     * @earlyExecution
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
     * @remarks
     * Causes an event to fire within script with the specified
     * message ID and payload.
     *
     * @param id
     * Identifier of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world.
     * @param message
     * Data component of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks returns a promise that resolves after the
     * requested number of ticks.
     *
     * @earlyExecution
     *
     * @param ticks
     * The amount of ticks to wait. Minimum value is 1.
     * @returns
     * A promise that is resolved when the specified amount of
     * ticks have occurred.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}