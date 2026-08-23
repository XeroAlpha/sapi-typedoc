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
import { ArgumentOutOfBoundsError } from '@minecraft/common';
import { Dimension, DimensionLocation, Entity, Player, RGBA, RawMessage, RawMessageError, Vector2, Vector3 } from '@minecraft/server';
/**
 * The display type for the chart (e.g. line chart, stacked
 * line chart, stacked bar chart).
 */
export enum DiagnosticsChartDisplayType {
    /**
     * @remarks
     * Represents a simple line graph chart where the X axis is
     * time and the Y axis is the user driven data.
     *
     */
    LineChart = 0,
    /**
     * @remarks
     * Indicates that the view or stat has not been registered.
     *
     */
    StackedLineChart = 1,
    /**
     * @remarks
     * Represents a line graph chart where the X axis is time and
     * the Y axis is a collection of multiple the user driven data
     * entries that are visually stacked on top of each other.
     *
     */
    StackedBarChart = 2,
}

/**
 * Reason codes for errors thrown by DiagnosticsManager and
 * DiagnosticsView operations.
 */
export enum DiagnosticsErrorReason {
    /**
     * @remarks
     * Indicates that the view or stat has already been registered.
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * Indicates an issue with the stats data pushed to the view,
     * see message for details.
     *
     */
    InvalidData = 'InvalidData',
    /**
     * @remarks
     * Indicates that the view or stat name is invalid (likely the
     * name is empty).
     *
     */
    InvalidName = 'InvalidName',
}

/**
 * The display type for the table (e.g. single table or
 * multi-column table).
 */
export enum DiagnosticsTableDisplayType {
    /**
     * @remarks
     * A simple table of keys to values (2 columns). Does not track
     * history or value changes.
     *
     */
    Table = 0,
    /**
     * @remarks
     * A table of keys to multiple values. The amount of value
     * columns is driven by the data. Does not track history or
     * value changes.
     *
     */
    MultiColumnTable = 1,
}

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
     * Bounds: [3, 128]
     */
    headSegments: number;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
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
    bound: Vector3;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * A debug shape class that represents a circle (2D).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}

/**
 * A debug shape class that represents a cone.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCone extends DebugShape {
    /**
     * @remarks
     * The height of the cone.
     *
     */
    height: number;
    /**
     * @remarks
     * The number of segments used to approximate the circular base
     * of the cone. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * The radii of the cone's circular base (x: bottom radius, y:
     * top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * A debug shape class that represents a cylinder.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCylinder extends DebugShape {
    /**
     * @remarks
     * The height of the cylinder.
     *
     */
    height: number;
    /**
     * @remarks
     * The number of segments used to approximate the circular
     * cross-section of the cylinder. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * The radii of the cylinder's circular cross-section (x:
     * bottom radius, y: top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
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
    addShape(shape: DebugShape, dimension?: Dimension): void;
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
 * A debug shape class that represents an ellipsoid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugEllipsoid extends DebugShape {
    /**
     * @remarks
     * The radii of the ellipsoid along each axis (x, y, z).
     *
     */
    radii: Vector3;
    /**
     * @remarks
     * The number of segments used to approximate the ellipsoid per
     * axis. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    segmentsPerAxis: number;
    constructor(location: DimensionLocation | Vector3);
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
    endLocation: Vector3;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}

/**
 * A debug shape class that represents a pyramid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugPyramid extends DebugShape {
    /**
     * @remarks
     * The depth of the pyramid's base.
     *
     */
    depth?: number;
    /**
     * @remarks
     * The height of the pyramid.
     *
     */
    height: number;
    /**
     * @remarks
     * The width of the pyramid's base.
     *
     */
    width: number;
    constructor(location: DimensionLocation | Vector3);
}

/**
 * The base class for all debug shapes. Represents an object in
 * the world and its base properties.
 */
