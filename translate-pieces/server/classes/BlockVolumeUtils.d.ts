/* IMPORT */ import { BlockLocationIterator, BlockVolume, BlockVolumeIntersection, BoundingBox, Vector3 } from '../index';

/**
 * @beta
 * Block Volume Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * @minecraft-server.BlockVolume} objects
 */
export class BlockVolumeUtils {
    private constructor();
    /**
     * @remarks
     * Check to see if the given location is directly adjacent to
     * the outer surface of a BlockVolume.
     *
     *
     * This function can't be called in read-only mode.
     *
     * @param volume
     * The volume to test against
     * @param pos
     * The world block location to test
     * @returns
     * If the location is either inside or more than 0 blocks away,
     * the function will return false.
     * If the location is directly contacting the outer surface of
     * the BlockVolume, the function will return true.
     */
    static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a two block volumes are directly adjacent
     * and two faces touch.
     *
     * This function can't be called in read-only mode.
     *
     * @param volume
     * The volume to test against
     * @param other
     * The volume to test
     * @returns
     * If the outer faces of both block volumes touch and are
     * directly adjacent at any point, return true.
     */
    static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * @remarks
     * Test the equality of two block volumes
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return true if two block volumes are identical
     */
    static equals(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * @remarks
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     *
     * This function can't be called in read-only mode.
     *
     */
    static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator;
    /**
     * @remarks
     * Return a {@link BoundingBox} object which represents the
     * validated min and max coordinates of the volume
     *
     * This function can't be called in read-only mode.
     *
     */
    static getBoundingBox(volume: BlockVolume): BoundingBox;
    /**
     * @remarks
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getCapacity(volume: BlockVolume): number;
    /**
     * @remarks
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getMax(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getMin(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     *
     * This function can't be called in read-only mode.
     *
     */
    static getSpan(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Return an enumeration which represents the intersection
     * between two BlockVolume objects
     *
     * This function can't be called in read-only mode.
     *
     */
    static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection;
    /**
     * @remarks
     * Check to see if a given world block location is inside a
     * BlockVolume
     *
     * This function can't be called in read-only mode.
     *
     */
    static isInside(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * @remarks
     * Move a BlockVolume by a specified amount
     *
     * This function can't be called in read-only mode.
     *
     * @param delta
     * Amount of blocks to move by
     * @returns
     * Returns a new BlockVolume object which represents the new
     * volume
     */
    static translate(volume: BlockVolume, delta: Vector3): BlockVolume;
}