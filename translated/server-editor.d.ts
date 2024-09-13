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
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
/**
 * The types of actions that are supported. This type
 * corresponds to the expected arguments passed by the
 * onExecute handler of an action.
 */
export declare enum ActionTypes {
    MouseRayCastAction = 'MouseRayCastAction',
    NoArgsAction = 'NoArgsAction',
}

export enum BlockMaskListType {
    Mask = 'Mask',
    Replace = 'Replace',
}

export enum BlockPaletteItemType {
    Simple = 0,
    Probability = 1,
}

/**
 * The possible variants of a bool.
 */
export declare enum BoolPropertyItemVariant {
    Checkbox = 0,
    ToggleSwitch = 1,
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

/**
 * Predefined action bar items
 */
export declare enum CoreActionBarItemType {
    Redo = 'editor:actionBarItem:redo',
    Undo = 'editor:actionBarItem:undo',
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
    ShowChunkBoundaries = 'ShowChunkBoundaries',
    /**
     * @remarks
     * Manages rendering of invisible blocks (e.g., barrier, light,
     * structure_void).
     *
     */
    ShowInvisibleBlocks = 'ShowInvisibleBlocks',
}

/**
 * Supported image types.
 */
export declare enum ImageResourceType {
    Default = 0,
    Block = 1,
    Icon = 2,
}

/**
 * Input modifier flags to create chorded bindings
 */
export declare enum InputModifier {
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

/**
 * Mouse device action categories
 */
export declare enum MouseActionCategory {
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

export enum Plane {
    XY = 'XY',
    XZ = 'XZ',
    YZ = 'YZ',
}

export enum PlayerPermissionLevel {
    Visitor = 0,
    Member = 1,
    Operator = 2,
    Custom = 3,
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
    AxialSphere = 'AxialSphere',
    Box = 'Box',
    Disc = 'Disc',
    Line = 'Line',
    Text = 'Text',
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
    Boolean = 'editorUI:Boolean',
    Button = 'editorUI:Button',
    ColorPicker = 'editorUI:ColorPicker',
    ComboBox = 'editorUI:ComboBox',
    Divider = 'editorUI:Divider',
    Dropdown = 'editorUI:Dropdown',
    Image = 'editorUI:Image',
    Number = 'editorUI:Number',
    String = 'editorUI:String',
    SubPane = 'editorUI:SubPane',
    Table = 'editorUI:Table',
    Text = 'editorUI:Text',
    Vector3 = 'editorUI:Vector3',
}

/**
 * Define the visibility of the status bar item If the tool
 * does not have an `ISimpleToolPropertyPane` component, then
 * this option is ignored
 */
export declare enum SimpleToolStatusBarVisibility {
    AlwaysVisible = 0,
    VisibleWhenActive = 1,
}

export enum SplineType {
    Hermite = 'Hermite',
    Line = 'Line',
}

/**
 * Position for items on the status bar
 */
export declare enum StatusBarAlignment {
    Right = 0,
    Left = 1,
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
    TitleBarBackground = 'TitleBarBackground',
    ViewportOutline = 'ViewportOutline',
    Warning = 'Warning',
}

export enum WidgetComponentType {
    Entity = 'Entity',
    Gizmo = 'Gizmo',
    Guide = 'Guide',
    RenderPrim = 'RenderPrim',
    Spline = 'Spline',
    Text = 'Text',
}

export enum WidgetGroupSelectionMode {
    Multiple = 'Multiple',
    None = 'None',
    Single = 'Single',
}

/**
 * Defines type information for graphics settings properties.
 */
export type GraphicsSettingsPropertyTypeMap = {
    [GraphicsSettingsProperty.ShowInvisibleBlocks]?: boolean;
    [GraphicsSettingsProperty.ShowChunkBoundaries]?: boolean;
};

/**
 * Full set of all possible raw actions
 */
export type Action = NoArgsAction | MouseRayCastAction;

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

/**
 * A generic handler for an event sink.
 */
export declare type EventHandler<T> = (eventArg: T) => void;

/**
 * A property item which supports BlockList properties
 */
export type IBlockListPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateBlockList(newBlockList: string[]): void;
};

/**
 * A property item which supports Dropdown properties
 */
export type IDropdownPropertyItem_deprecated<
    T extends Omit<PropertyBag, Prop> & {
        [key in Prop]: number;
    },
    Prop extends keyof T & string,
> = IPropertyItem<T, Prop> & IDropdownPropertyItemMixIn;

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
    readonly toolRail: IModalToolContainer;
    readonly log: IPlayerLogger;
    readonly extensionContext: ExtensionContext;
    readonly builtInUIManager: BuiltInUIManager;
    readonly eventSubscriptionCache: BedrockEventSubscriptionCache;
    scratchStorage: PerPlayerStorage | undefined;
};

/**
 * A property item which supports Table properties
 */
export type ITablePropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateCell(dataCell: IPropertyTableCellItem, row: number, column: number): void;
    updateRow(dataRow: IPropertyTableCellItem[], row: number): void;
    updateTable(newData: IPropertyTableCellItem[][]): void;
};

/**
 * A property item which supports Vector3 properties
 */
export type IVector3PropertyItem_deprecated<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<
    T,
    Prop
> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
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
    actionType: ActionTypes.MouseRayCastAction;
    readonly onExecute: (mouseRay: Ray, mouseProps: MouseProps) => void;
};

/**
 * An action which needs no additional client side arguments on
 * execute
 */
export type NoArgsAction = {
    actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};

/**
 * Callback to execute when a value of a property item is
 * updated.
 */
