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
 *   "module_name": "@minecraft/server-editor",
 *   "version": "0.1.0-beta"
 * }
 * ```
 *
 */
import { ArgumentOutOfBoundsError, InvalidArgumentError } from '@minecraft/common';
import { BlockBoundingBox, BlockLocationIterator, BlockPermutation, BlockType, BlockVolume, BlockVolumeBase, CompoundBlockVolume, Difficulty, Entity, GameMode, GraphicsMode, InvalidStructureError, ItemType, ListBlockVolume, Player, PlayerPermissionLevel, RGBA, StructureMirrorAxis, StructureRotation, Vector2, Vector3, WorldAfterEvents } from '@minecraft/server';
// @ts-ignore Optional types-only package, will decay to any if @minecraft/vanilla-data isn't installed
import type { BlockStateSuperset } from '@minecraft/vanilla-data';
/**
 * The types of actions that are supported. This type
 * corresponds to the expected arguments passed by the
 * onExecute handler of an action.
 */
export declare enum ActionTypes {
    ContinuousAction = 'ContinuousAction',
    MouseRayCastAction = 'MouseRayCastAction',
    NoArgsAction = 'NoArgsAction',
    StatefulAction = 'StatefulAction',
}

export enum AudioSettingsProperty {
    AreSoundsMuted = 'AreSoundsMuted',
    IsMusicMuted = 'IsMusicMuted',
}

export enum Axis {
    None = 0,
    X = 1,
    Y = 2,
    Z = 4,
}

export enum BlockMaskListType {
    Disabled = 'Disabled',
    Mask = 'Mask',
    Replace = 'Replace',
}

export enum BlockPaletteItemType {
    Simple = 0,
    Probability = 1,
}

/**
 * The possible operation types supported by BlockTable
 * property item.
 */
export declare enum BlockTableOperationType {
    Deselect = 'deselect',
    Replace = 'replace',
}

/**
 * The possible variants of a bool.
 */
export declare enum BoolPropertyItemVariant {
    Checkbox = 0,
    ToggleSwitch = 1,
}

export enum BrushDirectionalPlacementMode {
    IgnoreCamera = 0,
    NormalCamera = 1,
    OppositeCamera = 2,
    CameraLeft = 3,
    CameraRight = 4,
    CameraFromAbove = 5,
    CameraFromBelow = 6,
    FrontFacePosX = 7,
    FrontFaceNegX = 8,
    FrontFacePosZ = 9,
    FrontFaceNegZ = 10,
    FrontFacePosY = 11,
    FrontFaceNegY = 12,
    Random2Axes = 13,
    Random3Axes = 14,
}

/**
 * The possible variants of a Button property item.
 */
export declare enum ButtonPropertyItemVariant {
    Primary = 0,
    Secondary = 1,
    Confirmation = 2,
    Destructive = 3,
}

/**
 * The possible variants of a color picker.
 */
export declare enum ColorPickerPropertyItemVariant {
    Default = 0,
    Inline = 1,
    Expanded = 2,
}

/**
 * The possible data types supported by ComboBox property item.
 */
export declare enum ComboBoxPropertyItemDataType {
    Custom = 0,
    Block = 1,
    Entity = 2,
}

export enum ContiguousSelectionType {
    SameBlock = 0,
    SameBlockAndStates = 1,
    SolidBlocks = 2,
    AllBlocks = 3,
    Custom = 4,
}

/**
 * Execution state of the continuous action
 */
export declare enum ContinuousActionState {
    Begin = 0,
    Repeat = 1,
    End = 2,
}

/**
 * Predefined action bar items
 */
export declare enum CoreActionBarItemType {
    Export = 'editor:actionBarItem:export',
    Fill = 'editor:actionBarItem:fill',
    Locate = 'editor:actionBarItem:locate',
    Playtest = 'editor:actionBarItem:playtest',
    Realms = 'editor:actionBarItem:realms',
    Redo = 'editor:actionBarItem:redo',
    Settings = 'editor:actionBarItem:settings',
    Undo = 'editor:actionBarItem:undo',
}

/**
 * Core brush shape types
 */
export declare enum CoreBrushShapeType {
    Cone = 'editor:brushShape:cone',
    Cuboid = 'editor:brushShape:cuboid',
    Cylinder = 'editor:brushShape:cylinder',
    Ellipsoid = 'editor:brushShape:ellipsoid',
    Pyramid = 'editor:brushShape:pyramid',
    SingleBlock = 'editor:brushShape:singleBlock',
    Star = 'editor:brushShape:star',
}

/**
 * Predefined top level menus for core editor
 */
export declare enum CoreMenuType {
    Edit = 'editor:menu:edit',
    Experimental = 'editor:menu:experimental',
    Extensions = 'editor:menu:extensions',
    File = 'editor:menu:file',
    Help = 'editor:menu:help',
    View = 'editor:menu:view',
    WorldOptions = 'editor:menu:worldOptions',
}

export declare enum CoreModalDialogType {
    DataPicker = 0,
}

/**
 * An enumeration used by the 3D block cursor {@link Cursor}
 */
export enum CursorControlMode {
    /**
     * @remarks
     * Using Keyboard mode will remove the dependence of the 3D
     * block cursor on the player mouse position.  The 3D block
     * cursor can be positioned using the keyboard (or the Cursor
     * move methods on the cursor object) and the position will not
     * be reset if the mouse is moved
     *
     */
    Keyboard = 0,
    /**
     * @remarks
     * The Mouse movement mode will disable keyboard or manual 3D
     * block cursor movement and make the 3D block cursor only
     * react to player mouse movement
     *
     */
    Mouse = 1,
    /**
     * @remarks
     * This is generally the default move mode for the 3D block
     * cursor.
     * The 3D block cursor can be positioned using the keyboard (or
     * the Cursor move methods on the cursor object) but the
     * position will be reset to the block location under the
     * players mouse position if any mouse movement is detected.
     *
     */
    KeyboardAndMouse = 2,
    /**
     * @remarks
     * When in fixed mode, the 3D block cursor will remain in a
     * fixed position directly in front of the players facing
     * direction.  It cannot be moved without moving the player (or
     * adjusting the fixed block distance).
     * This mode is useful for addressing block locations in the
     * air (put the cursor into fixed mode, and fly the player
     * until the desired air block is beneath the cursor, at which
     * point it is selectable without being clickable)
     *
     */
    Fixed = 3,
}

/**
 * Describes how the cursor targets a point on the screen.
 */
export enum CursorTargetMode {
    /**
     * @remarks
     * Target a nearest block.
     *
     */
    Block = 0,
    /**
     * @remarks
     * Targets the face of a nearest block.
     *
     */
    Face = 1,
}

export declare enum DataPickerModalDialogVariant {
    Block = 0,
}

export enum DaylightCycle {
    Normal = 0,
    AlwaysDay = 1,
    LockTime = 2,
}

/**
 * Global editor input contexts
 */
export declare enum EditorInputContext {
    GlobalEditor = 'global.editor',
    GlobalToolMode = 'global.toolMode',
    Viewport = 'local.toolMode.viewport',
}

/**
 * Enumeration representing the different modes Editor can be
 * in.
 */
export enum EditorMode {
    /**
     * @remarks
     * Mode for single-block editing.
     *
     */
    Crosshair = 'Crosshair',
    /**
     * @remarks
     * Mode for multi-block editing UI and tools.
     *
     */
    Tool = 'Tool',
}

export enum EntityOperationType {
    Create = 0,
    Delete = 1,
}

export enum ExportResult {
    ValidWorldExport = 0,
    LevelFetchFailed = 1,
    FileArchiverFetchFailed = 2,
    ProjectConverterFetchFailed = 3,
    PlayerNotFound = 4,
    WorldExportFailed = 5,
    WorldExportBusy = 6,
    EditorSystemFailure = 7,
}

export enum FlattenMode {
    Both = 0,
    Down = 1,
    Up = 2,
}

export enum GamePublishSetting {
    NoMultiPlay = 0,
    InviteOnly = 1,
    FriendsOnly = 2,
    FriendsOfFriends = 3,
    Public = 4,
}

/**
 * Enumeration representing identifiers for graphics settings
 * properties.
 */
export enum GraphicsSettingsProperty {
    DisableBlockEntityRendering = 'DisableBlockEntityRendering',
    DisableEntityRendering = 'DisableEntityRendering',
    DisableParticleRendering = 'DisableParticleRendering',
    DisableTerrainRendering = 'DisableTerrainRendering',
    DisableWeatherRendering = 'DisableWeatherRendering',
    GraphicsMode = 'GraphicsMode',
    NightVision = 'NightVision',
    ShowChunkBoundaries = 'ShowChunkBoundaries',
    ShowCompass = 'ShowCompass',
    /**
     * @remarks
     * Manages rendering of invisible blocks (e.g., barrier, light,
     * structure_void).
     *
     */
    ShowInvisibleBlocks = 'ShowInvisibleBlocks',
    ShowToastNotifications = 'ShowToastNotifications',
}

/**
 * Supported image types.
 */
export declare enum ImageResourceType {
    Default = 0,
    Block = 1,
    Icon = 2,
    Structure = 3,
}

/**
 * Input modifier flags to create chorded bindings
 */
export enum InputModifier {
    Unused = 0,
    None = 1,
    Alt = 2,
    Control = 4,
    Shift = 8,
    Any = 15,
}

/**
 * Keyboard key
 */
export declare enum KeyboardKey {
    UNDEFINED = 0,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_SPACE
     *
     */
    BACKSPACE = 8,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_TAB
     *
     */
    TAB = 9,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_RETURN
     *
     */
    ENTER = 13,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SHIFT
     *
     */
    SHIFT = 16,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CONTROL
     *
     */
    CTRL = 17,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ALT
     *
     */
    ALT = 18,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CAPS_LOCK
     *
     */
    CAPS_LOCK = 20,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ESCAPE
     *
     */
    ESCAPE = 27,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SPACE
     *
     */
    SPACE = 32,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PAGE_UP
     *
     */
    PAGE_UP = 33,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PAGE_DOWN
     *
     */
    PAGE_DOWN = 34,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_END
     *
     */
    END = 35,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_HOME
     *
     */
    HOME = 36,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_LEFT
     *
     */
    LEFT = 37,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_UP
     *
     */
    UP = 38,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_RIGHT
     *
     */
    RIGHT = 39,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DOWN
     *
     */
    DOWN = 40,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PRINTSCREEN
     *
     */
    PRINT_SCREEN = 44,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_INSERT
     *
     */
    INSERT = 45,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DELETE
     *
     */
    DELETE = 46,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_0
     *
     */
    KEY_0 = 48,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_1
     *
     */
    KEY_1 = 49,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_2
     *
     */
    KEY_2 = 50,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_3
     *
     */
    KEY_3 = 51,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_4
     *
     */
    KEY_4 = 52,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_5
     *
     */
    KEY_5 = 53,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_6
     *
     */
    KEY_6 = 54,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_7
     *
     */
    KEY_7 = 55,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_8
     *
     */
    KEY_8 = 56,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_9
     *
     */
    KEY_9 = 57,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_A
     *
     */
    KEY_A = 65,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_B
     *
     */
    KEY_B = 66,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_C
     *
     */
    KEY_C = 67,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_D
     *
     */
    KEY_D = 68,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_E
     *
     */
    KEY_E = 69,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F
     *
     */
    KEY_F = 70,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_G
     *
     */
    KEY_G = 71,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_H
     *
     */
    KEY_H = 72,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_I
     *
     */
    KEY_I = 73,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_J
     *
     */
    KEY_J = 74,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_K
     *
     */
    KEY_K = 75,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_L
     *
     */
    KEY_L = 76,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_M
     *
     */
    KEY_M = 77,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_N
     *
     */
    KEY_N = 78,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_O
     *
     */
    KEY_O = 79,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_P
     *
     */
    KEY_P = 80,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Q
     *
     */
    KEY_Q = 81,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_R
     *
     */
    KEY_R = 82,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_S
     *
     */
    KEY_S = 83,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_T
     *
     */
    KEY_T = 84,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_U
     *
     */
    KEY_U = 85,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_V
     *
     */
    KEY_V = 86,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_W
     *
     */
    KEY_W = 87,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_X
     *
     */
    KEY_X = 88,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Y
     *
     */
    KEY_Y = 89,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Z
     *
     */
    KEY_Z = 90,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD0
     *
     */
    NUMPAD_0 = 96,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD1
     *
     */
    NUMPAD_1 = 97,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD2
     *
     */
    NUMPAD_2 = 98,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD3
     *
     */
    NUMPAD_3 = 99,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD4
     *
     */
    NUMPAD_4 = 100,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD5
     *
     */
    NUMPAD_5 = 101,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD6
     *
     */
    NUMPAD_6 = 102,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD7
     *
     */
    NUMPAD_7 = 103,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD8
     *
     */
    NUMPAD_8 = 104,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD9
     *
     */
    NUMPAD_9 = 105,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_MULTIPLY
     *
     */
    NUMPAD_MULTIPLY = 106,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ADD
     *
     */
    NUMPAD_ADD = 107,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SEPARATOR
     *
     */
    NUMPAD_SEPARATOR = 108,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SUBTRACT
     *
     */
    NUMPAD_SUBTRACT = 109,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DECIMAL
     *
     */
    NUMPAD_DECIMAL = 110,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DIVIDE
     *
     */
    NUMPAD_DIVIDE = 111,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F1
     *
     */
    F1 = 112,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F2
     *
     */
    F2 = 113,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F3
     *
     */
    F3 = 114,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F4
     *
     */
    F4 = 115,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F5
     *
     */
    F5 = 116,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F6
     *
     */
    F6 = 117,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F7
     *
     */
    F7 = 118,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F8
     *
     */
    F8 = 119,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F9
     *
     */
    F9 = 120,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F10
     *
     */
    F10 = 121,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F11
     *
     */
    F11 = 122,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F12
     *
     */
    F12 = 123,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_COMMA, ie. ','
     *
     */
    COMMA = 188,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PERIOD, ie. '.'
     *
     */
    PERIOD = 190,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SLASH, ie. '/'
     *
     */
    SLASH = 191,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_QUOTE, ie. '`'
     *
     */
    BACK_QUOTE = 192,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_OPEN_BRACKET, ie. '['
     *
     */
    BRACKET_OPEN = 219,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_SLASH, ie. '\'
     *
     */
    BACK_SLASH = 220,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CLOSE_BRACKET, ie. ']'
     *
     */
    BRACKET_CLOSE = 221,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_QUOTE, ie. '"'
     *
     */
    QUOTE = 222,
}

/**
 * Determines how key binding should be processed to fire
 * actions
 */
export declare enum KeyProcessingState {
    /**
     * @remarks
     * Consume key input event and prevent propagation
     *
     */
    Consume = 0,
    /**
     * @remarks
     * Pass key input event to parent context after processing it
     *
     */
    Passthrough = 1,
    /**
     * @remarks
     * Skip key input event processing
     *
     */
    Disabled = 2,
}

/**
 * Alignment options for UI elements
 */
export declare enum LayoutAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
}

/**
 * Layout directions for property panes.
 */
export declare enum LayoutDirection {
    Vertical = 0,
    Horizontal = 1,
}

export declare enum ListPaneEntryType {
    Button = 0,
    Bool = 1,
    Image = 2,
    Text = 3,
}

/**
 * Determines how list pane slots will be sorted
 */
export declare enum ListPaneViewSortType {
    Default = 0,
    AtoZ = 1,
    ZtoA = 2,
}

export enum LogChannel {
    /**
     * @remarks
     * Regular message channel.
     *
     */
    Message = 1,
    /**
     * @remarks
     * Toast channel.
     *
     */
    Toast = 2,
    /**
     * @remarks
     * Regular message and toast channels.
     *
     */
    All = 3,
}

/**
 * Common response types for modal dialog
 */
export declare enum ModalDialogResponseType {
    Confirm = 'confirm',
    Dismiss = 'dismiss',
    Error = 'error',
}

export declare enum ModalDialogType {
    DataPicker = 0,
    Custom = 1,
}

/**
 * Mouse device action categories
 */
export enum MouseActionCategory {
    /**
     * @remarks
     * Mouse button was used.
     *
     */
    Button = 1,
    /**
     * @remarks
     * Mouse wheel was used.
     *
     */
    Wheel = 2,
    /**
     * @remarks
     * Mouse was dragged.
     *
     */
    Drag = 3,
}

