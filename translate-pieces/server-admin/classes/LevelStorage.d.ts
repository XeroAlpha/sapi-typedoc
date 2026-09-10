/* IMPORT */ import { LevelStorageQuerySnapshotFile } from '..';

/**
 * Controls how the server saves to disk. Only available on
 * dedicated server.
 */
export class LevelStorage {
    private constructor();
    /**
     * @remarks
     * Disables the server writing to the world files and begins
     * creating a snapshot.
     *
     * @worldMutation
     *
     */
    saveHold(): Promise<void>;
    /**
     * @remarks
     * Returns the path and size of every file in the current
     * snapshot if a snapshot is being taken.
     *
     * @worldMutation
     *
     */
    saveQuery(): Promise<LevelStorageQuerySnapshotFile[]>;
    /**
     * @remarks
     * Re-enables server writing world state to files and removes
     * snapshot.
     *
     * @worldMutation
     *
     */
    saveResume(): Promise<void>;
}
