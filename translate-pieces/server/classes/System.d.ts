/* IMPORT */ import { SystemAfterEvents, SystemBeforeEvents } from '../index';

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
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @example trapTick.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   try {
     *     // Minecraft runs at 20 ticks per second.
     *     if (mc.system.currentTick % 1200 === 0) {
     *       mc.world.sendMessage("Another minute passes...");
     *     }
     *   } catch (e) {
     *     console.warn("Error: " + e);
     *   }
     *
     *   mc.system.run(trapTick);
     * ```
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @example every30Seconds.ts
     * ```typescript
     *   let intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     *   mc.system.runInterval(() => {
     *     mc.world.sendMessage("This is an interval run " + intervalRunIdentifier + " sending a message every 30 seconds.");
     *   }, 600);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
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
}