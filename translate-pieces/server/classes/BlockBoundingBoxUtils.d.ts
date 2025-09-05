/* IMPORT */ import { BlockBoundingBox, Vector3 } from '..';

/**
 * @beta
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BlockBoundingBox} objects
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * Create a validated instance of a {@link BlockBoundingBox}
     * where the min and max components are guaranteed to be (min
     * <= max)
     *
     * @worldMutation
     *
     * @param min
     * A corner world location
     * @param max
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * Expand a {@link BlockBoundingBox} by a given amount along
     * each axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * @worldMutation
     *
     * @returns
     * Return a new {@link BlockBoundingBox} object representing
     * the changes
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * Check if two {@link BlockBoundingBox} objects are identical
     *
     * @worldMutation
     *
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link BlockBoundingBox} object
     * will be a BlockBoundingBox which exactly encompasses the two
     * boxes.
     *
     * @worldMutation
     *
     * @returns
     * A new {@link BlockBoundingBox} instance representing the
     * smallest possible bounding box which can encompass both
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * Calculate the center block of a given {@link
     * BlockBoundingBox} object.
     *
     * @worldMutation
     *
     * @returns
     * Note that {@link BlockBoundingBox} objects represent whole
     * blocks, so the center of boxes which have odd numbered
     * bounds are not mathematically centered...
     * i.e. a BlockBoundingBox( 0,0,0 -> 3,3,3 )  would have a
     * center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * Calculate the BlockBoundingBox which represents the union
     * area of two intersecting BlockBoundingBoxes
     *
     * @worldMutation
     *
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * Get the Span of each of the BlockBoundingBox Axis components
     *
     * @worldMutation
     *
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * Check to see if two BlockBoundingBox objects intersect
     *
     * @worldMutation
     *
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * Check to see if a given coordinate is inside a
     * BlockBoundingBox
     *
     * @worldMutation
     *
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a BlockBoundingBox is valid (i.e. (min <=
     * max))
     *
     * @worldMutation
     *
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * Move a BlockBoundingBox by a given amount
     *
     * @worldMutation
     *
     * @returns
     * Return a new BlockBoundingBox object which represents the
     * change
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}
