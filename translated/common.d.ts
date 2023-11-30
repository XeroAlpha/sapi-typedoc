// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @packageDocumentation
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/common",
 *   "version": "1.0.0"
 * }
 * ```
 *
 */
/**
 * @beta
 * 表示一个最大/最小值的结构，用于描述数值的取值范围。
 * 
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * @remarks
     * 能够取到的最大值。
     * 
     * Maximum value within a range.
     *
     */
    max: number;
    /**
     * @remarks
     * 能够取到的最小值。
     * 
     * Minimum value within a range.
     *
     */
    min: number;
}

/**
 * 此类错误表示调用的方法参数或待设置的属性超出允许的范围。
 *
 * This type of error is thrown when a parameter to a method or
 * property is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * 参数允许的最大值。
     *
     * Max expected value for the condition.
     */
    maxValue: number;
    /**
     * @remarks
     * 参数允许的最小值。
     *
     * Min expected value for the condition.
     */
    minValue: number;
    /**
     * @remarks
     * 传入参数的值。
     *
     * Passed-in value for the argument.
     */
    value: number;
}

/**
 * Specifies an underlying error in the engine in processing a
 * function.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EngineError extends Error {
    private constructor();
}

/**
 * Specifies that a passed-in argument to a method is not
 * correct or allowed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks
     * Index of the argument that is in error.
     *
     */
    index: number;
}
