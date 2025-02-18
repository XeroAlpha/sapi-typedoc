/**
 * Executes a set of steps defined via chained .thenXyz
 * methods, sequentially. This facilitates a 'script' of
 * GameTest setup methods and assertions over time.
 */
export class GameTestSequence {
    private constructor();
    /**
     * @remarks
     * Runs the given callback as a step within a GameTest
     * sequence. Exceptions thrown within the callback will end
     * sequence execution.
     *
     * @worldMutation
     *
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecute(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay, runs the given callback as a step within a
     * GameTest sequence. Exceptions thrown within the callback
     * will end sequence execution.
     *
     * @worldMutation
     *
     * @param delayTicks
     * Number of ticks to wait before executing the callback.
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Runs the given callback every tick for the given number of
     * ticks.
     *
     * @worldMutation
     *
     * @param callback
     * Callback function to execute.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Causes the test to fail if this step in the GameTest
     * sequence is reached.
     *
     * @worldMutation
     *
     * @param errorMessage
     * Error message summarizing the failure condition.
     */
    thenFail(errorMessage: string): void;
    /**
     * @remarks
     * Idles the GameTest sequence for the specified delayTicks.
     *
     * @worldMutation
     *
     * @param delayTicks
     * Number of ticks to delay for this step in the GameTest
     * sequence.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
     * @remarks
     * Marks the GameTest a success if this step is reached in the
     * GameTest sequence.
     *
     * @worldMutation
     *
     */
    thenSucceed(): void;
    /**
     * @remarks
     * Executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence
     * execution.
     *
     * @worldMutation
     *
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWait(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay from the previous step, executes the given
     * callback every tick until it succeeds. Exceptions thrown
     * within the callback will end sequence execution.
     *
     * @worldMutation
     *
     * @param delayTicks
     * Tick (after the previous step in the GameTest sequence) to
     * run the callback at.
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}