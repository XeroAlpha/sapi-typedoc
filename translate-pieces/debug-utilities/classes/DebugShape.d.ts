/* IMPORT */ import { RGB, Vector3 } from '../../server';

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
     * Returns true if the shape has a limited time span before
     * being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * The location of the shape. For most shapes this is the
     * centre of the shape, except DebugLine and DebugArrow where
     * this represents the start point of the line.
     *
     */
    location: Vector3;
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
     * removed. Returns 0 if the shape does not have a limited
     * life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * The total initial time-span (in seconds) until this shape is
     * automatically removed. Returns 0 if the shape does not have
     * a limited life-span.
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
}
