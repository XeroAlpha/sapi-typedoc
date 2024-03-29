/* IMPORT */ import { Vector3 } from '../index';

/**
 * Utilities operating on Vector3 objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class Vector3Utils {
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    static equals(v1: Vector3, v2: Vector3): boolean;
    /**
     * add
     *
     * Add two vectors to produce a new vector
     */
    static add(v1: Vector3, v2: Vector3): Vector3;
    /**
     * subtract
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1: Vector3, v2: Vector3): Vector3;
    /** scale
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1: Vector3, scale: number): Vector3;
    /**
     * dot
     *
     * Calculate the dot product of two vectors
     */
    static dot(a: Vector3, b: Vector3): number;
    /**
     * cross
     *
     * Calculate the cross product of two vectors. Returns a new vector.
     */
    static cross(a: Vector3, b: Vector3): Vector3;
    /**
     * magnitude
     *
     * The magnitude of a vector
     */
    static magnitude(v: Vector3): number;
    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * normalize
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v: Vector3): Vector3;
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v: Vector3): Vector3;
    /**
     * toString
     *
     * Create a string representation of a vector3
     */
    static toString(v: Vector3, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(v: Vector3, limits?: {
        min?: Partial<Vector3>;
        max?: Partial<Vector3>;
    }): Vector3;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector3;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a: Vector3, b: Vector3, t: number): Vector3;
}