/**
 * Detailed mouse device actions
 */
export declare enum MouseActionType {
    LeftButton = 1,
    MiddleButton = 2,
    RightButton = 3,
    Wheel = 4,
}

/**
 * Input event information about mouse actions
 */
export declare enum MouseInputType {
    ButtonDown = 1,
    ButtonUp = 2,
    WheelIn = 3,
    WheelOut = 4,
    DragStart = 5,
    Drag = 6,
    DragEnd = 7,
}

/**
 * The possible variants of a Number property item.
 */
export declare enum NumberPropertyItemVariant {
    InputField = 0,
    InputFieldAndSlider = 1,
}

export enum PaintCompletionState {
    Success = 0,
    Canceled = 1,
    Failed = 2,
}

export enum PaintMode {
    BlockPaint = 0,
    FreehandSelect = 1,
    Smooth = 2,
    Roughen = 3,
    Flatten = 4,
}

export enum Plane {
    None = 0,
    XY = 1,
    XZ = 2,
    YZ = 4,
}

export enum PlaytestSessionResult {
    OK = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound = 2,
    TooManyPlayers = 3,
    WorldExportFailed = 4,
    WorldExportBusy = 5,
    UnsupportedScenario = 6,
    EditorSystemFailure = 7,
    InvalidLevelId = 8,
    PlayerNotFound = 9,
    ResponseTimeout = 10,
    UnspecifiedError = 11,
}

export enum PrimitiveType {
    Text = 0,
    Box = 1,
    Line = 2,
    Disc = 4,
    AxialSphere = 5,
}

/**
 * The possible variants of a ProgressIndicator property item.
 */
export declare enum ProgressIndicatorPropertyItemVariant {
    Spinner = 0,
    ProgressBar = 1,
}

export enum ProjectExportType {
    PlayableWorld = 0,
    ProjectBackup = 1,
    WorldTemplate = 2,
}

/**
 * Type of item that can be added to the property pane
 */
export declare enum PropertyItemType {
    BlockList = 'editorUI:BlockList',
    BlockTable = 'editorUI:BlockTable',
    Boolean = 'editorUI:Boolean',
    Button = 'editorUI:Button',
    ButtonPane = 'editorUI:ButtonPane',
    ColorPicker = 'editorUI:ColorPicker',
    ColorTimeline = 'editorUI:ColorTimeline',
    ComboBox = 'editorUI:ComboBox',
    DataTable = 'editorUI:DataTable',
    Divider = 'editorUI:Divider',
    Dropdown = 'editorUI:Dropdown',
    Image = 'editorUI:Image',
    Link = 'editorUI:Link',
    ListPane = 'editorUI:ListPane',
    Menu = 'editorUI:Menu',
    Number = 'editorUI:Number',
    NumberTimeline = 'editorUI:NumberTimeline',
    ProgressIndicator = 'editorUI:ProgressIndicator',
    ProxyPane = 'editorUI:ProxyPane',
    String = 'editorUI:String',
    SubPane = 'editorUI:SubPane',
    Text = 'editorUI:Text',
    ToggleGroup = 'editorUI:ToggleGroup',
    Vector2 = 'editorUI:Vector2',
    Vector3 = 'editorUI:Vector3',
}

export enum SelectionVolumeEventType {
    Set = 1,
    Add = 2,
    Remove = 3,
    Translate = 4,
    Move = 5,
    Clear = 6,
}

export enum SpeedSettingsProperty {
    FlySpeedMultiplier = 'FlySpeedMultiplier',
}

export enum SplineType {
    Line = 0,
    Hermite = 1,
}

/**
 * Position for items on the status bar
 */
export declare enum StatusBarAlignment {
    Right = 0,
    Left = 1,
}

export enum StructureSource {
    BehaviorPack = 0,
    EditorProject = 1,
    File = 2,
    Level = 3,
}

export enum ThemeSettingsColorKey {
    Caret = 'Caret',
    Confirm1 = 'Confirm1',
    Confirm2 = 'Confirm2',
    Confirm3 = 'Confirm3',
    ConfirmFill = 'ConfirmFill',
    ControlsGeneralFill = 'ControlsGeneralFill',
    ControlsGeneralHighlight = 'ControlsGeneralHighlight',
    Coordinate1 = 'Coordinate1',
    Coordinate2 = 'Coordinate2',
    Coordinate3 = 'Coordinate3',
    CoordinateControlX = 'CoordinateControlX',
    CoordinateControlY = 'CoordinateControlY',
    CoordinateControlZ = 'CoordinateControlZ',
    CursorVolumeBorder = 'CursorVolumeBorder',
    CursorVolumeFill = 'CursorVolumeFill',
    Destroy1 = 'Destroy1',
    Destroy2 = 'Destroy2',
    Destroy3 = 'Destroy3',
    DestroyFill = 'DestroyFill',
    DisableBackground = 'DisableBackground',
    DisableFill = 'DisableFill',
    DisableOutline = 'DisableOutline',
    DisableText = 'DisableText',
    DropDown1 = 'DropDown1',
    DropDown2 = 'DropDown2',
    DropDown3 = 'DropDown3',
    ElementBorder = 'ElementBorder',
    Error = 'Error',
    FocusErrorOutline = 'FocusErrorOutline',
    FocusOutline = 'FocusOutline',
    HeaderBackground = 'HeaderBackground',
    HotbarOutline = 'HotbarOutline',
    Info1 = 'Info1',
    Info2 = 'Info2',
    Info3 = 'Info3',
    InfoFill = 'InfoFill',
    PanelBackground = 'PanelBackground',
    PanelBorder = 'PanelBorder',
    PlacementVolumeBorder = 'PlacementVolumeBorder',
    PlacementVolumeFill = 'PlacementVolumeFill',
    PrefillVolumeBorder = 'PrefillVolumeBorder',
    PrefillVolumeFill = 'PrefillVolumeFill',
    PrimaryActive = 'PrimaryActive',
    PrimaryBackground1 = 'PrimaryBackground1',
    PrimaryBackground2 = 'PrimaryBackground2',
    PrimaryBackground3 = 'PrimaryBackground3',
    PrimaryBackground4 = 'PrimaryBackground4',
    PrimaryDefault = 'PrimaryDefault',
    PrimaryDisable = 'PrimaryDisable',
    PrimaryMute = 'PrimaryMute',
    ScrollBar = 'ScrollBar',
    SecondaryActive = 'SecondaryActive',
    SecondaryBackground1 = 'SecondaryBackground1',
    SecondaryBackground2 = 'SecondaryBackground2',
    SecondaryBackground3 = 'SecondaryBackground3',
    SecondaryDefault = 'SecondaryDefault',
    SecondaryDisable = 'SecondaryDisable',
    SecondaryMute = 'SecondaryMute',
    SelectionVolumeBorder = 'SelectionVolumeBorder',
    SelectionVolumeFill = 'SelectionVolumeFill',
    SelectionVolumeOutlineBorder = 'SelectionVolumeOutlineBorder',
    SelectionVolumeOutlineFill = 'SelectionVolumeOutlineFill',
    TitleBarBackground = 'TitleBarBackground',
    ViewportOutline = 'ViewportOutline',
    Warning = 'Warning',
}

export enum WidgetCollisionType {
    None = 0,
    Radius = 1,
    Bounds = 2,
}

export enum WidgetComponentType {
    BoundingBox = 'BoundingBox',
    Clipboard = 'Clipboard',
    Entity = 'Entity',
    Gizmo = 'Gizmo',
    Grid = 'Grid',
    Guide = 'Guide',
    RenderPrim = 'RenderPrim',
    Spline = 'Spline',
    Text = 'Text',
    VolumeOutline = 'VolumeOutline',
}

export enum WidgetGizmoEventType {
    CornerGrabbed = 'CornerGrabbed',
    CornerMoved = 'CornerMoved',
    CornerReleased = 'CornerReleased',
    OriginActivated = 'OriginActivated',
    OriginDeactivated = 'OriginDeactivated',
    OriginGrabbed = 'OriginGrabbed',
    OriginMoved = 'OriginMoved',
    OriginReleased = 'OriginReleased',
}

export enum WidgetGroupSelectionMode {
    Multiple = 'Multiple',
    None = 'None',
    Single = 'Single',
}

export enum WidgetMouseButtonActionType {
    Pressed = 0,
    Released = 1,
    Drag = 2,
}

export enum WorldGeneratorType {
    Flat = 'Flat',
    Nether = 'Nether',
    Overworld = 'Overworld',
    TheEnd = 'TheEnd',
    Void = 'Void',
}

/**
 * Full set of all possible raw actions
 */
export type Action = NoArgsAction | MouseRayCastAction | StatefulAction | ContinuousAction;

/**
 * All actions have a unique identifier. Identifiers are
 * globally unique and often GUIDs
 */
export type ActionID = {
    id: string;
};

/**
 * Callback type when an extension instance is activated for a
 * given player. It is expected to return an array of
 * disposables that will automatically be cleaned up on
 * shutdown.
 */
export type ActivationFunctionType<PerPlayerStorageType> = (
    uiSession: IPlayerUISession<PerPlayerStorageType>,
) => IDisposable[];

export type AudioSettingsPropertyTypeMap = {
    [AudioSettingsProperty.IsMusicMuted]?: boolean;
    [AudioSettingsProperty.AreSoundsMuted]?: boolean;
};

/**
 * Possible tooltip types
 */
export declare type BasicTooltipContent = LocalizedString | TooltipContent;

/**
 * All possible button item action types
 */
export type ButtonPropertyItemSupportedActionTypes = (() => void) | RegisteredAction<NoArgsAction>;

/**
 * An action that continues to execute after activation
 */
export type ContinuousAction = {
    readonly actionType: ActionTypes.ContinuousAction;
    readonly onExecute: (state: ContinuousActionState, repeatCount: number) => void;
    repeatDelay?: number;
    repeatInterval?: number;
};

/**
 * A generic handler for an event sink.
 */
export declare type EventHandler<T> = (eventArg: T) => void;

/**
 * Defines type information for graphics settings properties.
 */
export type GraphicsSettingsPropertyTypeMap = {
    [GraphicsSettingsProperty.GraphicsMode]?: GraphicsMode;
    [GraphicsSettingsProperty.ShowInvisibleBlocks]?: boolean;
    [GraphicsSettingsProperty.ShowChunkBoundaries]?: boolean;
    [GraphicsSettingsProperty.ShowCompass]?: boolean;
    [GraphicsSettingsProperty.NightVision]?: boolean;
    [GraphicsSettingsProperty.ShowToastNotifications]?: boolean;
    [GraphicsSettingsProperty.DisableEntityRendering]?: boolean;
    [GraphicsSettingsProperty.DisableTerrainRendering]?: boolean;
    [GraphicsSettingsProperty.DisableWeatherRendering]?: boolean;
    [GraphicsSettingsProperty.DisableParticleRendering]?: boolean;
    [GraphicsSettingsProperty.DisableBlockEntityRendering]?: boolean;
};

/**
 * Animation properties for a horizontally laid out sprite
 * sheet image
 */
export declare type ImageAnimationData = {
    frames: number;
    duration?: number;
    delay?: number;
};

export declare type ImageResourceData = {
    path: string;
    type: ImageResourceType;
};

/**
 * Type that can be an observable or a value.
 */
export type IObservableProp<T> = IObservable<T> | T;

/**
 * The IPlayerUISession represents the editor user interface
 * for a given player and given extension. Extensions
 * registered with Minecraft are instantiated for each player
 * which joins a server, and this interface provides the set of
 * functionality needed to create and modify the editor UI for
 * that player. The associated Editor Context for this session
 * object is also player specific. From a given
 * IPlayerUISession object, there is no way to interact with
 * the UI of another player, that must be done from global
 * extension scope registration and/or data sharing independent
 * of the UI object.
 */
export type IPlayerUISession<PerPlayerStorage = Record<string, never>> = {
    createPropertyPane(options: IRootPropertyPaneOptions): IRootPropertyPane;
    readonly actionManager: ActionManager;
    readonly inputManager: IGlobalInputManager;
    readonly menuBar: IMenuContainer;
    readonly actionBar: IActionBar;
    readonly statusBar: IStatusBar;
    readonly dialogManager: IModalDialogManager;
    readonly toolRail: IModalToolContainer;
    readonly log: IPlayerLogger;
    readonly extensionContext: ExtensionContext;
    readonly builtInUIManager: BuiltInUIManager;
    readonly eventSubscriptionCache: BedrockEventSubscriptionCache;
    scratchStorage: PerPlayerStorage | undefined;
};

/**
 * Keyboard binding properties.
 */
export type KeyBinding = {
    key: KeyboardKey;
    modifier?: InputModifier;
};

/**
 * Additional information about key binding.
 */
export type KeyBindingInfo = {
    uniqueId: string;
    label?: string;
    tooltip?: string;
};

/**
 * Layout size definition
 */
export declare type LayoutSize = {
    value: number;
    type?: 'default' | 'percentage';
};

/**
 * List Pane Bool entry creation parameter
 */
export type ListPaneBoolEntryParams = {
    type: ListPaneEntryType.Bool;
    value: IObservableProp<boolean>;
    tooltip?: BasicTooltipContent;
    icon?: string;
    enabled?: boolean;
    visible?: boolean;
    onChange?: (newValue: boolean, oldValue: boolean, entry: IListPaneBoolEntry) => void;
};

/**
 * List Pane Button entry creation parameter
 */
export type ListPaneButtonEntryParams = {
    type: ListPaneEntryType.Button;
    onClick: (entry: IListPaneButtonEntry) => void;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    variant?: ButtonPropertyItemVariant;
    icon?: string;
    enabled?: boolean;
    visible?: boolean;
};

/**
 * List Pane entry type map
 */
export type ListPaneEntryMap = {
    [ListPaneEntryType.Button]: IListPaneEntry;
    [ListPaneEntryType.Bool]: IListPaneBoolEntry;
    [ListPaneEntryType.Image]: IListPaneImageEntry;
    [ListPaneEntryType.Text]: IListPaneTextEntry;
};

/**
 * List Pane entry creation parameters
 */
export type ListPaneEntryParams =
    | ListPaneButtonEntryParams
    | ListPaneBoolEntryParams
    | ListPaneTextEntryParams
    | ListPaneImageEntryParams;

/**
 * List Pane Image entry creation parameter
 */
export type ListPaneImageEntryParams = {
    type: ListPaneEntryType.Image;
    value: IObservableProp<ImageResourceData>;
    visible?: boolean;
};

/**
 * Properties required to create a slot
 */
export type ListPaneSlotCreationProps = {
    entries: ListPaneEntryParams[];
    options?: IListPaneSlotOptions;
};

export declare type ListPaneSlotLayout = {
    height: number;
    columns?: number;
    clickable?: boolean;
    outline?: boolean;
    entryLayout: ListPaneSlotLayoutEntry[];
};

export declare type ListPaneSlotLayoutEntry = {
    type: ListPaneEntryType;
    size?: number | LayoutSize | 'shrink' | 'grow';
    alignment?: LayoutAlignment;
};

/**
 * List Pane Text entry creation parameter
 */
export type ListPaneTextEntryParams = {
    type: ListPaneEntryType.Text;
    value?: IObservableProp<LocalizedString>;
    visible?: boolean;
};

/**
 * Determines filtering properties for list pane
 */
export declare type ListPaneViewFilter = {
    slots?: string[];
    tags?: string[];
};

/**
 * Represents a localized string or an object with a localized
 * string and optional properties
 */
export declare type LocalizedString =
    | string
    | {
          id: string;
          props?: string[];
      };

/**
 * Parameters required to activate a modal dialog instance
 */
export type ModalDialogActivationParams<T extends CoreModalDialogType | string> = {
    dialogId: T;
    onResponse?: (
        payload:
            | (T extends CoreModalDialogType ? ModalDialogCoreResponseType[T] : ModalDialogCustomResponse)
            | ModalDialogDismissResponse,
    ) => void;
} & (T extends CoreModalDialogType
    ? {
          data: ModalDialogRequestData[T];
      }
    : {
          data?: never;
      });

/**
 * Response data for core modal dialogs
 */
