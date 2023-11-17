/* IMPORT */ import { BoundingBox, Vector3 } from '../index';

/**
 * @beta
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * @minecraft-server.BoundingBox} objects
 */
export class BoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * Create a validated instance of a {@link
     * @minecraft-server.BoundingBox} where the min and max
     * components are guaranteed to be (min <= max)
     *
     * This function can't be called in read-only mode.
     *
     * @param min
     * A corner world location
     * @param max
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /**
     * @remarks
     * Expand a {@link @minecraft-server.BoundingBox} by a given
     * amount along each axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return a new {@link @minecraft-server.BoundingBox} object
     * representing the changes
     */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /**
     * @remarks
     * Check if two {@link @minecraft-server.BoundingBox} objects
     * are identical
     *
     * This function can't be called in read-only mode.
     *
     */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link
     * @minecraft-server.BoundingBox} object will be a BoundingBox
     * which exactly encompasses the two boxes.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A new {@link @minecraft-server.BoundingBox} instance
     * representing the smallest possible bounding box which can
     * encompass both
     */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /**
     * @remarks
     * Calculate the center block of a given {@link
     * @minecraft-server.BoundingBox} object.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Note that {@link @minecraft-server.BoundingBox} objects
     * represent whole blocks, so the center of boxes which have
     * odd numbered bounds are not mathematically centered...
     * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
     * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Calculate the BoundingBox which represents the union area of
     * two intersecting BoundingBoxes
     *
     * This function can't be called in read-only mode.
     *
     */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /**
     * @remarks
     * Get the Span of each of the BoundingBox Axis components
     *
     * This function can't be called in read-only mode.
     *
     */
    static getSpan(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Check to see if two BoundingBox objects intersect
     *
     * This function can't be called in read-only mode.
     *
     */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Check to see if a given coordinate is inside a BoundingBox
     *
     * This function can't be called in read-only mode.
     *
     */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a BoundingBox is valid (i.e. (min <= max))
     *
     * This function can't be called in read-only mode.
     *
     */
    static isValid(box: BoundingBox): boolean;
    /**
     * @remarks
     * Move a BoundingBox by a given amount
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return a new BoundingBox object which represents the change
     */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}