/* IMPORT */ import { LevelStorageQuerySnapshotFile, LevelStorageSaveStateChangeError } from '..';

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
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveHold(): void;
    /**
     * @remarks
     * Returns the path and size of every file in the current
     * snapshot if a snapshot is being taken.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveQuery(): LevelStorageQuerySnapshotFile[];
    /**
     * @remarks
     * Re-enables server writing world state to files and removes
     * snapshot.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveResume(): void;
}
