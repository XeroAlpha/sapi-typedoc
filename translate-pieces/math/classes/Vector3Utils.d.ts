/* IMPORT */ import { Vector3 } from '../index';

/**
 * Utilities operating on Vector3 objects. All methods are static and do not modify the input objects.
 *
 * 操作 Vector3 对象的工具类。所有方法都是静态的，并且不会修改输入对象。
 *
 * @public
 */
export declare class Vector3Utils {
    /**
     * equals
     *
     * Check the equality of two vectors
     *
     * 检查两个向量是否相等。
     */
    static equals(v1: Vector3, v2: Vector3): boolean;
    /**
     * add
     *
     * Add two vectors to produce a new vector
     *
     * 将两个向量相加生成一个新的向量。
     */
    static add(v1: Vector3, v2: Vector3): Vector3;
    /**
     * subtract
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     *
     * 将两个向量相减生成一个新的向量 (v1-v2)。
     */
    static subtract(v1: Vector3, v2: Vector3): Vector3;
    /** scale
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     *
     * 使用单一标量值乘以向量中的所有元素，生成一个新的向量。
     */
    static scale(v1: Vector3, scale: number): Vector3;
    /**
     * dot
     *
     * Calculate the dot product of two vectors
     *
     * 计算两个向量的点积。
     */
    static dot(a: Vector3, b: Vector3): number;
    /**
     * cross
     *
     * Calculate the cross product of two vectors. Returns a new vector.
     *
     * 计算两个向量的叉积。返回一个新的向量。
     */
    static cross(a: Vector3, b: Vector3): Vector3;
    /**
     * magnitude
     *
     * The magnitude of a vector
     *
     * 返回向量的模长。
     */
    static magnitude(v: Vector3): number;
    /**
     * distance
     *
     * Calculate the distance between two vectors
     *
     * 计算两个向量之间的距离。
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * normalize
     *
     * Takes a vector 3 and normalizes it to a unit vector
     *
     * 将一个三维向量归一化为单位向量。
     */
    static normalize(v: Vector3): Vector3;
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     *
     * 对向量的各个分量向下取整，生成一个新的向量。
     */
    static floor(v: Vector3): Vector3;
    /**
     * toString
     *
     * Create a string representation of a vector3
     *
     * 以指定的格式返回向量的字符串表示。
     */
    static toString(v: Vector3, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     *
     * 将向量的各个分量钳制在一定范围内，生成一个新的向量。
     */
    static clamp(v: Vector3, limits?: {
        min?: Partial<Vector3>;
        max?: Partial<Vector3>;
    }): Vector3;
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     *
     * 根据两个向量的每个分量进行线性插值，构建一个新的向量。
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector3;
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     *
     * 根据两个向量的每个分量进行球面线性插值，构建一个新的向量。
     */
    static slerp(a: Vector3, b: Vector3, t: number): Vector3;
    /**
     * multiply
     *
     * Element-wise multiplication of two vectors together.
     * Not to be confused with {@link Vector3Utils.dot} product or {@link Vector3Utils.cross} product
     */
    static multiply(a: Vector3, b: Vector3): Vector3;
    /**
     * rotateX
     *
     * Rotates the vector around the x axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    static rotateX(v: Vector3, a: number): Vector3;
    /**
     * rotateY
     *
     * Rotates the vector around the y axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    static rotateY(v: Vector3, a: number): Vector3;
    /**
     * rotateZ
     *
     * Rotates the vector around the z axis counterclockwise (left hand rule)
     * @param a - Angle in radians
     */
    static rotateZ(v: Vector3, a: number): Vector3;
}