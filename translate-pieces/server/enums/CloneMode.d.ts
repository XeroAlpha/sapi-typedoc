/**
 * @beta
 * An enumeration for the clone modes used when cloning blocks.
 */
export enum CloneMode {
    /**
     * @remarks
     * Clones the blocks from the source region to the destination,
     * leaving the source intact.
     *
     */
    Copy = 0,
    /**
     * @remarks
     * Clones the blocks from the source region to the destination,
     * allowing the source and destination regions to overlap.
     *
     */
    ForceCopy = 1,
    /**
     * @remarks
     * Clones the blocks from the source region to the destination
     * and replaces the source region with air.
     *
     */
    Move = 2,
}
