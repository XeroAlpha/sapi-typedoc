/**
 * Provides shared cancellation controls for an asynchronous
 * Editor task. Calling `cancel` requests cancellation; when
 * cancellation is accepted, `cancelled` becomes true and the
 * task promise rejects with a `TaskCancelledError` when the
 * coroutine scheduler next processes the task. Cancellation
 * does not undo changes that the task already applied.
 *
 */
export class TaskPromiseBase {
    private constructor();
    /**
     * @remarks
     * Whether cancellation was accepted for the task.
     *
     *
     */
    readonly cancelled: boolean;
    /**
     * @remarks
     * The current normalized task progress from 0 to 1. Task
     * groups report the average progress of their constituent
     * tasks. Successful tasks report 1 after settlement; failed or
     * cancelled tasks retain their last observed progress.
     *
     *
     */
    readonly progress: number;
    /**
     * @remarks
     * Requests cancellation of the task. Calling this method more
     * than once, or after the task has settled, has no effect.
     *
     *
     * @worldMutation
     *
     */
    cancel(): void;
}
