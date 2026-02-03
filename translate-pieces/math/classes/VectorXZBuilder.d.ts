/* IMPORT */ import { VectorXZ } from '../../server';

/**
                 * VectorXZ wrapper class which can be used as a VectorXZ for APIs on \@minecraft/server which require a VectorXZ.
                 * @public
                 */
                export declare class VectorXZBuilder implements VectorXZ {
                    x: number;
                    z: number;
                    constructor(vecStr: string, delim?: string);
                    constructor(vec: VectorXZ, arg?: never);
                    constructor(x: number, y: number);
                    toString(options?: {
                        decimals?: number;
                        delimiter?: string;
                    }): string;
                    /**
                     * Assigns the values of the passed in vector to this vector. Returns itself.
                     */
                    assign(vec: VectorXZ): this;
                    /**
                     * equals
                     *
                     * Check the equality of two vectors
                     */
                    equals(v: VectorXZ): boolean;
                    /**
                     * add
                     *
                     * Adds the vector v to this, returning itself.
                     */
                    add(v: Partial<VectorXZ>): this;
                    /**
                     * subtract
                     *
                     * Subtracts the vector v from this, returning itself.
                     */
                    subtract(v: Partial<VectorXZ>): this;
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
                    dot(vec: VectorXZ): number;
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
                    distance(vec: VectorXZ): number;
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
                        min?: Partial<VectorXZ>;
                        max?: Partial<VectorXZ>;
                    }): this;
                    /**
                     * lerp
                     *
                     * Constructs a new vector using linear interpolation on each component from two vectors.
                     */
                    lerp(vec: VectorXZ, t: number): this;
                    /**
                     * slerp
                     *
                     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
                     */
                    slerp(vec: VectorXZ, t: number): this;
                    /**
                     * multiply
                     *
                     * Element-wise multiplication of two vectors together.
                     * Not to be confused with {@link VectorXZBuilder.dot} product
                     */
                    multiply(vec: VectorXZ): this;
                }
