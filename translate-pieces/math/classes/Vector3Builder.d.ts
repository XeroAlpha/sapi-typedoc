/* IMPORT */ import { Vector3 } from '../index';

/**
 * Vector3 wrapper class which can be used as a Vector3 for APIs on \@minecraft/server which require a Vector,
 * but also contain additional helper methods. This is an alternative to using the core Vector 3 utility
 * methods directly, for those who prefer a more object-oriented approach. This version of the class is mutable
 * and changes state inline.
 *
 * For an immutable version of the build, use ImmutableVector3Builder.
 *
 * @public
 */
export declare class Vector3Builder implements Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(vec: Vector3, arg?: never, arg2?: never);
    constructor(x: number, y: number, z: number);
    /**
     * Assigns the values of the passed in vector to this vector. Returns itself.
     */
    assign(vec: Vector3): this;
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    equals(v: Vector3): boolean;
    /**
     * add
     *
     * Adds the vector v to this, returning itself.
     */
    add(v: Partial<Vector3>): this;
    /**
     * subtract
     *
     * Subtracts the vector v from this, returning itself.
     */
    subtract(v: Partial<Vector3>): this;
    /** scale
     *
     * Scales this by the passed in value, returning itself.
     */
    scale(val: number): this;
    /**
     * dot
     *
     * Computes the dot product of this and the passed in vector.
     */
    dot(vec: Vector3): number;
    /**
     * cross
     *
     * Computes the cross product of this and the passed in vector, returning itself.
     */
    cross(vec: Vector3): this;
    /**
     * magnitude
     *
     * The magnitude of the vector
     */
    magnitude(): number;
    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    distance(vec: Vector3): number;
    /**
     * normalize
     *
     * Normalizes this vector, returning itself.
     */
    normalize(): this;
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    floor(): this;
    /**
     * toString
     *
     * Create a string representation of a vector
     */
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    clamp(limits: {
        min?: Partial<Vector3>;
        max?: Partial<Vector3>;
    }): this;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    lerp(vec: Vector3, t: number): this;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    slerp(vec: Vector3, t: number): this;
    /**
     * multiply
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector3Builder.dot} product or {@link Vector3Builder.cross} product
     */
    multiply(vec: Vector3): this;
    /**
     * rotateX
     *
     * Rotates the vector around the x axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    rotateX(a: number): this;
    /**
     * rotateY
     *
     * Rotates the vector around the y axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    rotateY(a: number): this;
    /**
     * rotateZ
     *
     * Rotates the vector around the z axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    rotateZ(a: number): this;
}