/* IMPORT */ import { Vector2 } from '../../server';

/**
 * Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class Vector2Utils {
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    static equals(v1: Vector2, v2: Vector2): boolean;
    /**
     * add
     *
     * Add two vectors to produce a new vector
     */
    static add(v1: Vector2, v2: Partial<Vector2>): Vector2;
    /**
     * subtract
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1: Vector2, v2: Partial<Vector2>): Vector2;
    /** scale
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1: Vector2, scale: number): Vector2;
    /**
     * dot
     *
     * Calculate the dot product of two vectors
     */
    static dot(a: Vector2, b: Vector2): number;
    /**
     * magnitude
     *
     * The magnitude of a vector
     */
    static magnitude(v: Vector2): number;
    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    static distance(a: Vector2, b: Vector2): number;
    /**
     * normalize
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v: Vector2): Vector2;
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v: Vector2): Vector2;
    /**
     * toString
     *
     * Create a string representation of a vector2
     */
    static toString(v: Vector2, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * fromString
     *
     * Gets a Vector2 from the string representation produced by {@link Vector2Utils.toString}. If any numeric value is not a number
     * or the format is invalid, undefined is returned.
     * @param str - The string to parse
     * @param delimiter - The delimiter used to separate the components. Defaults to the same as the default for {@link Vector2Utils.toString}
     */
    static fromString(str: string, delimiter?: string): Vector2 | undefined;
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(v: Vector2, limits?: {
        min?: Partial<Vector2>;
        max?: Partial<Vector2>;
    }): Vector2;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     * multiply
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector2Utils.dot} product
     */
    static multiply(a: Vector2, b: Vector2): Vector2;
}
