/**
 * Contains information about a file that was gathered during a
 * snapshot.
 */
export class LevelStorageQuerySnapshotFile {
    private constructor();
    /**
     * @remarks
     * The path to the file in the snapshot.
     *
     */
    readonly fileName: string;
    /**
     * @remarks
     * The size of the file in the snapshot.
     *
     */
    readonly fileSize: number;
}