export class DebugShape {
    private constructor();
    /**
     * @remarks
     * The entity this shape is attached to. When set, this shape
     * will copy the root location of the attached entity and the
     * shape's position will be used as an offset.
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * The color of the shape.
     *
     */
    color: RGBA;
    /**
     * @remarks
     * The dimension the shape is visible within. If the dimension
     * is undefined, it will display in all dimensions.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Returns true if the shape has a limited time span before
     * being removed.
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * The location of the shape. For most shapes the location is
     * the centre of the shape, except DebugLine and DebugArrow
     * where this represents the start point of the line.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * If defined, this distance will be used to determine how far
     * away this shape will be rendered for each client. By default
     * the distance will match the client's render distance
     * setting.
     *
     * Minimum Value: 0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * The rotation of the shape in degrees (Euler angles - [Pitch,
     * Yaw, Roll]).
     *
     */
    rotation: Vector3;
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
     * removed. Returns undefined if the shape does not have a
     * limited life-span.
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * The total initial time-span (in seconds) until this shape is
     * automatically removed. Returns undefined if the shape does
     * not have a limited life-span.
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * The list of players that this shape will be visible to. If
     * left empty, the shape will be visible to all players.
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * Removes this shape from the world. The shape can be re-added
     * via the DebugDrawer's addShape method.
     *
     */
    remove(): void;
    /**
     * @remarks
     * Set the location and dimension of the shape. If the
     * dimension is undefined, it will display in all dimensions.
     * For most shapes the location is the centre of the shape,
     * except DebugLine and DebugArrow where this represents the
     * start point of the line.
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}

/**
 * A debug shape class that represents a sphere.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugSphere extends DebugShape {
    constructor(location: DimensionLocation | Vector3);
}

/**
 * A debug shape class that represents a text label in the
 * world with a background.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    /**
     * @remarks
     * If set to true, the debug text will render the back-face of
     * the background. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * This value determines the gap between lines for the debug
     * text. By default the line gap height is 0.
     *
     */
    lineGapHeight: number;
    /**
     * @remarks
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * If set to true, the debug text will render the back-face of
     * the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     */
    useRotation: boolean;
    constructor(
        location: DimensionLocation | Vector3,
        text: RawMessage | string,
    );
    /**
     * @remarks
     * Sets the text to display.
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}

/**
 * Manages data, display tabs and views used by the Minecraft
 * Bedrock Debugger VS Code extension for live diagnostics.
 */
export class DiagnosticsManager {
    private constructor();
    /**
     * @remarks
     * The list of currently registered diagnostic tabs
     * (constrained to this pack).
     *
     */
    readonly tabs: DiagnosticsTab[];
    /**
     * @remarks
     * Adds an existing DiagnosticsTab instance to the live
     * diagnostics display in the debugger
     *
     * @param tab
     * The DiagnosticsTab instance to add to the display.
     */
    addTab(tab: DiagnosticsTab): void;
    /**
     * @remarks
     * Returns whether the given tab is currently registered and
     * used in the live diagnostics display.
     *
     */
    containsTab(tab: DiagnosticsTab): boolean;
    /**
     * @remarks
     * Returns whether the given view is currently registered and
     * used by any tab in the live diagnostics display.
     *
     */
    containsView(view: DiagnosticsView): boolean;
    /**
     * @remarks
     * Creates a new DiagnosticsTab and adds it to the live
     * diagnostics display in the debugger
     *
     * @param tabName
     * The name of the tab for creation and display.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createTab(tabName: string): DiagnosticsTab;
    /**
     * @remarks
     * Creates a new DiagnosticsView. This view will not be added
     * to the live diagnostics display automatically, please use
     * DiagnosticsTab.addView to do so.
     *
     * @param statName
     * The name of the stats data for creation and display.
     * @param options
     * An optional set of either chart or table options to be used
     * for modifying the display.
     * @returns
     * The newly created DiagnosticsView instance.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createView(statName: string, options?: DiagnosticsChartViewOptions | DiagnosticsTableViewOptions): DiagnosticsView;
    /**
     * @remarks
     * Removes a previously registered tab from the live
     * diagnostics display in the debugger
     *
     */
    removeTab(tab: DiagnosticsTab): void;
}

/**
 * Represents a tab that is displayed in the live diagnostics
 * panel of the debugger. It can contain various data including
 * 'DiagnosticsViews' which are used to display live stats data
 * in the form of graphs or tables.
 */
export class DiagnosticsTab {
    private constructor();
    /**
     * @remarks
     * The name of the tab. This determines the name shown in the
     * live diagnostics section of the Minecraft VS Code debugger
     * extension list.
     *
     */
    readonly tabName: string;
    /**
     * @remarks
     * The list of views currently associated and displayed in this
     * tab.
     *
     */
    readonly views: DiagnosticsView[];
    /**
     * @remarks
     * Registers an existing diagnostics view under the given tab
     * for display in the live diagnostics.
     *
     * @param view
     * The existing view to add to this tab.
     */
    addView(view: DiagnosticsView): void;
    /**
     * @remarks
     * Returns whether the given view is currently registered and
     * used by this tab.
     *
     */
    containsView(view: DiagnosticsView): boolean;
    /**
     * @remarks
     * Removes a diagnostics view from this tab. It will no longer
     * be rendered.
     *
     * @param view
     * The DiagnosticsView instance to remove.
     */
    removeView(view: DiagnosticsView): void;
}

/**
 * Represents a registered diagnostics view that can receive
 * stat data to display in the live diagnostics panel in the
 * debugger.
 */
export class DiagnosticsView {
    private constructor();
    /**
     * @remarks
     * Pushes a new set of stats to this diagnostics view to be
     * displayed.
     *
     * @param stats
     * An array of DiagnosticsStat objects containing the stat
     * names and values to display.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    pushStats(stats: DiagnosticsStat[]): void;
}

/**
 * Configuration options for registering a chart-based
 * diagnostics view.
 */
export interface DiagnosticsChartViewOptions {
    /**
     * @remarks
     * The display type for the chart (e.g. line chart, stacked
     * line chart, stacked bar chart).
     *
     */
    chartType: DiagnosticsChartDisplayType;
    /**
     * @remarks
     * Optional target value to display as a reference line on the
     * chart.
     *
     */
    targetValue?: number;
    /**
     * @remarks
     * Optional number of ticks to display along the chart's time
     * axis.
     *
     */
    tickRange?: number;
    /**
     * @remarks
     * Optional label for the chart's Y axis.
     *
     */
    yAxisLabel?: string;
}

/**
 * Represents a single stat entry with a name and optional
 * values to be pushed to a DiagnosticsView.
 */
export interface DiagnosticsStat {
    /**
     * @remarks
     * The name identifier for this stat entry.
     *
     */
    name: string;
    /**
     * @remarks
     * Optional array of numeric or string values associated with
     * this stat entry.
     *
     */
    values?: (number | string)[];
}

/**
 * Configuration options for registering a table-based
 * diagnostics view.
 */
export interface DiagnosticsTableViewOptions {
    /**
     * @remarks
     * Optional label for the key column of the table.
     *
     */
    keyLabel?: string;
    /**
     * @remarks
     * The display type for the table (e.g. single table or
     * multi-column table).
     *
     */
    tableType: DiagnosticsTableDisplayType;
    /**
     * @remarks
     * Optional array of labels for the value columns of the table.
     *
     */
    valueLabels?: string[];
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
    memoryAllocatedLimit: number;
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
 * Error thrown by diagnostics operations such as registering
 * or pushing stats to a view.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DiagnosticsError extends Error {
    private constructor();
    /**
     * @remarks
     * The reason code explaining why this diagnostics error was
     * thrown.
     *
     * @earlyExecution
     *
     */
    readonly reason: DiagnosticsErrorReason;
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
/**
 * @remarks
 * Manages data, display tabs and views used by the Minecraft
 * Bedrock Debugger VS Code extension for live diagnostics.
 *
 */
export const diagnosticsManager: DiagnosticsManager;
