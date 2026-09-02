/* IMPORT */ import { KeyBindingInfo } from '..';

/**
 * Built-in control categories for use with bindingCategory in
 * {@link KeyBindingInfo}. Pass any `CoreInputBindingCategory`
 * value or a custom string to categorize a binding.
 */
export declare enum CoreInputBindingCategory {
    Camera = 'editor:camera',
    CursorMovement = 'editor:cursorMovement',
    Fly = 'editor:fly',
    General = 'editor:general',
    Hotbar = 'editor:hotbar',
    MakeSelection = 'editor:makeSelection',
    Modes = 'editor:modes',
    Move = 'editor:move',
    Movement = 'editor:movement',
    MoveSelection = 'editor:moveSelection',
    Nudge = 'editor:nudge',
    Offset = 'editor:offset',
    Operations = 'editor:operations',
    Paste = 'editor:paste',
    PastePreviewManipulation = 'editor:pastePreviewManipulation',
    SizeSelection = 'editor:sizeSelection',
    ToolActivation = 'editor:toolActivation',
    ToolPanels = 'editor:toolPanels',
    TrimActions = 'editor:trimActions',
    Widget = 'editor:widget',
    Workbench = 'editor:workbench',
}
