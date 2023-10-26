// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/common",
 *   "version": "1.1.0-rc.1.20.50-preview.22"
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

// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    maxValue: number;
    minValue: number;
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    index: number;
}
