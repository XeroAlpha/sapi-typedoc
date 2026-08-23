/* IMPORT */ import { RelativeVolumeListBlockVolume, TaskPromiseBase } from '..';

/**
 * Represents a cancellable Editor task that resolves with a
 * relative-volume result.
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class VolumeTaskPromise extends TaskPromiseBase {
    private constructor();
    /**
     * @remarks
     * The promise that resolves with the task's relative-volume
     * result. If cancellation is accepted, the promise rejects
     * with a `TaskCancelledError`.
     *
     *
     */
    readonly promise: Promise<RelativeVolumeListBlockVolume>;
}
