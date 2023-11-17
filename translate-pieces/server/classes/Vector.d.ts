/* IMPORT */ import { Vector3 } from '../index';

/**
 * @beta
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
    /**
     * @remarks
     * A constant vector that represents (0, 0, -1).
     *
     */
    static readonly back: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, -1, 0).
     *
     */
    static readonly down: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 1).
     *
     */
    static readonly forward: Vector;
    /**
     * @remarks
     * A constant vector that represents (-1, 0, 0).
     *
     */
    static readonly left: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 1, 1).
     *
     */
    static readonly one: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 0, 0).
     *
     */
    static readonly right: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 1, 0).
     *
     */
    static readonly up: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 0).
     *
     */
    static readonly zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     *
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     *
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     *
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     *
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     *
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     *
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     *
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     *
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     *
     * @throws This function can throw errors.
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     *
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     *
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     *
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     *
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     *
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     *
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}