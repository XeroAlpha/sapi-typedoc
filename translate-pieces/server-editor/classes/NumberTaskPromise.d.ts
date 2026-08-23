/* IMPORT */ import { TaskPromiseBase } from '..';

/**
 * Represents a cancellable Editor task that resolves with a
 * numeric result.
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NumberTaskPromise extends TaskPromiseBase {
    private constructor();
    /**
     * @remarks
     * The promise that resolves with the task's numeric result. If
     * cancellation is accepted, the promise rejects with a
     * `TaskCancelledError`.
     *
     *
     */
    readonly promise: Promise<number>;
}
