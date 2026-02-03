/* IMPORT */ import { VectorXZ } from '../../server';

/**
                 * Utilities operating on VectorXZ objects. All methods are static and do not modify the input objects.
                 *
                 * @public
                 */
                export declare class VectorXZUtils {
                    /**
                     * equals
                     *
                     * Check the equality of two vectors
                     */
                    static equals(v1: VectorXZ, v2: VectorXZ): boolean;
                    /**
                     * add
                     *
                     * Add two vectors to produce a new vector
                     */
                    static add(v1: VectorXZ, v2: Partial<VectorXZ>): VectorXZ;
                    /**
                     * subtract
                     *
                     * Subtract two vectors to produce a new vector (v1-v2)
                     */
                    static subtract(v1: VectorXZ, v2: Partial<VectorXZ>): VectorXZ;
                    /** scale
                     *
                     * Multiple all entries in a vector by a single scalar value producing a new vector
                     */
                    static scale(v1: VectorXZ, scale: number): VectorXZ;
                    /**
                     * dot
                     *
                     * Calculate the dot product of two vectors
                     */
                    static dot(a: VectorXZ, b: VectorXZ): number;
                    /**
                     * magnitude
                     *
                     * The magnitude of a vector
                     */
                    static magnitude(v: VectorXZ): number;
                    /**
                     * distance
                     *
                     * Calculate the distance between two vectors
                     */
                    static distance(a: VectorXZ, b: VectorXZ): number;
                    /**
                     * normalize
                     *
                     * Takes a vector 3 and normalizes it to a unit vector
                     */
                    static normalize(v: VectorXZ): VectorXZ;
                    /**
                     * floor
                     *
                     * Floor the components of a vector to produce a new vector
                     */
                    static floor(v: VectorXZ): VectorXZ;
                    /**
                     * toString
                     *
                     * Create a string representation of a vectorxz
                     */
                    static toString(v: VectorXZ, options?: {
                        decimals?: number;
                        delimiter?: string;
                    }): string;
                    /**
                     * fromString
                     *
                     * Gets a VectorXZ from the string representation produced by {@link VectorXZUtils.toString}. If any numeric value is not a number
                     * or the format is invalid, undefined is returned.
                     * @param str - The string to parse
                     * @param delimiter - The delimiter used to separate the components. Defaults to the same as the default for {@link VectorXZUtils.toString}
                     */
                    static fromString(str: string, delimiter?: string): VectorXZ | undefined;
                    /**
                     * clamp
                     *
                     * Clamps the components of a vector to limits to produce a new vector
                     */
                    static clamp(v: VectorXZ, limits?: {
                        min?: Partial<VectorXZ>;
                        max?: Partial<VectorXZ>;
                    }): VectorXZ;
                    /**
                     * lerp
                     *
                     * Constructs a new vector using linear interpolation on each component from two vectors.
                     */
                    static lerp(a: VectorXZ, b: VectorXZ, t: number): VectorXZ;
                    /**
                     * slerp
                     *
                     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
                     */
                    static slerp(a: VectorXZ, b: VectorXZ, t: number): VectorXZ;
                    /**
                     * multiply
                     *
                     * Element-wise multiplication of two vectors together.
                     * Not to be confused with {@link VectorXZUtils.dot} product
                     */
                    static multiply(a: VectorXZ, b: VectorXZ): VectorXZ;
                }
