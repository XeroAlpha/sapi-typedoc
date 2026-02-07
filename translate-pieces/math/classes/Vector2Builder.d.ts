/* IMPORT */ import { Vector2 } from '../../server';

/**
 * Vector2 wrapper class which can be used as a Vector2 for APIs on \@minecraft/server which require a Vector2.
 * @public
 */
export declare class Vector2Builder implements Vector2 {
    x: number;
    y: number;
    constructor(vecStr: string, delim?: string);
    constructor(vec: Vector2, arg?: never);
    constructor(x: number, y: number);
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * Assigns the values of the passed in vector to this vector. Returns itself.
     */
    assign(vec: Vector2): this;
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    equals(v: Vector2): boolean;
    /**
     * add
     *
     * Adds the vector v to this, returning itself.
     */
    add(v: Partial<Vector2>): this;
    /**
     * subtract
     *
     * Subtracts the vector v from this, returning itself.
     */
    subtract(v: Partial<Vector2>): this;
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
    dot(vec: Vector2): number;
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
    distance(vec: Vector2): number;
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
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    clamp(limits: {
        min?: Partial<Vector2>;
        max?: Partial<Vector2>;
    }): this;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    lerp(vec: Vector2, t: number): this;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    slerp(vec: Vector2, t: number): this;
    /**
     * multiply
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector2Builder.dot} product
     */
    multiply(vec: Vector2): this;
}
