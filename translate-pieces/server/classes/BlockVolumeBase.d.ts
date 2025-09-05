/* IMPORT */ import { BlockBoundingBox, BlockLocationIterator, Vector3 } from '..';

/**
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * Return a {@link BlockBoundingBox} object which represents
     * the validated min and max coordinates of the volume
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     *
     */
    getCapacity(): number;
    /**
     * @remarks
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     *
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /**
     * @remarks
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     *
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    /**
     * @remarks
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * Check to see if a given world block location is inside a
     * BlockVolume
     *
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * Move a BlockVolume by a specified amount
     *
     * @param delta
     * Amount of blocks to move by
     */
    translate(delta: Vector3): void;
}