export type ModalDialogCoreResponseType = {
    [CoreModalDialogType.DataPicker]: ModalDialogDataPickerResponse;
};

/**
 * Response data for custom modal dialog
 */
export type ModalDialogCustomResponse = {
    type: ModalDialogResponseType | string;
    payload?: unknown;
};

/**
 * Payloads that confirm data picker selection
 */
export type ModalDialogDataPickerResponse = {
    type: ModalDialogResponseType.Confirm;
    selected: string;
};

export type ModalDialogDismissResponse = {
    type: ModalDialogResponseType.Dismiss;
};

/**
 * Data types supported by a modal dialog request
 */
export type ModalDialogRequestData = {
    [CoreModalDialogType.DataPicker]: {
        default: string;
        variant: DataPickerModalDialogVariant;
    };
};

/**
 * Modal tool lifecycle event payload
 */
export type ModalToolLifecycleEventPayload = {
    isActiveTool: boolean;
};

/**
 * Input modifier states for mouse actions
 */
export declare type MouseModifiers = {
    alt: boolean;
    ctrl: boolean;
    shift: boolean;
};

/**
 * Mouse properties that provide additional information from
 * client event handling
 */
export declare type MouseProps = {
    mouseAction: MouseActionType;
    modifiers: MouseModifiers;
    inputType: MouseInputType;
};

/**
 * An action which returns the ray corresponding to a vector
 * from the users mouse click in the viewport.
 */
export type MouseRayCastAction = {
    readonly actionType: ActionTypes.MouseRayCastAction;
    readonly onExecute: (mouseRay: Ray, mouseProps: MouseProps) => void;
};

/**
 * An action which needs no additional client side arguments on
 * execute
 */
export type NoArgsAction = {
    readonly actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};

export type PropertyBag = Record<string, unknown>;

/**
 * Callback to execute when a visibility of a property pane is
 * updated.
 */
export type PropertyPaneVisibilityUpdate = {
    isVisible: boolean;
};

/**
 * Ray representing a direction from a set location. This
 * location typically corresponds to the location of a mouse
 * click performed on the client.
 */
export type Ray = {
    location: Vector3;
    direction: Vector3;
    cursorBlockLocation: Vector3;
    rayHit: boolean;
};

/**
 * A registered action is an action that has been registered
 * with the action manager system and has a unique ID
 * representing the action now. An action must be registered
 * before it can be used in other systems.
 */
export type RegisteredAction<T extends Action> = T & ActionID;

/**
 * Callback type when an extension instance is shutdown for a
 * given player. Used for performing any final work or clean up
 * that can't be handled automatically via Disposables.
 */
export type ShutdownFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => void;

export type SpeedSettingsPropertyTypeMap = {
    [SpeedSettingsProperty.FlySpeedMultiplier]?: number;
};

/**
 * An action which returns the activation state.
 */
export type StatefulAction = {
    readonly actionType: ActionTypes.StatefulAction;
    readonly onExecute: (active: boolean) => void;
};

/**
 * Full set of all possible keyboard actions
 */
export type SupportedKeyboardActionTypes =
    | RegisteredAction<NoArgsAction>
    | RegisteredAction<StatefulAction>
    | RegisteredAction<ContinuousAction>;

/**
 * Full set of all possible mouse actions
 */
export type SupportedMouseActionTypes = RegisteredAction<MouseRayCastAction>;

/**
 * Content properties to display tooltips
 */
export declare type TooltipContent = {
    title?: LocalizedString;
    description?: LocalizedString;
    image?: string;
};

/**
 * Content properties to display interactive tooltips
 */
export declare type TooltipInteractiveContent = {
    title?: LocalizedString;
    description?: TooltipInteractiveContentDescription[];
};

/**
 * Possible tooltip description items
 */
export declare type TooltipInteractiveContentDescription = LocalizedString | TooltipLink;

/**
 * Tooltip link description
 */
export declare type TooltipLink = {
    text: LocalizedString;
    link: string;
};

export type UnregisterInputBindingCallback = () => void;

