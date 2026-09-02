/* IMPORT */ import { TaskPromiseBase } from '..';

/**
 * Represents a cancellable Editor task that does not produce a
 * result value.
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class VoidTaskPromise extends TaskPromiseBase {
    private constructor();
    /**
     * @remarks
     * The promise that resolves when the task completes. If
     * cancellation is accepted, the promise rejects with a
     * `TaskCancelledError`.
     *
     *
     */
    readonly promise: Promise<void>;
}
