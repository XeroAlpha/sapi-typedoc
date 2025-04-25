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
 * Contains debug utility functions.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/debug-utilities",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
/**
 * The length of the arrow's head/tip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    /**
     * @remarks
     * Adds a new debug shape to the world.
     *
     */
    headLength: number;
    /**
     * @remarks
     * The radius of the arrow's head/tip.
     *
     */
    headRadius: number;
    /**
     * @remarks
     * The number of segments for the base circle of the arrow's
     * head/tip (default: 4).
     *
     */
    headSegments: number;
    constructor(location: minecraftserver.Vector3, endLocation: minecraftserver.Vector3);
}

/**
 * A debug shape class that represents a box or cuboid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugBox extends DebugShape {
    /**
     * @remarks
     * The bounding box of the shape. The final box will be this
     * bound multiplied by the shape's scale.
     *
     */
    bound: minecraftserver.Vector3;
    constructor(location: minecraftserver.Vector3);
}

/**
 * A debug shape class that represents a circle (2D).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: minecraftserver.Vector3);
}

/**
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 */
export class DebugDrawer {
    private constructor();
    /**
     * @remarks
     * Adds a new debug shape to the world.
     *
     * @param shape
     * The debug shape to be added. Should be of type DebugBox,
     * DebugLine, DebugCircle, DebugSphere, DebugArrow or
     * DebugText.
     */
    addShape(shape: DebugShape): void;
    /**
     * @remarks
     * Removes all debug shapes from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * Removes an instance of a debug shape from the world. This is
     * equivalent to calling remove on the shape itself.
     *
     */
    removeShape(shape: DebugShape): void;
}

/**
 * A debug shape class that represents a line segment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    /**
     * @remarks
     * The end location of the line segment. The final line will
     * spawn between location and endLocation.
     *
     */
    endLocation: minecraftserver.Vector3;
    constructor(location: minecraftserver.Vector3, endLocation: minecraftserver.Vector3);
}

/**
 * The base class for all debug shapes. Represents an object in
 * the world and its base properties.
 */
export class DebugShape {
    private constructor();
    /**
     * @remarks
     * The color of the shape.
     *
     */
    color: minecraftserver.RGB;
    /**
     * @remarks
     * Returns true if the shape has a limited time span before
     * being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * The location of the shape. For most shapes this is the
     * centre of the shape, except DebugLine and DebugArrow where
     * this represents the start point of the line.
     *
     */
    location: minecraftserver.Vector3;
    /**
     * @remarks
     * The rotation of the shape (Euler angles - [Pitch, Yaw,
     * Roll]).
     *
     */
    rotation: minecraftserver.Vector3;
    /**
     * @remarks
     * The scale of the shape. This does not apply to DebugLine or
     * DebugArrow.
     *
     */
    scale: number;
    /**
     * @remarks
     * The time left (in seconds) until this shape is automatically
     * removed. Returns 0 if the shape does not have a limited
     * life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * The total initial time-span (in seconds) until this shape is
     * automatically removed. Returns 0 if the shape does not have
     * a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * Removes this shape from the world. The shape can be re-added
     * via the DebugDrawer's addShape method.
     *
     */
    remove(): void;
}

/**
 * A debug shape class that represents a sphere.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugSphere extends DebugShape {
    constructor(location: minecraftserver.Vector3);
}

/**
 * A debug shape class that a text label. The text label
 * automatically faces the screen.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    /**
     * @remarks
     * The text of the shape to display.
     *
     */
    text: string;
    constructor(location: minecraftserver.Vector3, text: string);
}

export interface HandleCounts {
    handleCounts: Record<string, number>;
    name: string;
    packId: string;
    scriptModuleUUID: string;
}

export interface PluginStats {
    plugins: HandleCounts[];
}

export interface RuntimeStats {
    arrayCount: number;
    atomCount: number;
    atomSize: number;
    fastArrayCount: number;
    fastArrayElementCount: number;
    functionCodeSize: number;
    functionCount: number;
    functionLineCount: number;
    functionSize: number;
    memoryAllocatedCount: number;
    memoryAllocatedSize: number;
    memoryUsedCount: number;
    memoryUsedSize: number;
    objectCount: number;
    objectSize: number;
    propertyCount: number;
    propertySize: number;
    stringCount: number;
    stringSize: number;
}

/**
 * @remarks
 * Collect type usage stats for each active script
 * plugin/add-on.
 *
 * @returns
 * PluginStats object.
 */
export function collectPluginStats(): PluginStats;
/**
 * @remarks
 * Collect memory stats for script runtimes.
 *
 * @returns
 * RuntimeStats object.
 */
export function collectRuntimeStats(): RuntimeStats;
/**
 * @remarks
 * Disable watchdog slow and spike warnings per plugin.
 *
 * @param disable
 * Flag to disable or re-enable warnings.
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;
/**
 * @remarks
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 *
 */
export const debugDrawer: DebugDrawer;