export class AudioSettings {
    private constructor();
    get<T extends keyof AudioSettingsPropertyTypeMap>(property: T): AudioSettingsPropertyTypeMap[T] | undefined;
    getAll(): AudioSettingsPropertyTypeMap;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    set<T extends keyof AudioSettingsPropertyTypeMap>(property: T, value: AudioSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setAll(properties: AudioSettingsPropertyTypeMap): void;
}

/**
 * A cache for bedrock event subscriptions. Stores off a
 * subscription by event key, and upon teardown unregisters all
 * subscriptions.
 */
export declare class BedrockEventSubscriptionCache {
    /**
     * @remarks
     * Constructs a new instance of the
     * `BedrockEventSubscriptionCache` class
     *
     */
    constructor(mEvents: WorldAfterEvents);
    /**
     * @remarks
     * Subcribes to a bedrock event using the key of the desired
     * event. When subscribed, the event handler is both returned,
     * but also cached internally for unsubscription. This means
     * the caller of the subscription does not need to worry about
     * unsubscription since the cache will automatically
     * unsubscribe handlers on overall teardown.
     *
     * @param event
     * The event on the bedrock APIs to which to subscribe
     * @param params
     * The parameters to the subscription method for the event.
     * Auto complete will display this for you
     */
    subscribeToBedrockEvent<T extends keyof WorldAfterEvents>(
        event: T,
        ...params: Parameters<WorldAfterEvents[T]['subscribe']>
    ): ReturnType<WorldAfterEvents[T]['subscribe']>;
    /**
     * @remarks
     * Cleans up the set of internal registrations and
     * subscriptions.
     *
     */
    teardown(): void;
}

/**
 * Validates observable objects that support string list as
 * BlockType
 */
export declare class BlockIdentifierListObservableValidator implements ObservableValidator<string[]> {
    validate(newValue: string[]): string[];
}

/**
 * Validates observable objects that support string as
 * BlockType
 */
export declare class BlockIdentifierObservableValidator implements ObservableValidator<string> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _defaultValue: string;
    get defaultValue(): string;
    /**
     * @remarks
     * Constructs a new instance of the
     * `BlockIdentifierObservableValidator` class
     *
     */
    constructor(defaultName: string);
    validate(newValue: string): string;
}

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    removeItems(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    /**
     * @throws This function can throw errors.
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    /**
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}

export class BlockPaletteSelectedItemChangeAfterEvent {
    private constructor();
    readonly selectedPaletteItem: IBlockPaletteItem;
}

export class BlockPaletteSelectedItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void,
    ): (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void): void;
}

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: BlockVolumeBase | CompoundBlockVolume | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): CompoundBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionLocationBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMaxLocation(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMinLocation(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): ListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds:
            | BlockBoundingBox
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}

/**
 * Base for creating new brush shapes
 */
export declare abstract class BrushShape {
    get displayName(): string;
    get icon(): string;
    get id(): string;
    /**
     * @remarks
     * Constructs a new instance of the `BrushShape` class
     *
     */
    constructor(_id: string, _displayName: string, _icon: string);
    abstract createSettingsPane(
        parentPane: IPropertyPane,
        onSettingsChange?: () => void,
    ): ISubPanePropertyItem | undefined;
    abstract createShape(): RelativeVolumeListBlockVolume;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    activateBrushTool(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginPainting(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    clearBlockStateOverrides(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    deactivateBrushTool(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    disableItemPlacement(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enableItemPlacement(itemType: ItemType, data?: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getBrushShapeOffset(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getInverseEraseMode(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isBrushPaintBusy(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    pushBlockStateOverride<T extends keyof BlockStateSuperset>(
        blockStateName: T,
        blockStateValue: BlockStateSuperset[T],
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShape(shape: Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShapeOffset(offset: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShapeVisible(visible: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFlattenMode(flattenMode: FlattenMode): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFlattenSmoothing(flattenSmoothing: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFloorBlockOverride(floorBlockOverride: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setInverseEraseMode(inverseEraseMode: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    singlePaint(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    switchBrushPaintMode(paintMode: PaintMode): void;
}

export class ClipboardChangeAfterEvent {
    private constructor();
    readonly isPrimary: boolean;
    readonly itemId: string;
}

export class ClipboardChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): (arg0: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): void;
}

/**
 * A ClipboardItem is a handle to an object which represents a
 * set of blocks in a contained bounding area (most likely
 * copied from the world)
 */
export class ClipboardItem {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * Return whether there is any block content in the item
     *
     */
    readonly isEmpty: boolean;
    readonly normalizedOrigin: Vector3;
    readonly originalWorldLocation: Vector3;
    readonly size: Vector3;
    /**
     * @remarks
     * Clear the contents of the item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPredictedWriteVolume(
        location: Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    readFromWorld(source: BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     *
     * @worldMutation
     *
     * @param location
     * The root point of the world location to which the
     * ClipboardItem is written (this is modified by the various
     * anchor, offset and rotation parameters of the {@link
     * ClipboardWriteOptions}
     * @param options
     * An optional set of write parameters which modify the
     * properties of the ClipboardItem as it is applied to the
     * world
     * @returns
     * Success or Failure
     * @throws This function can throw errors.
     */
    writeToWorld(location: Vector3, options?: ClipboardWriteOptions): boolean;
}

/**
 * The ClipboardManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link ClipboardItem} objects, and provides the user the
 * ability to create new {@link ClipboardItem} objects for use
 * within an extension.
 *
 */
export class ClipboardManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link ClipboardItem} object is always present
     * (even if it's empty) and cannot be deleted.  This object
     * represents the main ClipboardItem object which is always
     * accessible through the UI for cut/paste operations
     *
     * @throws This property can throw when used.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @remarks
     * Create a new  {@link ClipboardItem} object
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class ConeBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `ConeBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class CuboidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `CuboidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        length?: number;
        width?: number;
        height?: number;
        depth?: number;
        minLength?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}

export class CurrentThemeChangeAfterEvent {
    private constructor();
    readonly id: string;
}

export class CurrentThemeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): (arg0: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): void;
}

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: RGBA;
    readonly colorKey: string;
}

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg0: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent) => void): void;
}

/**
 * The 3D block cursor is controlled through this read only
 * object and provides the Editor some control over the input
 * methods, display properties and positioning of the 3D block
 * cursor within the world.
 * The 3D block cursor is a native object which is constantly
 * calculating a screen/mouse -> world raycast, and recording
 * the resultant block collision position and facing direction.
 * Depending on the properties of the cursor state, this is not
 * always true – the cursor can also be manually manipulated by
 * keyboard input and moved around independently of mouse
 * movement; when the mouse is moved, the block cursor will
 * return to the mouse/world ray intersection point.
 * The cursor can also be set to either block or face mode;
 * block mode represents the block the mouse is pointing at,
 * and face mode represents the adjacent block that the mouse
 * is pointing at (i.e. the block attached to the face of the
 * intersection point).
 * In practical use, each tool when activated grabs the current
 * cursor state object and stores it.  The active tool then
 * sets the current state to represent the functionality of the
 * tool (color, input mode, etc).  When the tool loses focus,
 * it restores the cursor state using the stored state object
 * that was grabbed during activation.
 * The 3D block cursor can also be used to query the current
 * block at which the mouse is pointing (or the current block
 * to which the cursor has been manually moved by the user)
 */
export class Cursor {
    private constructor();
    /**
     * @remarks
     * The face at of the block beneath the 3D block cursor which
     * is intersected by the mouse raycast
     *
     * @throws This property can throw when used.
     */
    readonly faceDirection: number;
    /**
     * @remarks
     * Query whether or not the 3D block cursor is visible or
     * hidden
     *
     * @throws This property can throw when used.
     */
    readonly isVisible: boolean;
    /**
     * @remarks
     * Get the world position of the 3D block cursor
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPosition(): Vector3;
    /**
     * @remarks
     * Get a property object which represents the current
     * properties of the 3D block cursor.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getRay(): CursorRay;
    /**
     * @remarks
     * Hide the 3D block cursor from view until the corresponding
     * {@link Cursor.show} function is called
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks
     * Manually offset the 3D block cursor by given amount.
     * Depending on the {@link CursorProperties.controlMode} - this
     * function may have no effect
     *
     * @worldMutation
     *
     * @param offset
     * Amount by which the 3D block cursor should be moved
     * @returns
     * Return the newly modified position (or previous position if
     * movement was restricted)
     * @throws This function can throw errors.
     */
    moveBy(offset: Vector3): Vector3;
    /**
     * @remarks
     * Reset the 3D block cursor to the system default state
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks
     * Set the 3D block cursor properties to a given state
     *
     * @worldMutation
     *
     * @param properties
     * A set of optional parameters within a property state which
     * represent the intended 3D block cursor state
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks
     * Make the 3D block cursor visible on screen
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    show(): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: CursorPropertiesChangeAfterEvent) => void,
    ): (arg0: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class CylinderBrushShape extends BrushShape {
    get depth(): number;
    get height(): number;
    get radius(): number;
    get uniform(): boolean;
    get width(): number;
    /**
     * @remarks
     * Constructs a new instance of the `CylinderBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hideRotation?: boolean;
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}

export class EditorConstants {
    private constructor();
    readonly maxSelectionSize: Vector3;
    readonly maxStructureOffset: Vector3;
    readonly minStructureOffset: Vector3;
}

export class EditorStructure {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly normalizedOrigin: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly offset: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly originalWorldLocation: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidStructureError}
     */
    getTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @param waterlogged
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(
        location: Vector3,
        blockPermutation: BlockPermutation,
        waterlogged?: boolean,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidStructureError}
     */
    setTags(tags: string[]): void;
}

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createEmpty(fullName: string, size: Vector3): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, fullName: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteStructure(id: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getStructure(id: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class EllipsoidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `EllipsoidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}

/**
 * Validates observable objects that support string as
 * EntityType
 */
export declare class EntityIdentifierObservableValidator implements ObservableValidator<string> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _defaultValue: string;
    get defaultValue(): string;
    /**
     * @remarks
     * Constructs a new instance of the
     * `EntityIdentifierObservableValidator` class
     *
     */
    constructor(defaultValue: string);
    validate(newValue: string): string;
}

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getGameVersion(): string;
}

/**
 * Editor Extensions are the basis for all player specific,
 * editor specific functionality within the game.  Almost all
 * editor functionality is exported and available within the
 * context of an {@link ExtensionContext}
 * When the script manager initializes during level loading,
 * the scripts are loaded from the behavior packs and executed.
 * As part of the global execution context, the scripts are
 * free to register any number of extensions.
 * An Editor Extension is defined a name, an activation
 * function and a shutdown function.
 *
 * It is not recommended to directly use this function as the
 * contract is not guaranteed to be stable, instead prefer
 * {@link registerEditorExtension} as it provides additional
 * functionality and a stable contract.
 */
export class Extension {
    private constructor();
    /**
     * @remarks
     * Default identifier for tool rail grouping. All modal tools
     * created from the extension will use this.
     *
     */
    readonly defaultToolGroupId: string;
    /**
     * @remarks
     * Description specified during registration for the extension.
     *
     */
    readonly description: string;
    /**
     * @remarks
     * Name of the extension.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Notes specified during registration for the extension.
     *
     */
    readonly notes: string;
}

/**
 * The extension context is a native (C++) object created for
 * each registered Editor Extension, when a player connection
 * is established with the server.
 * A registered extension activation or deactivation closure is
 * accompanied by an [ExtensionContext] object, which provides
 * a player specific, editor extension specific context.
 * The Extension Context is the main interface to all the bound
 * Editor Services.
 * As more player services are added to the editor, they will
 * be exposed through this object
 */
export class ExtensionContext {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the editor
     * player.  Event callbacks are called in a deferred manner.
     * Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly blockUtilities: BlockUtilities;
    readonly brushShapeManager: BrushShapeManager;
    /**
     * @remarks
     * This is used to access the players Clipboard Manager and the
     * main interface through which the player can create, modify
     * and apply clipboard items
     *
     */
    readonly clipboardManager: ClipboardManager;
    /**
     * @remarks
     * This is used to access the players 3D block cursor and it's
     * properties
     *
     */
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    /**
     * @remarks
     * Contains information about the registered extension
     * instance.
     *
     */
    readonly extensionInfo: Extension;
    /**
     * @remarks
     * The current player which is the subject of the extension
     * invocation
     *
     */
    readonly player: Player;
    readonly playtest: PlaytestManager;
    /**
     * @remarks
     * The instance of the players Selection Manager and the main
     * interface through which the player can create/modify
     * selections
     *
     */
    readonly selectionManager: SelectionManager;
    /**
     * @remarks
     * The instance of the players Settings Manager and the
     * contract through which the settings for the player can be
     * modified.
     *
     */
    readonly settings: SettingsManager;
    readonly structureManager: EditorStructureManager;
    /**
     * @remarks
     * The instance of the players Transaction Manager and the main
     * interface through which the creator can create transaction
     * records, and undo/redo previous transactions
     *
     */
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly blockPaletteSelectedItemChange: BlockPaletteSelectedItemChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     * @earlyExecution
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly SelectionChange: SelectionChangeAfterEventSignal;
}

/**
 * Settings category that manages {@link
 * GraphicsSettingsProperty} configurations.
 */
export class GraphicsSettings {
    private constructor();
    /**
     * @remarks
     * Retrieves a graphics settings property value.
     *
     * @param property
     * Property identifier.
     * @returns
     * Returns the property value if it is found. If the property
     * is not available, it returns undefined.
     */
    get<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T): GraphicsSettingsPropertyTypeMap[T] | undefined;
    /**
     * @remarks
     * Retrieves all graphics settings properties and their values.
     *
     * @returns
     * Returns a property value map for all available properties.
     */
    getAll(): GraphicsSettingsPropertyTypeMap;
    /**
     * @remarks
     * Modifies a graphics settings property value.
     *
     * @worldMutation
     *
     * @param property
     * Property identifier.
     * @param value
     * New property value.
     * @throws This function can throw errors.
     */
    set<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T, value: GraphicsSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * Modify multiple graphics settings properties.
     *
     * @worldMutation
     *
     * @param properties
     * Property map to set available property values. If the
     * property is not defined in the map, it will not be modified.
     * @throws This function can throw errors.
     */
    setAll(properties: GraphicsSettingsPropertyTypeMap): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBlock(block: BlockPermutation | BlockType | string): void;
}

/**
 * The logger class is a utility class which allows editor
 * extensions to communicate with the player from the server to
 * the client log window.
 * The logger class presents 4 different output channels which
 * can be used to send information to the client/player,
 * depending on the context of the information.
 */
export class Logger {
    private constructor();
    /**
     * @remarks
     * A `debug` output channel generally used during the
     * development process of editor extensions.  This channel
     * defaults to `hidden` in the log window (unless explicitly
     * enabled).
     * Once your editor extension development process is complete,
     * and you're ready to ship/share your extension - we generally
     * recommend that you remove any references to this log channel
     * to avoid a noisy experience for other users
     *
     * @worldMutation
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    debug(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The error channel is generally used when the editor
     * extension experiences an error (either a program error in
     * executing logic unexpectedly, or an error in the input or
     * output to/from a player).  Use this channel sparingly - it's
     * meant to communicate important problems to the player
     *
     * @worldMutation
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    error(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The info channel is intended to communicate general,
     * non-fatal or non-erroneous information to the player that
     * can generally be safely ignored if they choose to do so.
     *
     * @worldMutation
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    info(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The warning channel is intended to inform the user of
     * "potential" issues (missing inputs, values out of range,
     * things that cannot be found) but are not fatal and execution
     * can still be completed.
     *
     * @worldMutation
     *
     * @param message
     * The message string to send to the log window
     * @throws This function can throw errors.
     */
    warning(message: string, properties?: LogProperties): void;
}

/**
 * The MinecraftEditor class is a namespace container for
 * Editor functionality which does not have any player context.
 */
export class MinecraftEditor {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly afterEvents: ProjectAfterEvents;
    readonly constants: EditorConstants;
    /**
     * @remarks
     * A global instance of the log output class object.  This is
     * not contextualized to any particular player, and any
     * messages sent to this instance will be broadcast to all
     * connected editor client sessions
     *
     * @throws This property can throw when used.
     */
    readonly log: Logger;
    /**
     * @remarks
     * Allows querying and modifying some properties of the
     * simulation.
     *
     */
    readonly simulation: SimulationState;
    readonly worldGeneratorType?: WorldGeneratorType;
}

/**
 * Contains information related to changes in player editor
 * mode.
 */
export class ModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The editor mode that the player is changed to.
     *
     */
    readonly mode: EditorMode;
}

/**
 * Manages callbacks that are connected to when a player editor
 * mode changes.
 */
export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to an editor mode change
     * after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ModeChangeAfterEvent) => void): (arg0: ModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from an editor mode change
     * after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ModeChangeAfterEvent) => void): void;
}

/**
 * Validates min/max limits of observable objects that support
 * number
 */
export declare class NumberLimitObservableValidator implements ObservableValidator<number> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _max?: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _min?: number;
    /**
     * @remarks
     * Constructs a new instance of the
     * `NumberLimitObservableValidator` class
     *
     */
    constructor(min: number | undefined, max: number | undefined, isInteger?: boolean);
    updateLimits(min: number | undefined, max: number | undefined): void;
    validate(newValue: number): number;
}

/**
 * Used for validating an observable value before it gets set
 */
export declare abstract class ObservableValidator<T> {
    abstract validate(newValue: T): T | undefined;
}

export class PlaytestManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addBlock(block: BlockPermutation | BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeBlockAt(index: number): void;
}

export class ProjectAfterEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly simulationStateChange: SimulationStateChangeAfterEventSignal;
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class PyramidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `PyramidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        width?: number;
        height?: number;
        depth?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class RelativeVolumeListBlockVolume extends BlockVolumeBase {
    readonly isEmpty: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    origin?: Vector3;
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /**
     * @remarks
     * @worldMutation
     *
     */
    add(
        toAdd:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    clear(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getVolumeList(): BlockVolume[];
    hasAdjacent(location: Vector3, normalizedOffset: Vector3): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    moveTo(location: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    remove(
        toRemove:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    set(
        toSet:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    translate(offset: Vector3): void;
}

export class SelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: SelectionEventAfterEvent) => void): (arg0: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SelectionEventAfterEvent) => void): void;
}

export class SelectionContainerBase {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SelectionContainerEntity extends SelectionContainerBase {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SelectionContainerVolume extends SelectionContainerBase {
    private constructor();
    readonly isEmpty: boolean;
    readonly volumeCount: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    add(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    clear(): void;
    get(): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    moveTo(location: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    remove(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    set(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    translate(offset: Vector3): void;
}

export class SelectionContainerVolumeEvent {
    private constructor();
    readonly 'type': SelectionVolumeEventType;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly volumeEventData?: SelectionContainerVolumeEvent;
}

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link @minecraft/server-editor.Selection} objects, and
 * provides the user the ability to create new {@link
 * @minecraft/server-editor.Selection} objects for use within
 * an extension.
 */
export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
}

/**
 * The SettingsManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management all
 * player settings.
 */
export class SettingsManager {
    private constructor();
    readonly audio: AudioSettings;
    /**
     * @remarks
     * Manages graphics settings properties.
     *
     */
    readonly graphics: GraphicsSettings;
    readonly speed: SpeedSettings;
    readonly theme: ThemeSettings;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

/**
 * Responsible for querying and modifying various properties of
 * the simulation.
 */
export class SimulationState {
    private constructor();
    /**
     * @remarks
     * Returns `true` if mob simulation is paused.
     *
     */
    isPaused(): boolean;
    /**
     * @remarks
     * Sets the state of mob simulation.  If set to `true`, mobs
     * are paused.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

export class SimulationStateAfterEvent {
    private constructor();
    readonly paused: boolean;
}

export class SimulationStateChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: SimulationStateAfterEvent) => void): (arg0: SimulationStateAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SimulationStateAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export declare class SingleBlockBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `SingleBlockBrushShape`
     * class
     *
     */
    constructor();
    createSettingsPane(): undefined;
    createShape(): RelativeVolumeListBlockVolume;
}

export class SpeedSettings {
    private constructor();
    get<T extends keyof SpeedSettingsPropertyTypeMap>(property: T): SpeedSettingsPropertyTypeMap[T] | undefined;
    getAll(): SpeedSettingsPropertyTypeMap;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    set<T extends keyof SpeedSettingsPropertyTypeMap>(property: T, value: SpeedSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setAll(properties: SpeedSettingsPropertyTypeMap): void;
}

export class ThemeSettings {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, RGBA> | undefined;
    getThemeIdList(): string[];
    /**
     * @throws This function can throw errors.
     */
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setThemeName(id: string, name: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: RGBA): void;
}

/**
 * The Transaction Manager is responsible for tracking and
 * managing all of the registered transaction operations which
 * represent creator changes in the world.
 * Transaction Manager is the basis of the UNDO and REDO
 * operations, and allows a creator to store the changes made
 * to the world and the state of the world BEFORE those changes
 * were applied, making it possible to UNDO those changes and
 * restore the world state.
 * The transactions are stored as a stack, and can be undone in
 * stack order to restore the world to it's original state
 */
export class TransactionManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * Commit all of the transaction operations currently attached
     * to the open transaction record to the manager.  These will
     * be added as a single transaction manager entry.
     * The open record will be closed and all tracking operations
     * will cease.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks
     * This function will commit the pending changes caused by any
     * of the track changes variants.  The changes will be
     * committed to the currently open transaction, but the
     * transaction will remain open for further records.
     * Pending block changes from tracking operations will be added
     * to the transaction record before submission to the
     * transaction manager
     *
     * @worldMutation
     *
     * @returns
     * Returns the number of change requests that were being
     * tracked
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg0: string) => void,
        redoClosure: (arg0: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks
     * Discard the currently open transaction without committing it
     * to the transaction manager stack.
     * All records within the transaction will be discarded, and
     * any tracking requests currently active will be stopped
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks
     * Discard any pending tracked changes.  This does not affect
     * the current open transaction contents, only the pending
     * tracked block operations
     *
     * @worldMutation
     *
     * @returns
     * Returns the number of change requests that were discarded
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    isBusy(): boolean;
    /**
     * @remarks
     * Open a transaction record which will be a container for any
     * number of transaction operations.
     * All transaction operations within a record are grouped and
     * treated as a single atomic unit
     *
     * @worldMutation
     *
     * @param name
     * Give the transaction record a name
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks
     * Perform an redo operation.  This will take the last
     * transaction record on the redo stack and store the current
     * world state and then apply the changes in the record.  This
     * will reduce the redo record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the undo stack in case the creator decides to
     * undo it
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks
     * Return the number of transaction records on the redo stack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @remarks
     * Begin tracking block changes in a specified area.  These
     * will be added to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     *
     * @worldMutation
     *
     * @param from
     * Min block location of a bounding area
     * @param to
     * Max block location of a bounding area
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: Vector3, to: Vector3): boolean;
    /**
     * @remarks
     * Begin tracking block changes in a list of specified block
     * locations.
     *
     * @worldMutation
     *
     * @param locations
     * An array of block locations to monitor for changes
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: Vector3[]): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: BlockVolumeBase): boolean;
    /**
     * @remarks
     * Perform an undo operation.  This will take the last
     * transaction record on the stack and apply the stored world
     * state from before the changes were made.  This will reduce
     * the record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the redo stack in case the creator decides to
     * reapply it
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks
     * Return how many transactions records currently exist on the
     * stack
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    undoSize(): number;
}

/**
 * A strongly typed transaction handle to enforce type safety
 * when adding user defined transactions.<br> This transaction
 * handle becomes the context for adding the transaction to the
 * transaction manager.<br> You can obtain one of these handles
 * by calling {@link registerUserDefinedTransactionHandler}
 */
export declare class UserDefinedTransactionHandle<T> {
    /**
     * @remarks
     * Constructs a new instance of the
     * `UserDefinedTransactionHandle` class
     *
     */
    constructor(nativeHandle: UserDefinedTransactionHandlerId, transactionManager: TransactionManager);
    /**
     * @remarks
     * Add a user defined transaction operation to the transaction
     * manager with a payload of the specified type. This allows
     * the extension to open a transaction, and insert custom data
     * objects into the transaction log which are stored until an
     * undo or redo event occurs. The payload data added here is
     * stored and then passed to the undo/redo handlers (registered
     * with {@link registerUserDefinedTransactionHandler}) when an
     * undo/redo event is requested. NOTE:<br> Transactions can
     * contain multiple operations - you can open a transaction and
     * add any (reasonable) number of operations to it (of the same
     * or differing types) before committing to the transaction
     * log. NOTE/WARNING:<br> The payload data is serialized to
     * JSON before being inserted into the transaction log and the
     * underlying implementation uses the JSON.stringify() function
     * to serialize the data. Any non-primitive data, such as
     * classes or minecraft native objects will not serialize to
     * JSON properly, so you should avoid using them as payload
     * data.
     *
     * @param payload
     * The data object to be inserted into the transaction log.
     * @param transactionName
     * A string name that will be associated with this operation
     */
    addUserDefinedOperation(payload: T, transactionName: string): void;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

/**
 * Validates min/max limits of observable objects that support
 * Vector2
 */
export declare class Vector2LimitObservableValidator implements ObservableValidator<Vector2> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _max: Partial<Vector2>;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _min: Partial<Vector2>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector2LimitObservableValidator` class
     *
     */
    constructor(min: Partial<Vector2>, max: Partial<Vector2>, isInteger?: boolean);
    updateLimits(min: Partial<Vector2>, max: Partial<Vector2>): void;
    validate(newValue: Vector2): Vector2;
}

/**
 * Validates min/max limits of observable objects that support
 * Vector3
 */
export declare class Vector3LimitObservableValidator implements ObservableValidator<Vector3> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _max: Partial<Vector3>;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _min: Partial<Vector3>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector3LimitObservableValidator` class
     *
     */
    constructor(min: Partial<Vector3>, max: Partial<Vector3>, isInteger?: boolean);
    updateLimits(min: Partial<Vector3>, max: Partial<Vector3>): void;
    validate(newValue: Vector3): Vector3;
}

export class Widget {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    bindPositionToBlockCursor: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionOffset: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionRadius: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionType: WidgetCollisionType;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly group: WidgetGroup;
    /**
     * @remarks
     * @worldMutation
     *
     */
    location: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lockPositionToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly selectable: boolean;
    selected: boolean;
    showBoundingBox: boolean;
    showCollisionRadius: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    snapToBlockLocation: boolean;
    visible: boolean;
    readonly widgetName: string;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addBoundingBox(
        componentName: string,
        size: Vector3,
        options?: WidgetComponentBoundingBoxOptions,
    ): WidgetComponentBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addVolumeOutline(
        componentName: string,
        volume?: BlockVolumeBase | RelativeVolumeListBlockVolume,
        options?: WidgetComponentVolumeOutlineOptions,
    ): WidgetComponentVolumeOutline;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    delete(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData) => void): void;
}

export class WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lockToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks
     * @worldMutation
     *
     */
    offset: Vector3;
    readonly valid: boolean;
    visible: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    delete(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    boundsOffset: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enableResizeHandles: Axis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    hullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mirror: StructureMirrorAxis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOrigin: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation: StructureRotation;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showWorldIntersections: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    size: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: BlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visibleHull: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}

export class WidgetComponentBoundingBoxStateChangeEventParameters {
    private constructor();
    readonly boundsOffset?: Vector3;
    readonly boundsSize?: Vector3;
    readonly component: WidgetComponentBoundingBox;
    readonly eventType: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentClipboard extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    clipboardOffset: Vector3;
    highlightHullColor: RGBA;
    highlightOutlineColor: RGBA;
    hullColor: RGBA;
    mirror: StructureMirrorAxis;
    normalizedOrigin: Vector3;
    outlineColor: RGBA;
    rotation: StructureRotation;
    showOutline: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    clickable: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
    activated: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enabledAxes: Axis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOffsetOverride?: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}

export class WidgetComponentGizmoStateChangeEventParameters {
    private constructor();
    readonly component: WidgetComponentGizmo;
    readonly eventType?: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentGrid extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridCount: Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridSize: Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    plane: Plane;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(
        primitive:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine,
    ): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    center: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    color?: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radius: number;
    constructor(center: Vector3, radius: number, color?: RGBA);
}

export class WidgetComponentRenderPrimitiveTypeBase {
    private constructor();
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks
     * @worldMutation
     *
     */
    renderPriority: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    center: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    size?: Vector3;
    constructor(center: Vector3, color: RGBA, size?: Vector3);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    center: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radius: number;
    constructor(center: Vector3, radius: number, color: RGBA);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    end: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    start: Vector3;
    constructor(start: Vector3, end: Vector3, color: RGBA);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    splineType: SplineType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getControlPoints(): Widget[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): Vector3[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setControlPoints(widgetList: Widget[]): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    label: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightHullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightOutlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    hullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mirror: StructureMirrorAxis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOrigin: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation: StructureRotation;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showHighlightOutline: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showOutline: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: BlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    volumeOffset: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setVolume(
        volumeToSet?:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
}

export class WidgetGroup {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visible: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visibleBounds: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createWidget(location: Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks
     * @worldMutation
     *
     */
    delete(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}

export class WidgetManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetMouseButtonEventData {
    private constructor();
    readonly action: WidgetMouseButtonActionType;
    readonly altPressed: boolean;
    readonly controlPressed: boolean;
    readonly shiftPressed: boolean;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: Vector3;
    readonly mouseEvent?: WidgetMouseButtonEventData;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}

/**
 * Binds actions to the client and manages their lifetime.
 * Action managers are managed on a per player basis since
 * client side UI is per player.
 */
export interface ActionManager {
    /**
     * @remarks
     * Creates an action and registers it on the client
     *
     * @param rawAction
     * The raw action to create. See ActionTypes for supported
     * parameters
     */
    createAction<T extends Action>(rawAction: T): RegisteredAction<T>;
}

export interface BlockMaskList {
    blockList: (BlockPermutation | BlockType | string)[];
    maskType: BlockMaskListType;
}

/**
 * Represents a UI session for a given player
 */
export interface BuiltInUIManager {
    /**
     * @remarks
     * Activates tutorial overlay
     *
     */
    activateTutorial(): void;
    /**
     * @remarks
     * Navigates to the documentation site.
     *
     */
    navigateToDocumentation(): void;
    /**
     * @remarks
     * Navigates to the feedback site
     *
     */
    navigateToFeedback(): void;
    /**
     * @remarks
     * Navigates to the pause screen
     *
     */
    navigateToPauseScreen(): void;
    /**
     * @remarks
     * Navigates to the github-samples site
     *
     */
    navigateToSamples(): void;
    /**
     * @remarks
     * Saves levels & exits back to Editor main menu.
     *
     */
    saveAndExit(): void;
    /**
     * @remarks
     * Updates the visibility of the log panel
     *
     */
    updateLogPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the control demo
     *
     */
    updateUISettingsPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the welcome panel
     *
     */
    updateWelcomePanelVisibility(visibility: boolean): void;
}

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     *
     */
    offset?: Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     *
     */
    rotation?: StructureRotation;
}

export interface ContiguousSelectionProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    fullSelectionToleranceLevel?: number;
    isFace?: boolean;
    selectionDirection?: number;
    size?: number;
    startingLocation?: Vector3;
}

export interface CursorPosition {
    FaceDirection: number;
    Position: Vector3;
}

/**
 * The CursorProperties interface is used to describe the
 * properties of the Editor 3D block cursor construct.
 * The 3D block cursor can be queried to retrieve the current
 * properties, and the same property class can be used to set
 * the current properties of the cursor.
 * This interface is generally used at the activation stage of
 * the active tool to set up the color, visibility and input
 * properties of the 3D block cursor
 */
export interface CursorProperties {
    /**
     * @remarks
     * Enum representing the cursor control mode
     * - Fixed Mode locks the cursor to a position which is <X>
     * blocks offset from the current player position. The cursor
     * is camera relative, so it will always appear <X> blocks
     * ahead of the players feet
     * - Keyboard Mode puts the cursor under direct control of the
     * API, and ignores any mouse input.  The cursor can only be
     * moved around using the moveBy method
     * - KeyboardAndMouse mode puts the cursor under a shared
     * control of onMouseMove and keyboard input.  Any mouse
     * movement events will set the cursor to the position of the
     * mouse/world raycast.  This can be modified using the moveBy
     * method, but any subsequent mouse events will reset the
     * position back to where the raycast intersection occurs
     * - Mouse mode puts the cursor under control of mouse move
     * events, and moveBy method will be ignored
     *
     *
     */
    controlMode?: CursorControlMode;
    fillColor?: RGBA;
    /**
     * @remarks
     * The fixed distance from the players feet at which the cursor
     * is attached, relative to camera direction.
     * This is only used when [controlMode] is set to `Fixed`
     *
     */
    fixedModeDistance?: number;
    /**
     * @remarks
     * A [Color] Property representing the color of the block
     * cursor object outline
     *
     */
    outlineColor?: RGBA;
    projectThroughLiquid?: boolean;
    /**
     * @remarks
     * An enum representing the cursor target mode
     * - Block Mode records the block position of the mouse/world
     * raycast intersection
     * - Face Mode records the block position of the block adjacent
     * to the mouse/world raycast intersection, according to the
     * face of the collision point of the selected block
     *
     */
    targetMode?: CursorTargetMode;
    /**
     * @remarks
     * Boolean flag controlling the visibility of the 3D block
     * cursor
     *
     */
    visible?: boolean;
}

export interface CursorRay {
    end: Vector3;
    hit: boolean;
    start: Vector3;
}

export interface EditorStructureSearchOptions {
    displayName?: string;
    id?: string;
    sources?: StructureSource[];
    structureName?: string;
    structureNamespace?: string;
    tags?: string[];
}

/**
 *  An event that can be subscribed to. You can use the token,
 * returned from the subscribe method, to clean up handlers.
 */
export declare interface EventSink<T> {
    /**
     * @remarks
     * Subscribes an event handler to a particular subscription.
     *
     * @param handler
     * Handler function to subscribe with.
     * @returns
     * An event handler subscription token that can be used to
     * unsubscribe and clean-up handlers.
     */
    subscribe(handler: EventHandler<T>): IEventToken;
}

/**
 * An interface which defines the set of optional parameters
 * which can be used when calling the `registerEditorExtension`
 * function
 */
export interface ExtensionOptionalParameters {
    /**
     * @remarks
     * An optional text description of the extension being
     * registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The description is meant to be a very short snappy one-liner
     * which quickly and uniquely identifies the extension
     * The length of the string is capped to 256 characters
     *
     */
    description?: string;
    /**
     * @remarks
     * Optional notes for the extension being registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The notes section is meant to convey more detailed
     * information and notes (e.g. a link to the author's website)
     * The length of this string is capped to 1024 characters
     *
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom identifier that will be used for all
     * Modal Tools created from the registered extension.
     * The length of the string is capped to 256 characters
     *
     */
    toolGroupId?: string;
}

export interface GameOptions {
    bedsWork?: boolean;
    bonusChest?: boolean;
    cheats?: boolean;
    commandBlockEnabled?: boolean;
    commandBlockOutput?: boolean;
    daylightCycle?: DaylightCycle;
    difficulty?: Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    drowningDamage?: boolean;
    educationEdition?: boolean;
    entitiesDropLoot?: boolean;
    exportType?: ProjectExportType;
    fallDamage?: boolean;
    fireDamage?: boolean;
    fireSpreads?: boolean;
    freezeDamage?: boolean;
    friendlyFire?: boolean;
    functionCommandLimit?: number;
    gameMode?: GameMode;
    hardcore?: boolean;
    immediateRespawn?: boolean;
    insomnia?: boolean;
    keepInventory?: boolean;
    lanVisibility?: boolean;
    limitedCrafting?: boolean;
    locatorBar?: boolean;
    maxCommandChainLength?: number;
    mobGriefing?: boolean;
    mobLoot?: boolean;
    mobSpawning?: boolean;
    multiplayerGame?: boolean;
    naturalRegeneration?: boolean;
    playerAccess?: GamePublishSetting;
    playerPermissions?: PlayerPermissionLevel;
    randomTickSpeed?: number;
    recipeUnlocking?: boolean;
    respawnBlocksExplode?: boolean;
    respawnRadius?: number;
    sendCommandFeedback?: boolean;
    showBorderEffect?: boolean;
    showCoordinates?: boolean;
    showDaysPlayed?: boolean;
    showDeathMessage?: boolean;
    showItemTags?: boolean;
    simulationDistance?: number;
    sleepSkipPercent?: number;
    spawnPosition?: Vector3;
    startingMap?: boolean;
    tileDrops?: boolean;
    timeOfDay?: number;
    tntExplodes?: boolean;
    weather?: number;
    worldName?: string;
}

/**
 * Manager for IActionBarItem objects.
 */
export interface IActionBar {
    /**
     * @remarks
     * Add a new action bar item to the collection.
     *
     * @param id
     * Unique item identifier.
     * @param action
     * Action to be invoked.
     * @param props
     * Configuration for the item to create.
     */
    registerItem(
        id: string,
        action: RegisteredAction<NoArgsAction>,
        props: IActionBarItemCreationParams,
    ): IActionBarItem;
    /**
     * @remarks
     * Remove an action item from the collection.
     *
     * @param id
     * Unique item identifier.
     */
    unregisterItem(id: string): void;
}

/**
 * Registered item handle in the Action Bar collection.
 */
export interface IActionBarItem {
    /**
     * @remarks
     * Returns the current enabled state of the item.
     *
     */
    getEnabled: () => boolean;
    /**
     * @remarks
     * Unique identifier of the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Text label of the item.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * Modify enabled state of the item.
     *
     */
    setEnabled: (enabled: boolean) => void;
}

/**
 * Properties required to create an Action Bar item.
 */
export interface IActionBarItemCreationParams {
    /**
     * @remarks
     * Initial enabled state of the item. If not defined, default
     * is true.
     *
     */
    enabled?: boolean;
    /**
     * @remarks
     * Sets whether the Action Bar Item's execute is run when it is
     * added to the Action Bar. If not defined, default is false.
     *
     */
    executeOnAdd?: boolean;
    /**
     * @remarks
     * Icon resource for the item.
     *
     */
    icon: string;
    /**
     * @remarks
     * Animation data for sprite sheet icon image
     *
     */
    iconAnimation?: ImageAnimationData;
    /**
     * @remarks
     * Text label for item.
     *
     */
    label: string;
    /**
     * @remarks
     * Tooltip description for the item.
     *
     */
    tooltipDescription?: string;
    /**
     * @remarks
     * Tooltip title for the item.
     *
     */
    tooltipTitle?: string;
}

/**
 * A property item which supports block list properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockListPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: ReadonlyArray<string>;
}

/**
 * Optional properties for Bool property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockListPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: ReadonlyArray<string>, oldValue: ReadonlyArray<string>) => void;
}

/**
 * Block Table Entry info for block table property item
 */
export interface IBlockTableEntryInfo {
    /**
     * @remarks
     * The quantity number of the same block in the selection.
     *
     */
    count?: number;
}

/**
 * A property item which supports Block Table properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockTablePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Create new or update an existing entry in the block table
     *
     * @param block
     * a new entry in the block table.
     * @param blockInfo
     * block info for the entry in the block table.
     */
    addOrUpdateEntry(block: string | BlockType, blockInfo: IBlockTableEntryInfo): void;
    /**
     * @remarks
     * Delete entry in the block table, by block name
     *
     * @param block
     * an entry in the block table.
     */
    deleteEntry(block: string): void;
    /**
     * @remarks
     * Read entry from the block table, by block name
     *
     * @param block
     * an entry in the block table.
     */
    getEntry(block: string | BlockType): IBlockTableEntryInfo | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Update the block table entries
     *
     * @param entries
     * The new value for the block table.
     */
    updateEntries(entries: Map<string, IBlockTableEntryInfo>): void;
}

/**
 * Properties of block table item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockTablePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Map of block entries in the block table.
     *
     */
    entries?: Map<string, IBlockTableEntryInfo>;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control operation is
     * selected from the UI.
     *
     */
    onOperationClick?: (block: string, operation: BlockTableOperationType) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: LocalizedString;
}

/**
 * A property item which supports boolean properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: boolean;
    /**
     * @remarks
     * Sets title of the property item.
     *
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Sets tooltip description of the property item.
     *
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}

/**
 * Optional properties for Bool property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Changes checkbox variant to use a custom icon
     *
     */
    checkboxIcon?: string;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: boolean, oldValue: boolean) => void;
    /**
     * @remarks
     * Localized title of the text item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to Checkbox.
     *
     */
    variant?: BoolPropertyItemVariant;
}

/**
 * A property item pane which supports multiple buttons
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPanePropertyItem extends IPropertyItemBase, IPane {
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button interaction.
     *
     */
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
}

/**
 * Optional properties for Button Pane property item
 */
export interface IButtonPanePropertyItemOptions {
    /**
     * @remarks
     * Minimum width for each item within the layout. If undefined,
     * it will default to 6.
     *
     */
    itemMinWidth?: number;
}

/**
 * A property item which supports Button properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Replace action assigned to the button.
     *
     * @param action
     * New action to replace the existing with.
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Updates icon of the button.
     *
     * @param icon
     * New button icon.
     */
    setIcon(icon: string | undefined): void;
    /**
     * @remarks
     * Updates title of the button.
     *
     * @param title
     * New button title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     *
     * @param tooltip
     * New button tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}

/**
 * Optional properties for Button property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Icon image of the property item.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * The variant for the button. By default it is Primary.
     *
     */
    variant?: ButtonPropertyItemVariant;
}

/**
 * A property item which supports Color Picker properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorPickerPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: RGBA;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}

/**
 * Optional properties for Color Picker property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorPickerPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true alpha control will be hidden. If undefined, it will
     * default to false.
     *
     */
    hiddenAlpha?: boolean;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: RGBA, oldValue: RGBA) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: LocalizedString;
    /**
     * @remarks
     * The variant for the button. By default it is Primary.
     *
     */
    variant?: ColorPickerPropertyItemVariant;
}

/**
 * A property item which supports Color Timeline properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorTimelinePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update color timeline entry
     *
     * @param data
     * New color node.
     */
    addNode(data: IColorTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Get the list of nodes in the property item.
     *
     */
    getData(): IColorTimelinePropertyItemEntry[];
    /**
     * @remarks
     * Get time current time value on the slider.
     *
     */
    getTime(): number;
    /**
     * @remarks
     * Remove color node
     *
     * @param data
     * Node to be removed.
     */
    removeNode(data: IColorTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Set custom decimal precision for the calculations
     *
     */
    setPrecision(precision: number): void;
    /**
     * @remarks
     * Set time line slider value to a new value
     *
     * @param time
     * The new time value.
     */
    setTime(time: number): void;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Update node value
     *
     * @param data
     * Node to be updated.
     */
    updateNode(data: IColorTimelinePropertyItemEntry): void;
}

/**
 * Properties of color timeline property item entry
 */
export interface IColorTimelinePropertyItemEntry {
    id: string;
    time: number;
    value: RGBA;
}

/**
 * Optional properties for Color Timeline property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorTimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Custom precision for the calculations
     *
     */
    decimalPrecision?: number;
    /**
     * @remarks
     * If true, nodes cannot be added or removed
     *
     */
    disableAddRemoveNodes?: boolean;
    /**
     * @remarks
     * List of nodes entries in the color timeline.
     *
     */
    entries?: IColorTimelinePropertyItemEntry[];
    /**
     * @remarks
     * True means nodes cannot be dragged or modified
     *
     */
    isGraphReadOnly?: boolean;
    /**
     * @remarks
     * Callback triggered when a new RGBA node is added to the
     * timeline.
     *
     */
    onNodeAdded?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a timeline node's RGBA value
     * changes.
     *
     */
    onNodeChanged?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when an RGBA node is removed from the
     * timeline. *
     *
     */
    onNodeRemoved?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * This callback is called when UI control time is changed.
     *
     */
    onTimeChanged?: (current: number, prev: number) => void;
    /**
     * @remarks
     * Flag that enables gradient background color on the timeline
     * to be rendered, default is true
     *
     */
    renderGradientBackground?: boolean;
    /**
     * @remarks
     * False means the alpha elements will not be shown in the
     * color picker
     *
     */
    showAlpha?: boolean;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
}

/**
 * A property item which supports Combo Box properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IComboBoxPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: string;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}

/**
 * Properties of toggle group property item list entry
 */
export interface IComboBoxPropertyItemEntry {
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label?: LocalizedString;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: string;
}

/**
 * Optional properties for ComboBox property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IComboBoxPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Possible data types supported by combo box. If undefined, it
     * will be Custom by default.
     *
     */
    dataType?: ComboBoxPropertyItemDataType;
    /**
     * @remarks
     * Default value to fall back to if entry is not found. If
     * undefined, data type will determine the default value (empty
     * string for Custom data type).
     *
     */
    defaultValue?: string;
    /**
     * @remarks
     * List of combo box entries. If undefined, data type will
     * determine the default list (empty list for Custom data
     * type).
     *
     */
    entries?: IComboBoxPropertyItemEntry[];
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: string, oldValue: string) => void;
    /**
     * @remarks
     * If true the image for the selected value will be displayed
     * (if data type supports it). If undefined, it will default to
     * false.
     *
     */
    showImage?: boolean;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A property item which supports data entries displayed in a
 * table
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDataTablePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update table entries
     *
     * @param data
     * New data entries.
     */
    updateEntries(data: IDataTablePropertyItemEntry[][]): void;
    /**
     * @remarks
     * Update table cell entry
     *
     * @param data
     * New data entry.
     * @param row
     * Cell row index.
     * @param column
     * Cell column index.
     */
    updateEntry(data: IDataTablePropertyItemEntry, row: number, column: number): void;
    /**
     * @remarks
     * Update table row entries
     *
     * @param data
     * New data entries.
     * @param row
     * Cell row index.
     */
    updateRow(data: IDataTablePropertyItemEntry[], row: number): void;
}

/**
 * Properties of data table property item menu entry
 */
export interface IDataTablePropertyItemEntry {
    image?: ImageResourceData;
    text?: LocalizedString;
}

/**
 * Properties of data table item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDataTablePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of default data table entries
     *
     */
    entries?: IDataTablePropertyItemEntry[][];
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
}

/**
 * Simple abstraction for disposable objects.
 */
export interface IDisposable {
    /**
     * @remarks
     * Initiates the teardown and cleanup of this disposable item.
     *
     */
    teardown(): void;
}

/**
 * A property item which supports Dropdown properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDropdownPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current selected entry value of the property item list.
     *
     */
    readonly value: number;
    /**
     * @remarks
     * Find a dropdown entry at an index in the dropdown list.
     *
     * @param index
     * Index of the dropdown entry in the list.
     */
    getEntryByIndex(index: number): IDropdownPropertyItemEntry | undefined;
    /**
     * @remarks
     * Find a dropdown entry with a specific value associated with
     * property item.
     *
     * @param value
     * Value of the dropdown entry in the list.
     */
    getEntryByValue(value: number): IDropdownPropertyItemEntry | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Update list of dropdown entries.
     *
     * @param entries
     * New list of updated entries.
     * @param newValue
     * New value value to use for the dropdown.
     */
    updateEntries(entries: IDropdownPropertyItemEntry[], newValue?: number): void;
}

/**
 * Properties of dropdown property item menu entry
 */
export interface IDropdownPropertyItemEntry {
    /**
     * @remarks
     * Optional image of the dropdown entry.
     *
     */
    readonly imageData?: ImageResourceData;
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: number;
}

/**
 * Optional properties for Dropdown property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDropdownPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of dropdown entries associated with the property item.
     * If undefined, list will be empty.
     *
     */
    entries?: IDropdownPropertyItemEntry[];
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number, items: IDropdownPropertyItemEntry[]) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * Returned from an event subscription. Provides functionality
 * for cleaning up listeners
 */
export declare interface IEventToken {
    /**
     * @remarks
     * Removes registered listener from an event
     *
     */
    unsubscribe(): void;
}

export interface IGlobalInputManager {
    /**
     * @remarks
     * Register a key press binding for an action which will be
     * handled by the specified input context.
     *
     * @param inputContextId
     * Id of the UI context to handle this binding.
     * @param action
     * Action to register the binding for.
     * @param binding
     * Keyboard binding to invoke action.
     * @param info
     * Additional information about key binding.
     */
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): IRegisteredKeyBinding;
}

/**
 * A property item which supports Image properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IImagePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Height of the image.
     *
     */
    readonly imageHeight: number;
    /**
     * @remarks
     * Width of the image.
     *
     */
    readonly imageWidth: number;
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string | ImageResourceData>;
    /**
     * @remarks
     * Updates the size of the image.
     *
     * @param width
     * New width of the image.
     * @param height
     * New height of the image.
     */
    resizeImage(width: number, height: number): void;
}

/**
 * Optional properties for Image property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IImagePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Alignment of the image in the container. If not defined,
     * LayoutAlignment.Left is used.
     *
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Size of the image. If undefined, defaults to 10.
     *
     */
    imageSize?:
        | number
        | {
              width: number;
              height: number;
          };
    /**
     * @remarks
     * Called when image is clicked.
     *
     */
    onClick?: (x: number, y: number) => void;
}

/**
 * A property item which supports Link properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ILinkPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string>;
    /**
     * @remarks
     * Sets title of the property item.
     *
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Sets tooltip description of the property item.
     *
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}

/**
 * Optional properties for Link property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ILinkPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Hides the link icon. If undefined, it will default to false.
     *
     */
    hideIcon?: boolean;
    /**
     * @remarks
     * Localized title of the text item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: LocalizedString;
}

/**
 * List Pane button entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneBoolEntry extends IListPaneEntry {
    /**
     * @remarks
     * Enabled state of the entry.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: boolean;
    /**
     * @remarks
     * Updates enabled state of the entry.
     *
     * @param enabled
     * New enabled state.
     */
    setEnabled(enabled: true): void;
    /**
     * @remarks
     * Updates tooltip of the entry.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent): void;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: boolean): void;
}

/**
 * List Pane button entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneButtonEntry extends IListPaneEntry {
    /**
     * @remarks
     * Enabled state of the entry.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * Updates enabled state of the entry.
     *
     * @param enabled
     * New enabled state.
     */
    setEnabled(enabled: true): void;
    /**
     * @remarks
     * Updates icon of the entry.
     *
     * @param icon
     * New icon.
     */
    setIcon(icon: string): void;
    /**
     * @remarks
     * Updates title of the entry.
     *
     * @param title
     * New title.
     */
    setTitle(title: string): void;
    /**
     * @remarks
     * Updates tooltip of the entry.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent): void;
}

/**
 * List Pane entry
 */
export interface IListPaneEntry {
    /**
     * @remarks
     * Sequence index of the entry.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Slot that owns the entry.
     *
     */
    readonly slot: IListPaneSlot;
    /**
     * @remarks
     * Type of the entry.
     *
     */
    readonly type: ListPaneEntryType;
    /**
     * @remarks
     * Visibility state of the entry.
     *
     */
    readonly visible: boolean;
    /**
     * @remarks
     * Updates visibility of the entry.
     *
     * @param visible
     * New value.
     */
    setVisible(visible: boolean): void;
}

/**
 * List Pane image entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneImageEntry extends IListPaneEntry {
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: Readonly<ImageResourceData>;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: ImageResourceData): void;
}

/**
 * A property item which supports Sub Pane properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItem extends IPropertyItemBase, IPane {
    /**
     * @remarks
     * Count of the slots managed by the list.
     *
     */
    readonly slotCount: number;
    /**
     * @remarks
     * Current sorting type for the pane slots
     *
     */
    readonly viewSortType: ListPaneViewSortType;
    /**
     * @remarks
     * Adds a new slot to the list.
     *
     */
    addSlot(params: ListPaneSlotCreationProps): IListPaneSlot;
    /**
     * @remarks
     * Finds the slot with the identifier.
     *
     * @param id
     * Unique identifier of the slot.
     */
    getSlotById(id: string): IListPaneSlot | undefined;
    /**
     * @remarks
     * Finds the slot with the index.
     *
     * @param index
     * Index of the slot in the component list.
     */
    getSlotByIndex(index: number): IListPaneSlot | undefined;
    /**
     * @remarks
     * @returns
     * Active view filter
     */
    getViewFilter(): ListPaneViewFilter | undefined;
    /**
     * @remarks
     * Removes the slot from the list.
     *
     * @param id
     * Unique identifier of the slot.
     */
    removeSlot(id: string): void;
    /**
     * @remarks
     * Selects slot by id.
     *
     * @param id
     * Unique identifier of the slot.
     * @param deselectOtherSlots
     * Deselects already selected slots if defined.
     */
    selectSlot(id: string, deselectOtherSlots?: boolean): void;
    /**
     * @remarks
     * Filters displaying slots to match the define properties
     *
     * @param filter
     * Slots that don't match filter properties won't be included.
     */
    setViewFilter(filter: ListPaneViewFilter | undefined): void;
    /**
     * @remarks
     * Updates how slots will be sorted in the view
     *
     * @param sortType
     * New sort type, it undefined Default will be used.
     */
    setViewSortType(sortType: ListPaneViewSortType | undefined): void;
    /**
     * @remarks
     * Updates all slots with the new list.
     *
     * @param newSlots
     * Creation properties for the new slots.
     */
    updateSlots(newSlots: ListPaneSlotCreationProps[]): void;
}

/**
 * Optional properties for List Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * This will be the height of the list withing the pane
     *
     */
    defaultSlots?: ListPaneSlotCreationProps[];
    /**
     * @remarks
     * This will be the height of the list withing the pane
     *
     */
    height?: number;
    /**
     * @remarks
     * Layout for the list will need to be predefined, and using
     * wrong layout shape while creating slots will throw
     *
     */
    layout: ListPaneSlotLayout;
    /**
     * @remarks
     * This callback is fired whenever a clickable slot is pressed
     *
     */
    onSlotClicked?: (slot: IListPaneSlot) => void;
    /**
     * @remarks
     * This callback is fired whenever selected state of a slot is
     * changed
     *
     */
    onSlotSelectionChange?: (slot: IListPaneSlot, state: boolean) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Filter properties for viewing subset of slots.
     *
     */
    viewFilter?: ListPaneViewFilter;
    /**
     * @remarks
     * Sort type for the slots in the view. If undefined, default
     * list order will be used.
     *
     */
    viewSortType?: ListPaneViewSortType;
}

/**
 * List Pane slot
 */
export interface IListPaneSlot {
    /**
     * @remarks
     * Count of entries.
     *
     */
    readonly entryCount: number;
    /**
     * @remarks
     * Unique identifier of the slot.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Unique identifier of the parent pane.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * Selected state of the slot.
     *
     */
    readonly selected: boolean;
    /**
     * @remarks
     * List of tags associated with the slot.
     *
     */
    readonly tags: ReadonlyArray<string>;
    /**
     * @remarks
     * Count of entries.
     *
     */
    readonly title: LocalizedString;
    /**
     * @remarks
     * Finds the entry with the index if it exists.
     *
     * @param index
     * Sequence index of the entry in the slot.
     * @param type
     * Optional type check for the entry.
     */
    getEntry<K extends ListPaneEntryType | undefined = undefined>(
        index: number,
        type?: K,
    ): (K extends ListPaneEntryType ? ListPaneEntryMap[K] : IListPaneEntry) | undefined;
    /**
     * @remarks
     * @returns
     * User data associated with the slot.
     */
    getUserData(): unknown;
    /**
     * @remarks
     * Updates selected state of the slot.
     *
     * @param selected
     * New selected state.
     */
    setSelected(selected: boolean): void;
    /**
     * @remarks
     * Updates tags of the slot.
     *
     * @param tags
     * New tag list.
     */
    setTags(tags: string[] | undefined): void;
    /**
     * @remarks
     * Updates title of the slot.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Updates user data associated with the slot
     *
     * @param data
     * New user data.
     */
    setUserData(data: unknown): void;
}

/**
 * List Pane slot optional properties
 */
export interface IListPaneSlotOptions {
    /**
     * @remarks
     * List of tags associated with the slot.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * Localized title of the slot.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Unique identifier to use for the slot.
     *
     */
    uniqueId?: string;
    /**
     * @remarks
     * Optional user data that can be associated with a slot.
     *
     */
    userData?: unknown;
}

/**
 * List Pane text entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneTextEntry extends IListPaneEntry {
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: Readonly<LocalizedString>;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: LocalizedString): void;
}

export interface IMenu {
    /**
     * @remarks
     * If defined, the menu will show a checked or unchecked
     * checkbox.
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * The menu will be in either an enabled or disabled state
     *
     */
    enabled: boolean;
    /**
     * @remarks
     * Unique ID for the menu
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Sub menus of this menu
     *
     */
    readonly submenu: IMenu[];
    /**
     * @remarks
     * Create a child menu on this menu.
     *
     * @param params
     * The menu creation parameters for the sub item being added
     * @param action
     * The action to associate with the menu item. Only a subset of
     * actions are supported
     */
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    /**
     * @remarks
     * Destroy the menu and all of its children.
     *
     */
    dispose(): void;
    /**
     * @remarks
     * Hide the menu and all of its children.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Replaces the current associated menu action with a new
     * action
     *
     * @param action
     * The registered action to associated with this menu item
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Show the menu and all of its children.
     *
     */
    show(): void;
}

