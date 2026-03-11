/* IMPORT */ import { Dimension, DimensionLocation, Entity, Player, RGBA, Vector3 } from '..';

/**
 * @beta
 * The base class for a text primitive. Represents an object in
 * the world and its base properties.
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * The entity this shape is attached to. When set, this shape
     * will copy the root location of the attached entity and the
     * shape's position will be used as an offset.
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * The color of the shape.
     *
     */
    color: RGBA;
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
     * The location of the shape.
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
     * The scale of the shape.
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
     * The list of players that this shape will be visible to. If
     * left empty, the shape will be visible to all players.
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * Removes this shape from the world. The shape can be re-added
     * via the PrimitiveShapesManager's addText method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * Set the location and dimension of the shape. If the
     * dimension is undefined, it will display in all dimensions.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
