/* IMPORT */ import { Dimension, DimensionLocation, RGB, Vector3 } from '../../server';

/**
 * The base class for all debug shapes. Represents an object in
 * the world and its base properties.
 */
export class DebugShape {
    private constructor();
    /**
     * @remarks
     * The color of the shape.
     *
     */
    color: RGB;
    /**
     * @remarks
     * The dimension the shape is visible within. If the dimension
     * is undefined, it will display in all dimensions.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Returns true if the shape has a limited time span before
     * being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * The location of the shape. For most shapes the location is
     * the centre of the shape, except DebugLine and DebugArrow
     * where this represents the start point of the line.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * The rotation of the shape (Euler angles - [Pitch, Yaw,
     * Roll]).
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * The scale of the shape. This does not apply to DebugLine or
     * DebugArrow.
     *
     */
    scale: number;
    /**
     * @remarks
     * The time left (in seconds) until this shape is automatically
     * removed. Returns undefined if the shape does not have a
     * limited life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * The total initial time-span (in seconds) until this shape is
     * automatically removed. Returns undefined if the shape does
     * not have a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * Removes this shape from the world. The shape can be re-added
     * via the DebugDrawer's addShape method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * Set the location and dimension of the shape. If the
     * dimension is undefined, it will display in all dimensions.
     * For most shapes the location is the centre of the shape,
     * except DebugLine and DebugArrow where this represents the
     * start point of the line.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