/**
 * Manager and container for IMenu objects
 */
export interface IMenuContainer {
    /**
     * @remarks
     * Create a top level item in the container.
     *
     * @param props
     * Configuration for the menu to create
     */
    createMenu(props: IMenuCreationParams): IMenu;
    /**
     * @remarks
     * Search for a menu item, if it's not found defer it to next
     * tick.
     *
     * @param id
     * Menu identifier
     */
    getMenu(id: string): Promise<IMenu>;
}

/**
 * Properties required to create a Menu
 */
export interface IMenuCreationParams {
    /**
     * @remarks
     * Whether the menu should show a checkmark
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * Whether the menu should be enabled or disabled
     *
     */
    enabled?: boolean;
    /**
     * @remarks
     * Whether the menu should have an icon.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Localized display text of the menu
     *
     */
    label: string;
    /**
     * @remarks
     * Whether the menu should have a tooltip.
     *
     */
    tooltip?: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     *
     */
    uniqueId?: string;
}

/**
 * A property item which supports Menu properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMenuPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Adds a new menu item entry to property item
     *
     * @param props
     * Menu creation parameters
     * @param action
     * Optional action to trigger on menu click
     */
    addEntry(props: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    /**
     * @remarks
     * @returns
     * All first level menu entries
     */
    getEntries(): IMenu[];
    /**
     * @remarks
     * Find the menu item recursively if it exists
     *
     * @param menuId
     * Identifier of the menu.
     */
    getMenu(menuId: string): IMenu | undefined;
    /**
     * @remarks
     * Removed the menu item entry if the id is found
     *
     * @param menuId
     * Menu id to remove
     */
    removeEntry(menuId: string): void;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}

