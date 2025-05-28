/* IMPORT */ import { Vector2, Vector3Utils } from '../index';

/**
 * Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.
 *
 * 操作 Vector2 对象的工具类。所有方法都是静态的，并且不会修改输入对象。
 *
 * @public
 */
export declare class Vector2Utils {
    /**
     * toString
     *
     * Create a string representation of a vector2
     *
     * 将 Vector2 转换为字符串形式。
     */
    static toString(v: Vector2, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
    /**
     * fromString
     *
     * Gets a Vector2 from the string representation produced by {@link Vector3Utils.toString}. If any numeric value is not a number
     * or the format is invalid, undefined is returned.
     * @param str - The string to parse
     * @param delimiter - The delimiter used to separate the components. Defaults to the same as the default for {@link Vector3Utils.toString}
     */
    static fromString(str: string, delimiter?: string): Vector2 | undefined;
}