/* IMPORT */ import { BoundingBox, Vector3 } from '../index';

/**
 * @beta
 * Bounding Box Utils 是一个实用工具类，提供了许多用于创建和操作 {@link BoundingBox} 对象的实用功能。
 * 
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BoundingBox} objects
 */
export class BoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个已验证的 {@link BoundingBox} 实例，其中最小值和最大值的组件保证满足 (min <= max)。
     * 
     * Create a validated instance of a {@link BoundingBox} where
     * the min and max components are guaranteed to be (min <= max)
     *
     * This function can't be called in read-only mode.
     *
     * @param min
     * 一个角落的世界坐标位置
     * 
     * A corner world location
     * @param max
     * 与之对角相对的世界坐标位置
     * 
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /**
     * @remarks
     * 按每个轴上的给定量扩展一个 {@link BoundingBox}。
     * 大小可以为负数以执行收缩。
     * 注意：如果收缩大小大于跨度，则角点可能会被反转，但最小值/最大值的关系将保持正确。
     * 
     * Expand a {@link BoundingBox} by a given amount along each
     * axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * 返回一个新的 {@link BoundingBox} 对象，表示更改后的结果。
     * 
     * Return a new {@link BoundingBox} object representing the
     * changes
     */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BoundingBox} 对象是否完全相同。
     * 
     * Check if two {@link BoundingBox} objects are identical
     *
     * This function can't be called in read-only mode.
     *
     */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始边界框对象的范围以包含第二个边界框参数。
     * 结果是一个 {@link BoundingBox} 对象，该对象完全包围两个边界框。
     * 
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link BoundingBox} object will be
     * a BoundingBox which exactly encompasses the two boxes.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * 一个新的 {@link BoundingBox} 实例，表示可以包围两者的最小可能边界框。
     * 
     * A new {@link BoundingBox} instance representing the smallest
     * possible bounding box which can encompass both
     */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BoundingBox} 对象的中心块。
     * 
     * Calculate the center block of a given {@link BoundingBox}
     * object.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * 注意，{@link BoundingBox} 对象表示整个方块，因此具有奇数边界的边界框的中心点在数学上并不居中。
     * 例如，一个 BoundingBox( 0,0,0 -> 3,3,3 ) 的中心点为 (1,1,1)，而不是预期的 (1.5, 1.5, 1.5)。
     * 
     * Note that {@link BoundingBox} objects represent whole
     * blocks, so the center of boxes which have odd numbered
     * bounds are not mathematically centered...
     * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
     * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交的 {@link BoundingBox} 的交集区域的边界框。
     * 
     * Calculate the BoundingBox which represents the union area of
     * two intersecting BoundingBoxes
     *
     * This function can't be called in read-only mode.
     *
     */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /**
     * @remarks
     * 获取边界框每个轴分量的跨度。
     * 
     * Get the Span of each of the BoundingBox Axis components
     *
     * This function can't be called in read-only mode.
     *
     */
    static getSpan(box: BoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个边界框对象是否相交。
     * 
     * Check to see if two BoundingBox objects intersect
     *
     * This function can't be called in read-only mode.
     *
     */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否在边界框内。
     * 
     * Check to see if a given coordinate is inside a BoundingBox
     *
     * This function can't be called in read-only mode.
     *
     */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查边界框是否有效（即 min <= max）。
     * 
     * Check to see if a BoundingBox is valid (i.e. (min <= max))
     *
     * This function can't be called in read-only mode.
     *
     */
    static isValid(box: BoundingBox): boolean;
    /**
     * @remarks
     * 按给定的增量移动一个边界框。
     * 
     * Move a BoundingBox by a given amount
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * 返回一个新的 BoundingBox 对象，表示更改后的结果。
     * 
     * Return a new BoundingBox object which represents the change
     */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}