/**
 * Optional properties for Menu property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMenuPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Called when a menu item is clicked.
     *
     */
    onMenuItemClick?: (menuId: string) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A sub pane for modal control elements.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IModalControlPane extends IPane {
    /**
     * @remarks
     * Adds a togglable boolean item to the pane.
     *
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button activation.
     *
     */
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds a pane for grouped button layout.
     *
     */
    addButtonPane(options?: IButtonPanePropertyItemOptions): IButtonPanePropertyItem;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItemBase;
}

export interface IModalDialog {
    /**
     * @remarks
     * Identifier for the active request for this dialog
     *
     */
    readonly activeRequestId: string | undefined;
    /**
     * @remarks
     * Custom pane layout for the dialog
     *
     */
    readonly contentPane: IPropertyPane;
    /**
     * @remarks
     * Custom pane layout for the dialog
     *
     */
    readonly controlPane: IModalControlPane;
    /**
     * @remarks
     * Unique identifier for the dialog
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Dispatches a dismiss message to the active request if it is
     * available
     *
     */
    sendDismiss(): void;
    /**
     * @remarks
     * Dispatches a response message to the active request if it is
     * available
     *
     * @param response
     * Response message to be handled by the active request
     */
    sendResponse(response: ModalDialogCustomResponse): void;
}

/**
 * Represents modal dialog state for the specific activation
 * request
 */
