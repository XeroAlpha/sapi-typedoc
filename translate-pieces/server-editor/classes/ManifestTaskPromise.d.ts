/* IMPORT */ import { BlockUtilityManifest, TaskPromiseBase } from '..';

/**
 * Represents a cancellable Editor task that resolves with a
 * block utility manifest.
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ManifestTaskPromise extends TaskPromiseBase {
    private constructor();
    /**
     * @remarks
     * The promise that resolves with the task's block utility
     * manifest. If cancellation is accepted, the promise rejects
     * with a `TaskCancelledError`.
     *
     *
     */
    readonly promise: Promise<BlockUtilityManifest>;
}
