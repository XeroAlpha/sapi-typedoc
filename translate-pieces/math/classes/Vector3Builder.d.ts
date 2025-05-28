/* IMPORT */ import { Vector3 } from '../index';

/**
 * Vector3 wrapper class which can be used as a Vector3 for APIs on \@minecraft/server which require a Vector,
 * but also contain additional helper methods. This is an alternative to using the core Vector 3 utility
 * methods directly, for those who prefer a more object-oriented approach. This version of the class is mutable
 * and changes state inline.
 *
 * For an immutable version of the build, use ImmutableVector3Builder.
 *
 * 用于 \@minecraft/server 中需要用到三维向量的 API 的 Vector3 包装类，同时也包含额外的帮助方法。
 * 这是对直接使用核心 Vector 3 实用方法的一种替代，适用于偏好面向对象方法的人。
 * 此类的该版本是可变的，并且在内联中会更改状态。
 *
 * 若要使用构建的不可变版本，请使用 ImmutableVector3Builder。
 *
 * @public
 */
export declare class Vector3Builder implements Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(vecStr: string, delim?: string, arg2?: never);
    constructor(vec: Vector3, arg?: never, arg2?: never);
    constructor(x: number, y: number, z: number);
    /**
     * Assigns the values of the passed in vector to this vector. Returns itself.
     *
     * 将传入向量的值赋给此向量。返回自身。
     */
    assign(vec: Vector3): this;
    /**
     * equals
     *
     * Check the equality of two vectors
     *
     * 检查两个向量是否相等。
     */
    equals(v: Vector3): boolean;
    /**
     * add
     *
     * Adds the vector v to this, returning itself.
     *
     * 将向量 v 加到当前向量上，返回自身。
     */
    add(v: Partial<Vector3>): this;
    /**
     * subtract
     *
     * Subtracts the vector v from this, returning itself.
     *
     * 从此向量减去向量 v ，返回自身。
     */
    subtract(v: Partial<Vector3>): this;
    /** scale
     *
     * Scales this by the passed in value, returning itself.
     *
     * 使用传入的值数乘此向量，返回自身。
     */
    scale(val: number): this;
    /**
     * dot
     *
     * Computes the dot product of this and the passed in vector.
     *
     * 计算此向量与传入向量的点积。
     */
    dot(vec: Vector3): number;
    /**
     * cross
     *
     * Computes the cross product of this and the passed in vector, returning itself.
     *
     * 计算此向量与传入向量的叉积，返回自身。
     */
    cross(vec: Vector3): this;
    /**
     * magnitude
     *
     * The magnitude of the vector
     *
     * 返回向量的模长。
     */
    magnitude(): number;
    /**
     * distance
     *
     * Calculate the distance between two vectors
     *
     * 计算两个向量之间的距离。
     */
    distance(vec: Vector3): number;
    /**
     * normalize
     *
     * Normalizes this vector, returning itself.
     *
     * 归一化此向量，返回自身。
     */
    normalize(): this;
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     *
     * 对向量的各个分量向下取整，生成新的向量。
     */
    floor(): this;
    /**
     * toString
     *
     * Create a string representation of a vector
     *
     * 以指定的格式返回向量的字符串表示。
     */
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     *
     * 将向量的各个分量钳制在一定范围内，生成新的向量。
     */
    clamp(limits: {
        min?: Partial<Vector3>;
        max?: Partial<Vector3>;
    }): this;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     *
     * 使用在两个向量的每个分量上的线性插值构造新的向量。
     */
    lerp(vec: Vector3, t: number): this;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     *
     * 使用在两个向量的每个分量上的球面线性插值构造新的向量。
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