export interface IModalDialogActivationRequest {
    /**
     * @remarks
     * Unique identifier for the request
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Determines if the request is still active
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Cancels the request if it's still active
     *
     */
    cancel(): void;
}

export interface IModalDialogManager {
    /**
     * @remarks
     * Creates a modal activation request for an existing modal
     * template
     *
     * @param params
     * Activation parameters
     */
    activateDialog<T extends CoreModalDialogType | string>(
        params: ModalDialogActivationParams<T>,
    ): IModalDialogActivationRequest;
    /**
     * @remarks
     * Removes the active modal from view
     *
     */
    dismissActiveDialog(): void;
    /**
     * @remarks
     * Creates a custom modal dialog with a property pane
     *
     * @param params
     * Creation parameters
     */
    registerDialog(params: ModalDialogCreationParams): IModalDialog;
}

/**
 * A modal overlay pane is displayed over a root pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IModalOverlayPane extends IPane {
    /**
     * @remarks
     * A sub pane that represents content of the modal overlay.
     *
     */
    contentPane: ISubPanePropertyItem;
    /**
     * @remarks
     * A pane that represent modal control elements.
     *
     */
    controlPane: IModalControlPane;
}

/**
 * The options to create a modal overlay pane.
 */
export interface IModalOverlayPaneOptions {
    /**
     * @remarks
     * Localized title of the modal overlay.
     *
     */
    title?: LocalizedString;
}

export interface IModalTool {
    /**
     * @remarks
     * Unique identifier for the tool
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     *
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    /**
     * @remarks
     * Binds a property pane to the tool. When the tool is
     * selected, the pane's visibility updates. Only one pane can
     * be bound at a time.
     *
     * @param pane
     * Root pane associated with the modal tool
     */
    bindPropertyPane(pane: IRootPropertyPane): void;
    /**
     * @remarks
     * Register a key press binding for an action which will be
     * handled by the tool input context.
     *
     * @param action
     * Action to register the binding for.
     * @param binding
     * Keyboard binding to invoke action.
     * @param info
     * Additional information about key binding.
     */
    registerKeyBinding(
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): IRegisteredKeyBinding;
    /**
     * @remarks
     * Register an action to be called when mouse left/middle/right
     * buttons are pressed or released.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Register an action to be called when mouse is dragged while
     * left mouse button is down.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Register an action to be called when mouse wheel is
     * scrolled.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Unregister all input binding for this tool.
     *
     */
    unregisterInputBindings(): void;
}

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    /**
     * @remarks
     * Create a new tool in the modal tool container represented
     * via button on the tool rail.
     *
     * @param id
     * Unique identifier for the tool
     * @param params
     * Construction parameters for the new tool
     */
    addTool(id: string, params: ModalToolCreationParameters): IModalTool;
    /**
     * @remarks
     * Activates input bindings for the selected tool by enabling
     * viewport focus
     *
     */
    focusToolInputContext(): void;
    /**
     * @remarks
     * Returns identifier of the selected tool.
     *
     */
    getSelectedToolId(): string | undefined;
    /**
     * @remarks
     * Remove an existing tool by id from the tool container
     *
     * @param id
     * Name of the tool to remove.
     */
    removeTool(id: string): void;
    /**
     * @remarks
     * Selects a tool in the container.
     *
     * @param id
     * Identifier of the tool
     */
    setSelectedToolId(id: string | undefined): void;
}

/**
 * A property item which supports Number properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<number>;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Updates number limits and clamps the current value.
     *
     */
    updateLimits(limits: { min?: number; max?: number }): void;
}

/**
 * Optional properties for Number property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * If we should treat the number as integer. By default is
     * false.
     *
     */
    isInteger?: boolean;
    /**
     * @remarks
     * The min possible number. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     *
     */
    max?: number;
    /**
     * @remarks
     * The min possible number. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: number;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to InputField.
     *
     */
    variant?: NumberPropertyItemVariant;
}

/**
 * A property item which supports Number Timeline properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberTimelinePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update color timeline entry
     *
     * @param data
     * New color node.
     */
    addNode(data: INumberTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Get the list of nodes in the property item.
     *
     */
    getData(): INumberTimelinePropertyItemEntry[];
    /**
     * @remarks
     * Get time current time value on the slider.
     *
     */
    getTime(): number;
    /**
     * @remarks
     * Remove color node
     *
     * @param data
     * Node to be removed.
     */
    removeNode(data: INumberTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Updates data entries value bounds.
     *
     */
    setBounds(bounds: { minValue: number; maxValue: number }): void;
    /**
     * @remarks
     * Set separator slice counts for x and y for the minor grid.
     *
     * @param counts
     * Counts for the thin grid lines.
     */
    setSeparatorSliceCount(counts: Vector2): void;
    /**
     * @remarks
     * Set separator step counts for x and y for the major grid.
     *
     * @param counts
     * Counts for the thick grid lines.
     */
    setSeparatorStepCount(counts: Vector2): void;
    /**
     * @remarks
     * Set time line slider value to a new value
     *
     * @param time
     * The new time value.
     */
    setTime(time: number): void;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Update node value
     *
     * @param data
     * Node to be updated.
     */
    updateNode(data: INumberTimelinePropertyItemEntry): void;
}

/**
 * Properties of the Number timeline property item entry
 */
export interface INumberTimelinePropertyItemEntry {
    color?: RGBA;
    id: string;
    time: number;
    value: number;
}

/**
 * Optional properties for Number Timeline property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberTimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * The data bounds for the value node property
     *
     */
    bounds?: {
        minValue: number;
        maxValue: number;
    };
    /**
     * @remarks
     * Custom precision for the calculations
     *
     */
    decimalPrecision?: number;
    /**
     * @remarks
     * If true, nodes cannot be added or removed
     *
     */
    disableAddRemoveNodes?: boolean;
    /**
     * @remarks
     * List of nodes entries in the color timeline.
     *
     */
    entries?: INumberTimelinePropertyItemEntry[];
    /**
     * @remarks
     * The separator slice count for the graph thin lines
     *
     */
    gridSeparatorSliceCount?: Vector2;
    /**
     * @remarks
     * The separator step counts for the graph bold lines
     *
     */
    gridSeparatorStepCount?: Vector2;
    /**
     * @remarks
     * True means nodes cannot be dragged or modified
     *
     */
    isGraphReadOnly?: boolean;
    /**
     * @remarks
     * Callback triggered when a new number node is added to the
     * timeline.
     *
     */
    onNodeAdded?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a timeline node's number value
     * changes.
     *
     */
    onNodeChanged?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when an number node is removed from the
     * timeline. *
     *
     */
    onNodeRemoved?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * This callback is called when UI control time is changed.
     *
     */
    onTimeChanged?: (current: number, prev: number) => void;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
}

/**
 * Represents a stateful value that can be observed by
 * different objects.
 */
export interface IObservable<T> {
    /**
     * @remarks
     * Optional validator that will pre-process the new value.
     *
     */
    readonly validator?: ObservableValidator<T>;
    /**
     * @remarks
     * Current value of the observable.
     *
     */
    readonly value: Readonly<T>;
    /**
     * @remarks
     * Updates the value and notifies dependent objects.
     *
     * @param newValue
     * New value to be set (will be processed by the validator if
     * it exists).
     */
    set(newValue: T): boolean;
}

/**
 * Pane represents a container for UI components.
 */
export interface IPane {
    /**
     * @remarks
     * Unique identifier for the pane.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Check visibility of the pane
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Show the pane and all of its items.
     *
     */
    show(): void;
}

/**
 * Log helper interface for Player.
 */
export interface IPlayerLogger {
    /**
     * @remarks
     * Dispatch a player log message with Debug log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    debug(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    error(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    info(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    warning(message: string, props?: IPlayerLoggerProperties): void;
}

/**
 * Player Logger Properties.
 */
export interface IPlayerLoggerProperties {
    /**
     * @remarks
     * A log channel mask, default is Message
     *
     */
    channelMask?: LogChannel;
    /**
     * @remarks
     * A player log sub message for the toast channel
     *
     */
    subMessage?: string;
}

/**
 * A property item which supports ProgressIndicator properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IProgressIndicatorPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current progress of the property item.
     *
     */
    readonly progress: Readonly<number> | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}

/**
 * Optional properties for progress indicator property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IProgressIndicatorPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Normalized loading progress (0 to 1).
     *
     */
    progress?: IObservableProp<number>;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: LocalizedString;
    /**
     * @remarks
     * Determines how we display progress indicator. If undefined,
     * it will default to Spinner.
     *
     */
    variant?: ProgressIndicatorPropertyItemVariant;
}

/**
 * Common base for all property items
 */
export interface IPropertyItemBase {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable: boolean;
    /**
     * @remarks
     * Unique ID for the property item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The parent pane id.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * The type name of the target property.
     *
     */
    readonly typeName: PropertyItemType;
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible: boolean;
}

/**
 * Common optional properties for property items
 */
export interface IPropertyItemOptionsBase {
    /**
     * @remarks
     * Initial enabled state of property item. If undefined, it
     * will default to true.
     *
     */
    enable?: boolean;
    /**
     * @remarks
     * Initial visibility state of property item. If undefined, it
     * will default to true.
     *
     */
    visible?: boolean;
}

/**
 * Property pane present dynamic content. It can be associated
 * with an object and presented with different kind of
 * controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyPane extends IPane {
    /**
     * @remarks
     * Pane state for being expanded or collapsed.
     *
     */
    readonly collapsed: boolean;
    /**
     * @remarks
     * Provides visibility change events
     *
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    /**
     * @remarks
     * Adds a block list to the pane.
     *
     */
    addBlockList(value: IObservableProp<string[]>, options?: IBlockListPropertyItemOptions): IBlockListPropertyItem;
    /**
     * @remarks
     * Adds a block table to the pane.
     *
     */
    addBlockTable(options?: IBlockTablePropertyItemOptions): IBlockTablePropertyItem;
    /**
     * @remarks
     * Adds a togglable boolean item to the pane.
     *
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button interaction.
     *
     */
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds a pane for grouped button layout.
     *
     */
    addButtonPane(options?: IButtonPanePropertyItemOptions): IButtonPanePropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker(
        value: IObservableProp<RGBA>,
        options?: IColorPickerPropertyItemOptions,
    ): IColorPickerPropertyItem;
    /**
     * @remarks
     * Adds a Color Timeline item to the pane.
     *
     */
    addColorTimeline(
        value: IObservableProp<number>,
        options?: IColorTimelinePropertyItemOptions,
    ): IColorTimelinePropertyItem;
    /**
     * @remarks
     * Adds a combo box item to the pane.
     *
     */
    addComboBox(value: IObservableProp<string>, options?: IComboBoxPropertyItemOptions): IComboBoxPropertyItem;
    /**
     * @remarks
     * Adds a data table to the pane.
     *
     */
    addDataTable(options?: IDataTablePropertyItemOptions): IDataTablePropertyItem;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItemBase;
    /**
     * @remarks
     * Adds an Dropdown item to the pane.
     *
     */
    addDropdown(value: IObservableProp<number>, options?: IDropdownPropertyItemOptions): IDropdownPropertyItem;
    /**
     * @remarks
     * Adds an image item to the pane.
     *
     */
    addImage(
        value: IObservableProp<string | ImageResourceData>,
        options?: IImagePropertyItemOptions,
    ): IImagePropertyItem;
    /**
     * @remarks
     * Adds a Link item to the pane.
     *
     */
    addLink(value: IObservableProp<string>, options?: ILinkPropertyItemOptions): ILinkPropertyItem;
    /**
     * @remarks
     * Adds a pane for displaying list of items in a predefined
     * layout.
     *
     */
    addListPane(options: IListPanePropertyItemOptions): IListPanePropertyItem;
    /**
     * @remarks
     * Adds a menu button property item to the pane.
     *
     */
    addMenu(
        defaultEntries: {
            params: IMenuCreationParams;
            action?: RegisteredAction<NoArgsAction>;
        }[],
        options?: IMenuPropertyItemOptions,
    ): IMenuPropertyItem;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber(value: IObservableProp<number>, options?: INumberPropertyItemOptions): INumberPropertyItem;
    /**
     * @remarks
     * Adds a Number Timeline item to the pane.
     *
     */
    addNumberTimeline(
        value: IObservableProp<number>,
        options?: INumberTimelinePropertyItemOptions,
    ): INumberTimelinePropertyItem;
    /**
     * @remarks
     * Adds a Progress Indicator item to the pane.
     *
     */
    addProgressIndicator(options?: IProgressIndicatorPropertyItemOptions): IProgressIndicatorPropertyItem;
    /**
     * @remarks
     * Adds a proxy view of another supported pane
     *
     */
    addProxyPane(paneId: string): void;
    /**
     * @remarks
     * Adds an editable string item to the pane
     *
     */
    addString(value: IObservableProp<string>, options?: IStringPropertyItemOptions): IStringPropertyItem;
    /**
     * @remarks
     * Adds a multiline Text item to the pane.
     *
     */
    addText(value: IObservableProp<LocalizedString>, options?: ITextPropertyItemOptions): ITextPropertyItem;
    /**
     * @remarks
     * Adds a toggle button group to the pane.
     *
     */
    addToggleGroup(value: IObservableProp<number>, options?: IToggleGroupPropertyItemOptions): IToggleGroupPropertyItem;
    /**
     * @remarks
     * Adds a Vector2 item to the pane.
     *
     */
    addVector2(
        value: IObservableProp<Vector2>,
        options?: IVector2PropertyItemOptions,
    ): IVector2PropertyItem;
    /**
     * @remarks
     * Adds a Vector3 item to the pane.
     *
     */
    addVector3(
        value: IObservableProp<Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;
    /**
     * @remarks
     * Begins pane construction for batching property item
     * additions
     *
     */
    beginConstruct(): void;
    /**
     * @remarks
     * Collapse the pane.
     *
     */
    collapse(): void;
    /**
     * @remarks
     * Creates an sub pane that can store property items.
     *
     */
    createSubPane(options: ISubPanePropertyItemOptions): ISubPanePropertyItem;
    /**
     * @remarks
     * Finalizes pane construction and synchronizes item data
     *
     */
    endConstruct(): void;
    /**
     * @remarks
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Returns pane title.
     *
     */
    getTitle(): LocalizedString | undefined;
    /**
     * @remarks
     * Removes an existing sub pane.
     *
     */
    removeSubPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Updates title of pane.
     *
     * @param newTitle
     * New title
     */
    setTitle(newTitle: LocalizedString | undefined): void;
    /**
     * @remarks
     * Shows only the specified sub-pane, hiding all others
     *
     * @param subPaneId
     * Identifier of the sub pane to display.
     */
    toggleSubPaneVisibility(subPaneId: string | undefined): void;
}

/**
 * Common optional properties used for constructing a property
 * pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Optional information tooltip for the pane to be displayed on
     * the header.
     *
     */
    infoTooltip?: TooltipInteractiveContent;
    /**
     * @remarks
     * Localized title of the property pane
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Unique identifier for the pane
     *
     */
    uniqueId?: string;
}

/**
 * Key binding that is registered to an input context
 */
export interface IRegisteredKeyBinding {
    /**
     * @remarks
     * Unique identifier for the binding.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Returns current processing state of the binding.
     *
     */
    getProcessingState(): KeyProcessingState;
    /**
     * @remarks
     * Updates how the key input will be processed for this
     * binding. If undefined, it will be consumed.
     *
     * @param newState
     * New binding processing state.
     */
    setProcessingState(newState: KeyProcessingState | undefined): void;
}

/**
 * Optional parameter definition for RegisterEditorExtension
 * function Allows the extension registrar to specify optional
 * textual description and notes which would be visible through
 * the extension manager
 */
export interface IRegisterExtensionOptionalParameters {
    /**
     * @remarks
     * Description of the extension.
     *
     */
    description?: string;
    /**
     * @remarks
     * Additional notes and description of the extension.
     *
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom group identifier that will be used for
     * all Modal Tools created from the registered extension.
     *
     */
    toolGroupId?: string;
}

