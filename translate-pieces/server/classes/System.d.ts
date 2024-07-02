/* IMPORT */ import { SystemAfterEvents, SystemBeforeEvents, minecraftcommon } from '../index';

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
     * @rc
     * @remarks
     * Cancels the execution of a job queued via {@link
     * System.runJob}.
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
     * @param callback
     * Function callback to run at the next game tick.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @example trapTick.ts
     * ```typescript
     * import { system, world } from '@minecraft/server';
     *
     * function printEveryMinute() {
     *     try {
     *         // Minecraft runs at 20 ticks per second.
     *         if (system.currentTick % 1200 === 0) {
     *             world.sendMessage('Another minute passes...');
     *         }
     *     } catch (e) {
     *         console.warn('Error: ' + e);
     *     }
     *
     *     system.run(printEveryMinute);
     * }
     *
     * printEveryMinute();
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
     * import { system, world } from '@minecraft/server';
     *
     * const intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     * system.runInterval(() => {
     *     world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
     * }, 600);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @rc
     * @remarks
     * Queues a generator to run until completion.  The generator
     * will be given a time slice each tick, and will be run until
     * it yields or completes.
     *
     * @param generator
     * The instance of the generator to run.
     * @returns
     * An opaque handle that can be used with {@link
     * System.clearJob} to stop the run of this generator.
     * @example cubeGenerator.ts
     * ```typescript
     * import { BlockPermutation, DimensionLocation, world, ButtonPushAfterEvent, system } from '@minecraft/server';
     *
     * // A simple generator that places blocks in a cube at a specific location
     * // with a specific size, yielding after every block place.
     * function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
     *     for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
     *         for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
     *             for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
     *                 const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
     *                 if (block) {
     *                     block.setPermutation(blockPerm);
     *                 }
     *                 yield;
     *             }
     *         }
     *     }
     * }
     *
     * // When a button is pushed, we will place a 15x15x15 cube of cobblestone 10 blocks above it
     * world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
     *     const cubePos = buttonPushEvent.block.location;
     *     cubePos.y += 10;
     *
     *     const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');
     *
     *     system.runJob(blockPlacingGenerator(blockPerm, { dimension: buttonPushEvent.dimension, ...cubePos }, 15));
     * });
     * ```
     */
    runJob(generator: Generator<void, void, void>): number;
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
    /**
     * @rc
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}