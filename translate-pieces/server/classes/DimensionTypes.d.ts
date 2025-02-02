/* IMPORT */ import { DimensionType } from '../index';

/**
 * 用于访问所有可用的维度类型。
 *
 * Used for accessing all available dimension types.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符来获取维度类型。
     *
     * Retrieves a dimension type using a string-based identifier.
     *
     * 这个函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 获取所有维度类型的数组。
     *
     * Retrieves an array of all dimension types.
     *
     * 这个函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    static getAll(): DimensionType[];
}