/**
 * A root pane that can store property items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IRootPropertyPane extends IPropertyPane {
    /**
     * @remarks
     * Register a modal overlay to the root pane. It will be hidden
     * by default, when shown it will display over the root pane
     * content. Only one modal overlay can be shown at a time.
     *
     * @param options
     * Creation parameters for modal overlay pane.
     */
    createModalOverlayPane(options?: IModalOverlayPaneOptions): IModalOverlayPane;
    /**
     * @remarks
     * @returns
     * Unique identifier of the active modal overlay
     */
    getActiveModalOverlayId(): string | undefined;
    /**
     * @remarks
     * @returns
     * Current visibility state of header action
     */
    isHeaderActionVisible(): boolean;
    /**
     * @remarks
     * Sets registered modal overlay as active, if not found it
     * will hide the current.
     *
     * @param id
     * Unique id for modal overlay pane.
     */
    setActiveModalOverlay(id: string | undefined): void;
    /**
     * @remarks
     * If a header action exists, updates visibility of the button.
     *
     * @param visible
     * New visibility state of the action button.
     */
    setHeaderActionVisibility(visible: boolean): void;
}

/**
 * Represents the data to display an action button on a root
 * property pane header.
 */
export interface IRootPropertyPaneHeaderAction {
    action?: () => void;
    icon: string;
    tooltip?: LocalizedString;
}

/**
 * The options to create a root pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IRootPropertyPaneOptions extends IPropertyPaneOptions {
    /**
     * @remarks
     * Optional action button to be displayed on the header.
     *
     */
    headerAction?: IRootPropertyPaneHeaderAction;
}

/**
 * Manager and container for IStatusBarItem objects
 */
export interface IStatusBar {
    /**
     * @remarks
     * Create a item in status bar
     *
     * @param props
     * Properties to create status bar item
     */
    createItem(props: IStatusBarItemCreationParams): IStatusBarItem;
    /**
     * @remarks
     * Remove an existing status bar item
     *
     * @param id
     * Status bar item identifier
     */
    removeItem(id: string): void;
}

export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Returns display text of the item.
     *
     */
    getText(): LocalizedString;
    /**
     * @remarks
     * Hide the Status Bar Item.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Updates display text of the item.
     *
     * @param text
     * New display text
     */
    setText(text: LocalizedString): void;
    /**
     * @remarks
     * Show the Status Bar Item.
     *
     */
    show(): void;
}

/**
 * Properties required to create a status bar item
 */
export interface IStatusBarItemCreationParams {
    /**
     * @remarks
     * Alignment of item within status bar. If undefined, it will
     * be left aligned.
     *
     */
    alignment?: StatusBarAlignment;
    /**
     * @remarks
     * Optional icon image resource of the item.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Size of the status bar item. If undefined, it will wrap text
     * content.
     *
     */
    size?: number;
    /**
     * @remarks
     * Default localized display text of the item. If undefined, it
     * will be empty string.
     *
     */
    text?: LocalizedString;
    /**
     * @remarks
     * Default visibility of the item. If undefined, it will be
     * true.
     *
     */
    visible?: boolean;
}

/**
 * A property item which supports String properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IStringPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string>;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}

/**
 * Optional properties for String property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IStringPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: string, oldValue: string) => void;
    /**
     * @remarks
     * Optional regular expression pattern to validate string.
     *
     */
    regexPattern?: string;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A property item which supports Sub Pane properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPanePropertyItem extends IPropertyItemBase, IPropertyPane {
    /**
     * @remarks
     * Updates layout alignment of the sub pane.
     *
     * @param alignment
     * New layout alignment.
     */
    setAlignment(alignment: LayoutAlignment): void;
    /**
     * @remarks
     * Updates layout direction of the sub pane.
     *
     * @param direction
     * New layout direction.
     */
    setDirection(direction: LayoutDirection): void;
}

/**
 * Optional properties for Sub Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPanePropertyItemOptions extends IPropertyPaneOptions {
    /**
     * @remarks
     * Alignment of property items within the pane of the property
     * pane. If undefined, it will default to Left.
     *
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Initial expander state of sub pane. If undefined, it will
     * default to false.
     *
     */
    collapsed?: boolean;
    /**
     * @remarks
     * Determines layout direction of sub pane property items. If
     * undefined, it will default to Vertical.
     *
     */
    direction?: LayoutDirection;
    /**
     * @remarks
     * Determines if sub pane should have an expander. If
     * undefined, it will default to true.
     *
     */
    hasExpander?: boolean;
    /**
     * @remarks
     * Adds additional margins to sub pane. If undefined, it will
     * default to true.
     *
     */
    hasMargins?: boolean;
}

/**
 * A property item which supports Text properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITextPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<LocalizedString>;
    /**
     * @remarks
     * Gets layout alignment of the property item.
     *
     */
    setAlignment(alignment: LayoutAlignment): void;
    /**
     * @remarks
     * Sets title of the property item.
     *
     */
    setTitle(title: LocalizedString | undefined): void;
}

/**
 * Optional properties for Text property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITextPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Determines alignment of the text. If undefined, it will
     * default to left aligned.
     *
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Adds a border around the text. If undefined, it will default
     * to true.
     *
     */
    border?: boolean;
    /**
     * @remarks
     * Localized title of the text item.
     *
     */
    title?: LocalizedString;
}

/**
 * A property item which supports toggle button properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IToggleGroupPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current selected entry value.
     *
     */
    readonly value: number;
    /**
     * @remarks
     * Find a toggle entry at an index in the group.
     *
     * @param index
     * Index of the toggle entry in the list.
     */
    getEntryByIndex(index: number): IToggleGroupPropertyItemEntry | undefined;
    /**
     * @remarks
     * Find a toggle entry with a specific value associated with
     * property item.
     *
     * @param value
     * Value of the toggle entry in the group.
     */
    getEntryByValue(value: number): IToggleGroupPropertyItemEntry | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Update list of toggle group entries.
     *
     * @param entries
     * New list of updated entries.
     * @param newValue
     * New value value to use for the selected toggle button.
     */
    updateEntries(entries: IToggleGroupPropertyItemEntry[], newValue?: number): void;
}

/**
 * Properties of toggle group property item list entry
 */
export interface IToggleGroupPropertyItemEntry {
    /**
     * @remarks
     * Optional icon of the dropdown entry.
     *
     */
    readonly icon?: string;
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label?: LocalizedString;
    /**
     * @remarks
     * Optional tooltip description text of the entry.
     *
     */
    readonly tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: number;
}

/**
 * Optional properties for Toggle Group property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IToggleGroupPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of toggle button entries associated with the property
     * item. If undefined, list will be empty.
     *
     */
    entries?: IToggleGroupPropertyItemEntry[];
    /**
     * @remarks
     * If true toggle buttons will be displayed vertically with
     * their labels. If undefined, labels will be hidden.
     *
     */
    hiddenEntryLabels?: boolean;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number, items: IToggleGroupPropertyItemEntry[]) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A property item which supports Vector2 properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector2PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<Vector2>;
    /**
     * @remarks
     * Updates title of the button.
     *
     * @param title
     * New button title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     *
     * @param tooltip
     * New button tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Updates Vector2 limits and clamps the current value.
     *
     */
    updateAxisLimits(limits: { min?: Partial<Vector2>; max?: Partial<Vector2> }): void;
}

/**
 * Optional properties for Vector2 property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector2PropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * If we should treat the Vector2 properties as integer values.
     * By default is false.
     *
     */
    isInteger?: boolean;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     *
     */
    max?: Partial<Vector2>;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: Partial<Vector2>;
    /**
     * @remarks
     * This callback is called when UI control is changed.
     *
     */
    onChange?: (newValue: Vector2, oldValue: Vector2) => void;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A property item which supports Vector3 properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<Vector3>;
    /**
     * @remarks
     * Updates title of the button.
     *
     * @param title
     * New button title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     *
     * @param tooltip
     * New button tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Updates Vector3 limits and clamps the current value.
     *
     */
    updateAxisLimits(limits: { min?: Partial<Vector3>; max?: Partial<Vector3> }): void;
}

/**
 * Optional properties for Vector3 property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * If we should treat the Vector3 properties as integer values.
     * By default is false.
     *
     */
    isInteger?: boolean;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     *
     */
    max?: Partial<Vector3>;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: Partial<Vector3>;
    /**
     * @remarks
     * This callback is called when UI control is changed.
     *
     */
    onChange?: (newValue: Vector3, oldValue: Vector3) => void;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: BasicTooltipContent;
}

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the {@link
 * ExtensionContext} - using the global instance allows the
 * creator to use this properties class to perform direct
 * server->client messaging and broadcasts.
 */
export interface LogProperties {
    /**
     * @remarks
     * Display the log message to a log channel. If no channel is
     * specified, default channel is regular message.
     *
     */
    channelMask?: LogChannel;
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: Player;
    /**
     * @remarks
     * Message to be shown under the message when toast channel is
     * selected.
     *
     */
    subMessage?: string;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}

/**
 * Represents parameters to create a modal dialog
 */
export interface ModalDialogCreationParams {
    /**
     * @remarks
     * Determines if the panel can be dismissed by the user
     * actions. If undefined, it will be true.
     *
     */
    canUserDismiss?: boolean;
    /**
     * @remarks
     * Panel height for the dialog
     *
     */
    height?: number;
    /**
     * @remarks
     * Callback to notify changes in active request
     *
     */
    onActiveRequestChange?: (requestId: string | undefined) => void;
    /**
     * @remarks
     * Dialog title
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Optional user defined unique identifier
     *
     */
    uniqueId?: string;
    /**
     * @remarks
     * Panel width for the dialog
     *
     */
    width?: number;
}

/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * Action associated with tool activation
     *
     */
    action?: RegisteredAction<NoArgsAction>;
    /**
     * @remarks
     * Icon resource
     *
     */
    icon?: string;
    /**
     * @remarks
     * Localized title of the tool
     *
     */
    title?: string;
    /**
     * @remarks
     * Tooltip description of the tool
     *
     */
    tooltip?: BasicTooltipContent;
}

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: GameMode;
    initialTimOfDay?: number;
}

export interface QuickExtrudeProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    isShrink?: boolean;
    layerCount?: number;
    selectionDirection?: number;
    size?: number;
    startingLocation?: Vector3;
}

export interface WeightedBlock {
    block: BlockType;
    weight: number;
}

export interface WidgetComponentBaseOptions {
    lockToSurface?: boolean;
    offset?: Vector3;
    visible?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
    boundsOffset?: Vector3;
    enableResizeHandles?: Axis;
    hullColor?: RGBA;
    maxSize?: Vector3;
    minSize?: Vector3;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showWorldIntersections?: boolean;
    stateChangeEvent?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void;
    visibleHull?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
    clipboardOffset?: Vector3;
    highlightHullColor?: RGBA;
    highlightOutlineColor?: RGBA;
    hullColor?: RGBA;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showOutline?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: Vector3;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
    color?: RGBA;
    gridCount?: Vector2;
    gridSize?: Vector2;
    plane?: Plane;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions {
    color?: RGBA;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentVolumeOutlineOptions extends WidgetComponentBaseOptions {
    highlightHullColor?: RGBA;
    highlightOutlineColor?: RGBA;
    hullColor?: RGBA;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showHighlightOutline?: boolean;
    showOutline?: boolean;
    volumeOffset?: Vector3;
}

export interface WidgetCreateOptions {
    bindPositionToBlockCursor?: boolean;
    collisionOffset?: Vector3;
    collisionRadius?: number;
    collisionType?: WidgetCollisionType;
    lockToSurface?: boolean;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg0: WidgetStateChangeEventData) => void;
    visible?: boolean;
    widgetName?: string;
    worldBoundsMax?: Vector3;
    worldBoundsMin?: Vector3;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
    showBounds?: boolean;
    visible?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWidgetComponentError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWidgetError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWidgetGroupError extends Error {
    private constructor();
}

/**
 * @remarks
 * Deserialize anything, defaults to the same behavior as
 * JSON.parse but will use custom deserializers passed into
 * {@link registerSerializationForType}.
 *
 */
export declare function deserialize(s: string): unknown;
/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 *
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperation(
    volume: RelativeVolumeListBlockVolume,
    operation: (blockLocation: Vector3) => void,
): Promise<void>;
/**
 * @remarks
 * Executes an operation over a BlockLocationIterator via
 * chunks to allow splitting operation over multiple game ticks
 *
 * @param blockLocationIterator
 * the selection to iterator over
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperationFromIterator(
    blockLocationIterator: BlockLocationIterator,
    operation: (blockLocation: Vector3) => void,
): Promise<void>;
/**
 * @remarks
 * Returns a string array of the default block types for editor
 * operations. Can be used to further filter blocks. This will
 * throw if called in early execution.
 *
 * @returns
 * Default allowed block list
 */
export declare function getDefaultAllowBlockList(): string[];
/**
 * @remarks
 * Returns a list of default core brush shapes
 *
 * @param excludeList
 * List of shape types to exclude
 */
export declare function getDefaultBrushShapes(excludeList?: CoreBrushShapeType[]): BrushShape[];
/**
 * @remarks
 * Creates an observable object that stores a value state.
 *
 * @param initialValue
 * Initial value of the observable.
 * @param validator
 * Optional validator to use for the setter.
 */
export declare function makeObservable<T>(initialValue: T, validator?: ObservableValidator<T>): IObservable<T>;
/**
 * @remarks
 * Registers an editor extension into Minecraft. This function
 * calls underlying functionality to register an extension but
 * provides helpful and contextual wrappers for individual
 * client lifetimes. The onActivation function is called
 * whenever a client joins a session, while the shutdown is
 * called when a client leaves. There may be other
 * circumstances in which these are called as well based on
 * client state that is an implementation detail of the system.
 *
 */
export declare function registerEditorExtension<PerPlayerStorageType = Record<string, never>>(
    extensionName: string,
    activationFunction: ActivationFunctionType<PerPlayerStorageType>,
    shutdownFunction: ShutdownFunctionType<PerPlayerStorageType>,
    options?: IRegisterExtensionOptionalParameters,
): Extension;
/**
 * @remarks
 * Register a type to have custom serialization/deserialization
 * when using {@link serialize} and {@link deserialize}.
 *
 */
export declare function registerSerializationForType<T>(
    typeConstructor: Function,
    name: string,
    serializer: (obj: T) => Record<string, unknown>,
    deserializer: (vals: Record<string, unknown>) => T,
): void;
/**
 * @remarks
 * Creates a strongly typed transaction handle to enforce type
 * safety when adding user defined transactions. This function
 * is a wrapper around the more generalized transaction manager
 * API for script based transactions. Any Editor Extension that
 * needs to insert data into the transaction log for undo/redo
 * should use this function to create a handler for the
 * specific type of data that needs to be inserted. When a
 * transaction is undone/redone, the associated handler
 * function will be invoked with a copy of the payload data
 * that was inserted into the log. As a general rule,
 * transaction data should contain 2 things:<br> 1. The data
 * that will be used to perform the operation we're trying to
 * record<br> 2. The data that will be used to restore the
 * state of the program to what it was before the
 * operation.<br> NOTE/WARNING:<br> The payload data is
 * serialized to JSON before being inserted into the
 * transaction log and the underlying implementation uses the
 * JSON.stringify() function to serialize the data. Any
 * non-primitive data, such as classes or minecraft native
 * objects will not serialize to JSON properly, so you should
 * avoid using them as payload data.
 *
 * @param transactionManager
 * A reference to the TransactionManager (from the extension
 * context for your extension)
 * @param undoHandler
 * A function that will be invoked when the transaction is
 * undone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * @param redoHandler
 * A function that will be invoked when the transaction is
 * redone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * @returns
 * - {@link UserDefinedTransactionHandle} - A strongly typed
 * transaction handle that can be used to add transactions to
 * the transaction manager.
 */
export declare function registerUserDefinedTransactionHandler<T>(
    transactionManager: TransactionManager,
    undoHandler: (payload: T) => void,
    redoHandler: (payload: T) => void,
): UserDefinedTransactionHandle<T>;
/**
 * @remarks
 * Serialize anything, defaults to the same behavior as
 * JSON.stringify but will use custom serializers passed into
 * {@link registerSerializationForType}.
 *
 */
export declare function serialize(obj: unknown): string;
/**
 * @remarks
 * Small utility for getting a string from an unknown exception
 * type
 *
 */
export declare function stringFromException(e: unknown): string;
export const editor: MinecraftEditor;