export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (
    obj: T,
    property: Prop,
    oldValue: object,
    newValue: object,
) => void;

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
    location: minecraftserver.Vector3;
    direction: minecraftserver.Vector3;
    cursorBlockLocation: minecraftserver.Vector3;
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

/**
 * Full set of all possible keyboard actions
 */
export type SupportedKeyboardActionTypes = RegisteredAction<NoArgsAction>;

/**
 * Full set of all possible mouse actions
 */
export type SupportedMouseActionTypes = RegisteredAction<MouseRayCastAction>;

export type UnregisterInputBindingCallback = () => void;

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
    constructor(mEvents: minecraftserver.WorldAfterEvents);
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
    subscribeToBedrockEvent<T extends keyof minecraftserver.WorldAfterEvents>(
        event: T,
        ...params: Parameters<minecraftserver.WorldAfterEvents[T]['subscribe']>
    ): ReturnType<minecraftserver.WorldAfterEvents[T]['subscribe']>;
    /**
     * @remarks
     * Cleans up the set of internal registrations and
     * subscriptions.
     *
     */
    teardown(): void;
}

/**
 * Validates observable objects that support string as
 * BlockType
 */
export declare class BlockIdentifierObservableValidator implements ObservableValidator<string> {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    removeItems(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
    getSelectedBlockType(): minecraftserver.BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeList: BrushShape[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.Error}
     */
    activateBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    activateBrushTool(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    beginPainting(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    deactivateBrushTool(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    endPainting(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    registerBrushShape(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUIElements: () => SettingsUIElement[],
    ): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBlockPaletteOverride(
        overrideBlock?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    setBrushShape(shape: minecraftserver.Vector3[] | minecraftserver.CompoundBlockVolume): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: ClipboardChangeAfterEvent) => void): (arg: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ClipboardChangeAfterEvent) => void): void;
}

/**
 * A ClipboardItem is a handle to an object which represents a
 * set of blocks in a contained bounding area (most likely
 * copied from the world)
 */
export class ClipboardItem {
    private constructor();
    /**
     * @remarks
     * Return whether there is any block content in the item
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Clear the contents of the item
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Create a {@link @minecraft/server.CompoundBlockVolume}
     * container which represents the occupied block volumes within
     * the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link @minecraft/server.CompoundBlockVolume} which
     * represents the occupied block volumes within the
     * ClipboardItem as they would be written to the world with the
     * specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * Create a {@link Selection} container which represents the
     * occupied block volumes within the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link Selection} which represents the occupied block
     * volumes within the ClipboardItem as they would be written to
     * the world with the specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    /**
     * @remarks
     * Get the bounding size of the ClipboardItem
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getSize(): minecraftserver.Vector3;
    /**
     * @remarks
     * Copy the contents of the area represented by a {@link
     * Selection} volume into the ClipboardItem
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param selection
     * A volume which represents the area to be copied
     * @throws This function can throw errors.
     */
    readFromSelection(selection: Selection): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param from
     * The world location of one corner of a bounding volume
     * @param to
     * The world location of the opposite corner of a bounding
     * volume
     * @throws This function can throw errors.
     */
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

export class CurrentThemeChangeAfterEvent {
    private constructor();
    readonly id: string;
}

export class CurrentThemeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): (arg: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): void;
}

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: minecraftserver.RGBA;
    readonly colorKey: string;
}

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): void;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    attachClipboardItem(item: ClipboardItem): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    clearAttachment(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getAttachmentProperties(): CursorAttachmentProperties;
    /**
     * @remarks
     * Get the world position of the 3D block cursor
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @remarks
     * Get a property object which represents the current
     * properties of the 3D block cursor.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks
     * Hide the 3D block cursor from view until the corresponding
     * {@link Cursor.show} function is called
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param offset
     * Amount by which the 3D block cursor should be moved
     * @returns
     * Return the newly modified position (or previous position if
     * movement was restricted)
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Reset the 3D block cursor to the system default state
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setAttachmentProperties(properties: CursorAttachmentProperties): void;
    /**
     * @remarks
     * Set the 3D block cursor properties to a given state
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    show(): void;
}

export class CursorAttachmentPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorAttachmentProperties;
}

export class CursorAttachmentPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void,
    ): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: CursorPropertiesChangeAfterEvent) => void,
    ): (arg: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    loadStructure(location: string, id: string): EditorStructure;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    saveStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

/**
 * Validates observable objects that support string as
 * EntityType
 */
export declare class EntityIdentifierObservableValidator implements ObservableValidator<string> {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
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
    readonly player: minecraftserver.Player;
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
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    readonly cursorAttachmentPropertyChange: CursorAttachmentPropertyChangeAfterEventSignal;
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
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
     * @param properties
     * Property map to set available property values. If the
     * property is not defined in the map, it will not be modified.
     * @throws This function can throw errors.
     */
    setAll(properties: GraphicsSettingsPropertyTypeMap): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from an editor mode change
     * after event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}

/**
 * Validates min/max limits of observable objects that support
 * number
 */
export declare class NumberLimitObservableValidator implements ObservableValidator<number> {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    protected _max?: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}

/**
 * The Selection represents a volume in space, which may
 * potentially be made up of one or more block locations.
 * These block locations do not need to be contiguous, and a
 * Selection represent an irregular shape.
 * It's important to note that a Selection is only a
 * representation of the volume shape space - and does NOT
 * represent the actual contents of the space.
 */
export class Selection {
    private constructor();
    /**
     * @remarks
     * Returns a boolean representing whether or not there are any
     * volumes pushed to the selection stack
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Set whether or not the selection volume is visible to the
     * client user.
     * NOTE: Use this option carefully - Selection volumes are
     * generally server-only, but marking a volume as visible
     * causes the volume (and all volume operations) to be
     * synchronized with the client game which can potentially
     * generate excessive network traffic.
     *
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Clear the contents of the Selection
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a block iterator which can be used to step across the
     * Selection shape.  Each call to the iterator will return the
     * next block location within the Selection bounds which is
     * actually selected.
     * Block iteration is not guaranteed to be contiguous - it is
     * possible to create irregular selection shapes by adding
     * volumes to a selection which may or may not be contiguous or
     * adjacent to other volumes within the selection.
     * The Block iterator will return only selected volume
     * locations
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    /**
     * @remarks
     * Return a bounding rectangle that contains all of the volumes
     * within the selection (the bounding rectangle does NOT
     * represent the shape of the selection, only the largest
     * rectangle that will fit all of the volumes)
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BoundingBox;
    /**
     * @remarks
     * Return the color of the on-screen selection container hull
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getFillColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Return the color of the on-screen selection container
     * outline
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getOutlineColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Get the origin of the CompoundBlockVolume that makes up the
     * block component part of selection
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getVolumeOrigin(): minecraftserver.Vector3;
    /**
     * @remarks
     * Translate a selection by a given amount (this causes all of
     * the volumes within the selection to be moved by the
     * specified offset)
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param delta
     * The amount by which to move
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Move the selection to an absolute world location (causing
     * all of the volumes within the selection to be moved to a
     * location relative to the world location)
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param location
     * The world location to which to relocate the selection
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Fetch the volume information of the last compound volume
     * that was pushed to the volume stack without affecting the
     * stack itself
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param forceRelativity
     * See the description for {@link
     * @minecraft/server.CompoundBlockVolume.peekLastVolume}
     * @returns
     * Returns undefined if the stack is empty
     */
    peekLastVolume(
        forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity,
    ): minecraftserver.CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the volume information that was last pushed to the
     * volume stack.  This will reduce the stack item length by 1
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    popVolume(): void;
    /**
     * @remarks
     * Push a compound volume item (a volume and action pair) to
     * the volume stack.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param item
     * Item to push to the stack
     * @throws This function can throw errors.
     */
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * Replace the contents of the current selection with a new
     * specified selection.  This operation will delete the current
     * contents and copy the contents of the new selection to the
     * target selection - it does this by content, not by
     * reference.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param other
     * {@link @minecraft/server.CompoundBlockVolume} - set the
     * block component part of this selection to the specified
     * compound block volume.  This will completely replace all
     * block volume definitions in the selection.
     * {@link Selection} - replace the selection with the specified
     * selection
     * @throws This function can throw errors.
     */
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    /**
     * @remarks
     * Set the color of the hull of the selection object if it is
     * visible.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setFillColor(color: minecraftserver.RGBA): void;
    /**
     * @remarks
     * Set the color of the outline around the selection object if
     * it is visible
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setOutlineColor(color: minecraftserver.RGBA): void;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly selectionEvent: PrimarySelectionChangedEvent;
}

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link Selection} objects, and provides the user the ability
 * to create new {@link Selection} objects for use within an
 * extension.
 */
export class SelectionManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link Selection} object is always present (even
     * if it's empty) and cannot be deleted.  This object
     * represents the main selection object which is always
     * accessible through the UI, and by default is synchronized
     * between the client and server.
     *
     * @throws This property can throw when used.
     */
    readonly selection: Selection;
    /**
     * @remarks
     * Create a new, empty {@link Selection} object
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    create(): Selection;
}

/**
 * The SettingsManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management all
 * player settings.
 */
export class SettingsManager {
    private constructor();
    /**
     * @remarks
     * Manages graphics settings properties.
     *
     */
    readonly graphics: GraphicsSettings;
    readonly theme: ThemeSettings;
}

export class SettingsUIElement {
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    readonly name: string;
    readonly onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void;
    readonly options: SettingsUIElementOptions;
    constructor(
        name: string,
        initialValue: boolean | number | string | minecraftserver.Vector3,
        onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void,
        options?: SettingsUIElementOptions,
    );
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

/**
 * A simple class wrapper to inherit in your tool which
 * contains the initialization and storage of the simple tool
 * component utility. See one of the `Simple` samples to see
 * how to use this class and the wrapper framework
 */
export declare class SimpleToolWrapper implements IDisposable {
    /**
     * @remarks
     * The player UI session that the tool is running in Use this
     * to access the player UI session, or any of the session's
     * components
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * The simple tool instance that is created and managed by the
     * wrapper Use this to access any of the tools components, or
     * mess with the tools window visibility
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Setup the simple tool instance with the given options This
     * will create and initialize the simple tool instance
     *
     */
    setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void;
    /**
     * @remarks
     * Teardown the simple tool instance This will call the
     * teardown function on the simple tool instance This function
     * is automatically invoked by the Editor Extension system when
     * the editor is shutting down
     *
     */
    teardown(): void;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

export class ThemeSettings {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addNewTheme(id: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeList(): string[];
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @returns
     * Returns the number of change requests that were being
     * tracked
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks
     * Discard the currently open transaction without committing it
     * to the transaction manager stack.
     * All records within the transaction will be discarded, and
     * any tracking requests currently active will be stopped
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @returns
     * Returns the number of change requests that were discarded
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * Open a transaction record which will be a container for any
     * number of transaction operations.
     * All transaction operations within a record are grouped and
     * treated as a single atomic unit
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks
     * Return the number of transaction records on the redo stack.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param from
     * Min block location of a bounding area
     * @param to
     * Max block location of a bounding area
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @remarks
     * Begin tracking block changes in an area defined by a {@link
     * @minecraft/server.CompoundBlockVolume}.  These will be added
     * to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param compoundBlockVolume
     * {@link @minecraft/server.CompoundBlockVolume} to track.
     * Only non-void block locations will be tracked -- any changes
     * falling into a void/negative space will not be tracked
     * @throws This function can throw errors.
     */
    trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean;
    /**
     * @remarks
     * Begin tracking block changes in a list of specified block
     * locations.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param locations
     * An array of block locations to monitor for changes
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @remarks
     * Begin tracking block changes that may happen in a selection
     * volume.
     * The volume is copied, so tracking will not move if the
     * selection volume is translated after this instruction is
     * issued.
     * Selection Volumes can also represent irregular shapes with
     * non-contiguous blocks and this tracking call will honor the
     * actual selected areas in the volume (and not the negative
     * space) (see {@link @minecraft/server.CompoundBlockVolume}
     * for more details
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param selection
     * A collection of block location volumes represented by a
     * Selection volume to monitor for changes.
     * The Selection Volume is copied, so further changes to the
     * volume after this call will not be reflected in the tracking
     * list.
     * @throws This function can throw errors.
     */
    trackBlockChangeSelection(selection: Selection): boolean;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks
     * Return how many transactions records currently exist on the
     * stack
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
 * Vector3
 */
export declare class Vector3LimitObservableValidator implements ObservableValidator<minecraftserver.Vector3> {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    protected _max: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    protected _min: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector3LimitObservableValidator` class
     *
     */
    constructor(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>, isInteger?: boolean);
    updateLimits(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>): void;
    validate(newValue: minecraftserver.Vector3): minecraftserver.Vector3;
}

export class Widget {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    collisionOffset: minecraftserver.Vector3;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    collisionRadius: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    location: minecraftserver.Vector3;
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
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    snapToBlockLocation: boolean;
    visible: boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType:
            | WidgetComponentRenderPrimitiveAxialSphere
            | WidgetComponentRenderPrimitiveBox
            | WidgetComponentRenderPrimitiveDisc
            | WidgetComponentRenderPrimitiveLine,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    delete(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetStateChangeEventData) => void): void;
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
     * {@link minecraftserver.InvalidWidgetComponentError}
     */
    readonly location: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    offset: minecraftserver.Vector3;
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    delete(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    clickable: boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(
        primitive:
            | WidgetComponentRenderPrimitiveAxialSphere
            | WidgetComponentRenderPrimitiveBox
            | WidgetComponentRenderPrimitiveDisc
            | WidgetComponentRenderPrimitiveLine,
    ): void;
}

export class WidgetComponentRenderPrimitiveAxialSphere {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color?: minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveBox {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    size?: minecraftserver.Vector3;
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}

export class WidgetComponentRenderPrimitiveDisc {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveLine {
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    end: minecraftserver.Vector3;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    start: minecraftserver.Vector3;
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    splineType: SplineType;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    label: string;
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
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    visible: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    visibleBounds: boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    delete(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}

export interface BlockMaskList {
    blockList: (minecraftserver.BlockPermutation | minecraftserver.BlockType | string)[];
    maskType: BlockMaskListType;
}

export interface BrushShape {
    icon: string;
    name: string;
}

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * The anchor is a unit vector representation of the side or
     * corner of the Clipboard Item to be written to the world.
     * `{0, 0, 0}` represents the center of the Clipboard item,
     * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
     * the bottom/back/left corner, etc
     * The anchor is used in conjunction with the item size to
     * determine the object relative anchor point where the object
     * will be applied in the world.
     * Values for the X/Y/Z components should be within the range
     * `(-1 <= X/Y/Z <=1)`
     *
     */
    anchor?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     *
     */
    offset?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     *
     */
    rotation?: minecraftserver.StructureRotation;
}

export interface CursorAttachmentProperties {
    boundsFillColor?: minecraftserver.RGBA;
    boundsVisible?: boolean;
    boundsWireframeColor?: minecraftserver.RGBA;
    contentsFillColor?: minecraftserver.RGBA;
    contentsWireframeColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    offset?: minecraftserver.Vector3;
    origin?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
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
    fillColor?: minecraftserver.RGBA;
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
    outlineColor?: minecraftserver.RGBA;
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

export interface EditorStructure {
    storageLocation: string;
    structure: minecraftserver.Structure;
    tags: string[];
}

export interface EditorStructureSearchOptions {
    excludeTags?: string[];
    idPattern?: string;
    includeLocation?: string[];
    includeTags?: string[];
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
    bonusChest?: boolean;
    cheats?: boolean;
    commandBlockEnabled?: boolean;
    daylightCycle?: DaylightCycle;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    educationEdition?: boolean;
    entitiesDropLoot?: boolean;
    exportType?: ProjectExportType;
    fireSpreads?: boolean;
    friendlyFire?: boolean;
    gameMode?: minecraftserver.GameMode;
    hardcore?: boolean;
    immediateRespawn?: boolean;
    keepInventory?: boolean;
    lanVisibility?: boolean;
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
    showCoordinates?: boolean;
    showDaysPlayed?: boolean;
    simulationDistance?: number;
    spawnPosition?: minecraftserver.Vector3;
    startingMap?: boolean;
    tileDrops?: boolean;
    timeOfDay?: number;
    tntExplodes?: boolean;
    weather?: number;
    worldName?: string;
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
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: minecraftserver.Player;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimOfDay?: number;
}

export interface SettingsUIElementOptions {
    dropdownItems?: string[];
    max?: number;
    min?: number;
    refreshOnChange?: boolean;
}

export interface WeightedBlock {
    block: minecraftserver.BlockType;
    weight: number;
}

export interface WidgetComponentBaseOptions {
    offset?: minecraftserver.Vector3;
    visible?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {}

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
    color?: minecraftserver.RGBA;
}

export interface WidgetCreateOptions {
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
    visible?: boolean;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
    showBounds?: boolean;
    visible?: boolean;
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

/**
 * Represents a UI session for a given player
 */
export interface BuiltInUIManager {
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
     * Icon resource for the item.
     *
     */
    icon: string;
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
 * A property item which supports Vector3 properties
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
    setTooltip(title: LocalizedString | undefined): void;
}

/**
 * Optional properties for Bool property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItemOptions extends IPropertyItemOptionsBase {
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
    tooltip?: LocalizedString;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to Checkbox.
     *
     */
    variant?: BoolPropertyItemVariant;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
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
    tooltip?: LocalizedString;
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
    readonly value: minecraftserver.RGBA;
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
    onChange?: (newValue: minecraftserver.RGBA, oldValue: minecraftserver.RGBA) => void;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
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
    entries?: string[];
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
    tooltip?: LocalizedString;
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
 * Properties of dropdown property item children
 */
export interface IDropdownItem {
    /**
     * @remarks
     * Localized display text of the dropdown item.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * The selectable value of the dropdown item.
     *
     */
    readonly value: number;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
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
 * Dropdown property item specific functionality
 */
export interface IDropdownPropertyItemMixIn {
    /**
     * @remarks
     * Used to update the Dropdown options in the control. Will
     * trigger onChange with -1 as the old value due to the list
     * changing entries.
     *
     */
    updateDropdownItems(dropdownItems: IDropdownItem[], newValue: number): void;
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
    tooltip?: LocalizedString;
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
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): void;
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
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    dispose(): void;
    hide(): void;
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
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
     * Localized display text of the menu
     *
     */
    label: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     *
     */
    uniqueId?: string;
}

export interface IModalTool {
    /**
     * @remarks
     * Unique ID for the tool
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     *
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    bindPropertyPane(pane: IPropertyPane): void;
    dispose(): void;
    hide(): void;
    registerKeyBinding(action: SupportedKeyboardActionTypes, binding: KeyBinding, info?: KeyBindingInfo): void;
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    show(): void;
    unregisterInputBindings(): void;
}

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    addTool(params: ModalToolCreationParameters, action?: RegisteredAction<NoArgsAction>): IModalTool;
    getSelectedToolId(): string | undefined;
    removeTool(id: string): void;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
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
    tooltip?: LocalizedString;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to InputField.
     *
     */
    variant?: NumberPropertyItemVariant;
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
 * Log helper interface for Player.
 */
export interface IPlayerLogger {
    /**
     * @remarks
     * Dispatch a player log message with Debug log level
     *
     * @param message
     * Message content
     */
    debug(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     */
    error(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     */
    info(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     */
    warning(message: string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItem<T extends PropertyBag, Prop extends keyof T & string> extends IPropertyItemBase {
    /**
     * @remarks
     * The object associated.
     *
     */
    readonly obj: T;
    /**
     * @remarks
     * The target property of the object associated.
     *
     */
    readonly property: Prop;
    /**
     * @remarks
     * The value of the property.
     *
     */
    readonly value: T[Prop];
    dispose(): void;
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

export interface IPropertyItemOptions {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable?: boolean;
    /**
     * @remarks
     * Callback to execute when the value is updated.
     *
     */
    onChange?: OnChangeCallback<PropertyBag, string>;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: string;
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible?: boolean;
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

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsBlockList extends IPropertyItemOptions {
    blockList: string[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsBool extends IPropertyItemOptions {
    /**
     * @remarks
     * controls appearance of the boolean. checkbox or toggleswitch
     *
     */
    displayAsToggleSwitch?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsColorPicker_deprecated extends IPropertyItemOptions {
    showAlpha?: boolean;
    variant?: ColorPickerPropertyItemVariant;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsDropdown extends IPropertyItemOptions {
    /**
     * @remarks
     * The possible options for the drop down control.
     *
     */
    dropdownItems: IDropdownItem[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsNumber extends IPropertyItemOptions {
    /**
     * @remarks
     * If we should treat the number as floating point. By default
     * is false
     *
     */
    isFloat?: boolean;
    /**
     * @remarks
     * The min possible value for the number.
     *
     */
    max?: number;
    /**
     * @remarks
     * The max possible value for the number.
     *
     */
    min?: number;
    /**
     * @remarks
     * If UI should show slider control.
     *
     */
    showSlider?: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsSubPane extends IPropertyItemOptions {
    /**
     * @remarks
     * The sub pane to render in UI.
     *
     */
    pane: IPropertyPane;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsTable extends IPropertyItemOptions {
    defaultData: IPropertyTableCellItem[][];
    titleId?: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsVector3 extends IPropertyItemOptions {
    /**
     * @remarks
     * The max possible value for the X axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxX?: number;
    /**
     * @remarks
     * The max possible value for the Y axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxY?: number;
    /**
     * @remarks
     * The max possible value for the z axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxZ?: number;
    /**
     * @remarks
     * The min possible value for the X axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minX?: number;
    /**
     * @remarks
     * The min possible value for the Y axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minY?: number;
    /**
     * @remarks
     * The min possible value for the Z axis. By default
     * Number.MIN_SAFE_INTEGER
     *
     */
    minZ?: number;
}

/**
 * Property pane present dynamic content. It can be associated
 * with an object and presented with different kind of
 * controls.
 */
export interface IPropertyPane {
    /**
     * @remarks
     * Pane state for being expanded or collapsed.
     *
     */
    collapsed: boolean;
    /**
     * @remarks
     * Unique ID for the property pane.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides visibility change events
     *
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    /**
     * @remarks
     * Check visibility of the pane
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Adds a block list to the pane.
     *
     */
    addBlockList(options?: IPropertyItemOptionsBlockList): IBlockListPropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
    /**
     * @remarks
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a boolean item to the pane.
     *
     */
    addBool_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsBool,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button activate.
     *
     */
    addButton(
        action: (() => void) | RegisteredAction<NoArgsAction>,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker(
        value: IObservableProp<minecraftserver.RGBA>,
        options?: IColorPickerPropertyItemOptions,
    ): IColorPickerPropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsColorPicker_deprecated,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a combo box item to the pane.
     *
     */
    addComboBox(value: IObservableProp<string>, options?: IComboBoxPropertyItemOptions): IComboBoxPropertyItem;
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
     * Adds an DropDown item to the pane.
     *
     */
    addDropdown_deprecated<
        T extends Omit<PropertyBag, Prop> & {
            [key in Prop]: number;
        },
        Prop extends keyof T & string,
    >(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDropdown,
    ): IDropdownPropertyItem_deprecated<T, Prop>;
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
     * Adds a number item to the pane.
     *
     */
    addNumber(value: IObservableProp<number>, options?: INumberPropertyItemOptions): INumberPropertyItem;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsNumber,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     */
    addString(value: IObservableProp<string>, options?: IStringPropertyItemOptions): IStringPropertyItem;
    /**
     * @remarks
     * Adds a string item to the pane
     *
     */
    addString_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptions,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a table to the pane.
     *
     */
    addTable(options?: IPropertyItemOptionsTable): ITablePropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
    /**
     * @remarks
     * Adds a multiline Text item to the pane.
     *
     */
    addText(value: IObservableProp<LocalizedString>, options?: ITextPropertyItemOptions): ITextPropertyItem;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3(
        value: IObservableProp<minecraftserver.Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsVector3,
    ): IVector3PropertyItem_deprecated<T, Prop>;
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
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Returns property pane title.
     *
     */
    getTitle(): LocalizedString | undefined;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Removes an existing sub pane.
     *
     */
    removeSubPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Updates title of property pane.
     *
     * @param newTitle
     * New title
     */
    setTitle(newTitle: LocalizedString | undefined): void;
    /**
     * @remarks
     * Show the pane and all of its property items.
     *
     */
    show(): void;
}

/**
 * Common optional properties used for constructing a property
 * pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Localized title of the property pane
     *
     */
    title?: LocalizedString;
}

export interface IPropertyTableCellItem {
    block?: string;
    icon?: string;
    text?: string;
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
     * @returns
     * Current visibility state of header action
     */
    isHeaderActionVisible(): boolean;
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
 * The simple tool wrapper will create, bind and manage the
 * lifecycle of all the desired components. The wrapper is
 * designed to obfuscate and simplify the process of creating a
 * simple editor tool so that a creator can get on with the job
 * of just creating the tool functionality without getting
 * mired in the irrelevant details of component lifecycle and
 * visibility management. The wrapper will also attempt to
 * codify particular implementation patterns and requirements
 * that are common to all editor tools, and enforce them in a
 * consistent way. It should also go some way to insulating the
 * creator from underlying system and implementation changes as
 * the editor evolves.
 */
export interface ISimpleTool {
    /**
     * @remarks
     * Get a reference to the menu component that was automatically
     * created for the tool This generally only happens if the tool
     * is a global tool (i.e. has a pane and does not have a tool
     * rail component) In this case a menu item is automatically
     * created and some visibility controls are inserted. If you
     * have additional menu options you want to add, this is the
     * ideal control to add children to
     *
     */
    get menu(): IMenu | undefined;
    /**
     * @remarks
     * Get the tool name
     *
     */
    get name(): string;
    /**
     * @remarks
     * Get a reference to the root (primary) property pane
     * component - if no component was requested, this function
     * will throw an error
     *
     */
    get pane(): ISimpleToolPaneComponent;
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the status bar component - if no
     * component was requested, this function will throw an error
     *
     */
    get statusBar(): ISimpleToolStatusBarComponent;
    /**
     * @remarks
     * Get a reference to the tool rail component - if no component
     * was requested, this function will throw an error
     *
     */
    get toolRail(): ISimpleToolRailComponent;
    /**
     * @remarks
     * Find a pane or subpane by it's unique ID.
     *
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Although the parent pane is used to execute the
     * visibility request, the hidePane function will NOT affect
     * the visibility of any sibling panes -- so it is possible to
     * hide all of the child panes of a parent using this function
     *
     */
    hidePane(idString?: string): void;
    /**
     * @remarks
     * Send a tagged Debug log message to the console. The tag will
     * contain the tool name
     *
     */
    logDebug(message: string): void;
    /**
     * @remarks
     * Send a tagged Error log message to the console. The tag will
     * contain the tool name
     *
     */
    logError(message: string): void;
    /**
     * @remarks
     * Send a tagged Informational log message to the console. The
     * tag will contain the tool name
     *
     */
    logInfo(message: string): void;
    /**
     * @remarks
     * Send a tagged Warning log message to the console. The tag
     * will contain the tool name
     *
     */
    logWarn(message: string): void;
    /**
     * @remarks
     * Show a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Note that the showPane function (when used with a
     * child pane) will use the parent pane to execute the
     * visibility request. In this case, if the child panes are
     * marked as mututally exclusive, then the siblings of the
     * requested pane will be hidden
     *
     */
    showPane(idString?: string): void;
    /**
     * @remarks
     * Much like the showPane function, but will hide all other
     * panes that are not the requested pane irrespective of the
     * exclusivity setting
     *
     */
    showPaneExclusively(idString: string): void;
    /**
     * @remarks
     * A teardown function implemented by the ISimpleTool
     * implementation, and is called by the system during editor
     * extension shutdown. Don't override this function - instead,
     * implement the onTeardown event in the ISimpleToolOptions
     * structure
     *
     */
    teardown(): void;
}

/**
 * Define a key binding for the simple tool activation
 */
export interface ISimpleToolKeyBinding {
    binding: KeyBinding;
    info?: KeyBindingInfo;
}

/**
 * A set of options which define the basic properties of a
 * simple tool, and the optional components that are desired.
 */
export interface ISimpleToolOptions {
    /**
     * @remarks
     * A key binding that will activate the tool. Note that if the
     * tool is a modal tool, then the key binding will be tied to
     * the tool rail activation, and appear as a tooltip on the
     * tool rail button. If the tool is a global tool, then the key
     * binding will be tied to a menu item in the View menu, and
     * appear as a stateful menu item which will control the pane
     * visibility. If there's no pane required, then the key
     * binding is ignored
     *
     */
    activationKeyBinding?: ISimpleToolKeyBinding;
    /**
     * @remarks
     * The name of the tool. This will be used to identify the tool
     * in the UI and logs and will be used in the View \> [Tool
     * Name] menu item (if it's a global tool)
     *
     */
    name: string;
    /**
     * @remarks
     * The finalize function is executed after each of the
     * components have been created and finalized during
     * construction
     *
     */
    onFinalize?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The teardown function is executed when the tool is being
     * torn down and only after the individual components have
     * executed their own teardown functions
     *
     */
    onTeardown?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The options structure for an optional property pane
     * component
     *
     */
    propertyPaneOptions?: ISimpleToolPaneOptions;
    /**
     * @remarks
     * The options structure for an optional status bar component
     *
     */
    statusBarOptions?: ISimpleToolStatusBarOptions;
    /**
     * @remarks
     * The options structure for an optional tool rail component
     *
     */
    toolRailOptions?: ISimpleToolRailOptions;
}

/**
 * The Simple Tool pane component represents the main window
 * (or sub-window) for an editor tool. The pane components are
 * stored as a hierarchy (see the `ISimpleToolPaneOptions`
 * interface for more details) and are the main containers for
 * all of the UI controls used by the editor tool. Panes are
 * optional (a tool doesn't necessarily need to have a pane),
 * but if a pane is present, then it is one of two type - Modal
 * Pane (appears on the left side of the display; visibility is
 * tied to the `ISimpleToolRail` component) (Note that there
 * can be only one modal pane visible at a time) - Global Pane
 * (appears on the right side of the display; visibility is up
 * to the creator/user)
 */
export interface ISimpleToolPaneComponent {
    /**
     * @remarks
     * Get a list of the unique ID's of all of the child panes
     *
     */
    get childPaneList(): string[];
    /**
     * @remarks
     * Get the unique ID of the pane
     *
     */
    get id(): string;
    /**
     * @remarks
     * Check the visibility of the pane
     *
     */
    get isVisible(): boolean;
    /**
     * @remarks
     * Get a reference to actual property pane implementation that
     * was constructed by the tool. This reference is used to
     * construct the UI components that are displayed in the pane.
     *
     */
    get pane(): IPropertyPane;
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the parent tool.
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Find a pane reference by unique ID
     *
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide the pane. Although the parent pane is used to execute
     * the visibility request, the hidePane function will NOT
     * affect the visibility of any sibling panes -- so it is
     * possible to hide all of the child panes of a parent using
     * this function
     *
     */
    hidePane(): void;
    /**
     * @remarks
     * This causes the reconstruction of the pane (and the child
     * panes) as if the tool was being constructed for the first
     * time. This is unfortunately necessary until such time that
     * all of our UI components are able to communicate dynamically
     * with their client counterparts. Certain controls require a
     * full teardown and reconstruction to properly update their
     * state. This is undergoing code changes and should become
     * unnecessary in the future.
     *
     */
    reconstructPane(): void;
    /**
     * @remarks
     * Show the pane. Note, if this is a sub-pane, then this
     * function will ask the parent for permission to show, and may
     * result in the visibility of any sibling panes to change as a
     * result (depending on the `mutually exclusive visibility`
     * flag)
     *
     */
    showPane(): void;
}

/**
 * A set of options which define the basic properties of a
 * window pane (or sub-pane) for a simple tool. This pane can
 * be a top level pane, or a child pane of the top level pane,
 * and is the content container for all of the UI controls used
 * by the editor tool. Each pane is uniquely identified by the
 * `id` property, and has a number of optional function
 * closures which are called at various points in the pane's
 * lifecycle. Note that instead of having a single `onFinalize`
 * function, panes implement a pair of `onBeginFinalize` and
 * `onEndFinalize` functions. This is to allow for the pane to
 * be partially constructed BEFORE any child panes are
 * constructed. Once all child panes have been fully finalized,
 * then the `onEndFinalize` function is called to allow the
 * pane to finalize itself.
 */
export interface ISimpleToolPaneOptions {
    /**
     * @remarks
     * The id of the child pane that should be visible when the
     * parent pane is first shown, or the editor tool is
     * constructed and finalized
     *
     */
    childPaneInitiallyVisible?: string;
    /**
     * @remarks
     * An optional array of child panes. These panes are set up
     * exactly the same as the top level pane, but are displayed as
     * children inside the parent pane.
     *
     */
    childPanes?: ISimpleToolPaneOptions[];
    /**
     * @remarks
     * An optional flag to indicate whether the child panes are
     * mutually exclusive. If this is true, then only one child
     * pane can be visible at a time. If this is false, then
     * multiple child panes can be visible at the same time.
     * Visibility is controlled either through `showPane` or
     * `hidePane` functions of the `ISimpleToolPaneComponent` or
     * through the visibility methods in the top level tool
     * (`ISimpleTool`)
     *
     */
    childPanesMutuallyExclusive?: boolean;
    /**
     * @remarks
     * The unique identifier for this pane. This is used to
     * identify the pane in the tool's pane hierarchy.
     *
     */
    id: string;
    onBeginFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onEndFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onHide?: (pane: ISimpleToolPaneComponent) => void;
    onShow?: (pane: ISimpleToolPaneComponent) => void;
    onTeardown?: (pane: ISimpleToolPaneComponent) => void;
    /**
     * @remarks
     * The title of the pane. This will be displayed in the title
     * bar of the pane.
     *
     */
    title: string;
}

export interface ISimpleToolRailComponent {
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the parent tool.
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Get the implementation interface of the underlying tool rail
     * component
     *
     */
    get toolRail(): IModalTool;
}

/**
 * The tool rail component allows the tool to register an icon
 * and button (and dynamic tooltip) in the tool rail on the
 * left side of the display. Adding a tool rail component to a
 * tool will cause the tool to be considered a `modal tool`,
 * and only one single modal tool can be active at any one
 * time. Modal tools are generally tools which take focus and
 * control of the cursor (e.g. selection, clipboards, entity
 * selection, etc) Global tools (tools which do not have a tool
 * rail) are generally things like property pages, settings,
 * etc - things that do not require an active cursor or
 * gameplay interaction
 */
export interface ISimpleToolRailOptions {
    /**
     * @remarks
     * The icon for the tool rail button. This is generally a URL
     * to an image file in the editor extension resource pack e.g.
     * `pack://textures/my-tool-icon.png`
     *
     */
    icon: string;
    onActivate?: (component: ISimpleToolRailComponent) => void;
    onDeactivate?: (component: ISimpleToolRailComponent) => void;
    onFinalize?: (component: ISimpleToolRailComponent) => void;
    onTeardown?: (component: ISimpleToolRailComponent) => void;
    /**
     * @remarks
     * The text for the tool title
     *
     */
    title: string;
    /**
     * @remarks
     * The tooltip description for the tool. Note: if an activation
     * key binding was added to `ISimpleToolOptions`, then the key
     * binding will be appended to the tooltip string.
     *
     */
    tooltip: string;
}

export interface ISimpleToolStatusBarComponent {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    get statusBarItem(): IStatusBarItem;
    hide(): void;
    show(): void;
}

/**
 * A set of options which define the basic properties of a
 * status bar item for a simple tool.
 */
export interface ISimpleToolStatusBarOptions {
    /**
     * @remarks
     * The alignment of the status bar item within the parent
     * status bar container
     *
     */
    alignment: StatusBarAlignment;
    onFinalize?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onHide?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onShow?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onTeardown?: (statusBar: ISimpleToolStatusBarComponent) => void;
    /**
     * @remarks
     * The size of the status bar item within the parent status bar
     * container
     *
     */
    size: number;
    /**
     * @remarks
     * The text for the status bar item
     *
     */
    text: LocalizedString;
    /**
     * @remarks
     * Determine the status bar visibility based on the existence
     * and visibility of the tool's root property pane
     *
     */
    visibility?: SimpleToolStatusBarVisibility;
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
    getText(): LocalizedString;
    hide(): void;
    setText(text: LocalizedString): void;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
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
    tooltip?: LocalizedString;
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
 * A property item which supports Vector3 properties
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
 * A property item which supports Vector3 properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<minecraftserver.Vector3>;
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
    setTooltip(tooltip: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates Vector3 limits and clamps the current value.
     *
     */
    updateAxisLimits(limits: { min?: Partial<minecraftserver.Vector3>; max?: Partial<minecraftserver.Vector3> }): void;
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
    max?: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * This callback is called when UI control is changed.
     *
     */
    onChange?: (newValue: minecraftserver.Vector3, oldValue: minecraftserver.Vector3) => void;
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
    tooltip?: LocalizedString;
}

/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * Icon, if any (from resource pack on client)
     *
     */
    icon?: string;
    /**
     * @remarks
     * Modal input context identifier
     *
     */
    inputContextId?: string;
    /**
     * @remarks
     * Localized text label for modal input context
     *
     */
    inputContextLabel?: string;
    /**
     * @remarks
     * Title of the tool
     *
     */
    title: string;
    /**
     * @remarks
     * Tooltip description of the toll
     *
     */
    tooltip?: string;
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
 * Takes the input object (a property bag of values) and bind
 * it to the pane as a data source. UI child elements of the
 * pane will be updated when the values in the object change,
 * and vice versa.
 *
 * @param propertyPane
 * The property pane to bind the property bag to.
 * @param target
 * The property bag to bind to the pane.
 */
export declare function bindDataSource<T extends PropertyBag, Prop extends keyof T & string>(
    propertyPane: IPropertyPane,
    target: T,
): T;
/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 *
 * @param selection
 * the selection to iterator over
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperation(
    selection: Selection,
    operation: (blockLocation: minecraftserver.Vector3) => void,
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
    blockLocationIterator: minecraftserver.BlockLocationIterator,
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;
/**
 * @remarks
 * Returns a string array of the default block types for editor
 * operations. Can be used to further filter blocks.
 *
 * @returns
 * Default allowed block list
 */
export declare function getDefaultAllowBlockList(): string[];
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
 * Small utility for getting a string from an unknown exception
 * type
 *
 */
export declare function stringFromException(e: unknown): string;
export const editor: MinecraftEditor;
