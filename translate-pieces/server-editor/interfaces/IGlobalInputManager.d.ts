/* IMPORT */ import { EditorInputContext, IRegisteredKeyBinding, KeyBinding, KeyBindingInfo, MouseCursorIconType, SupportedKeyboardActionTypes } from '..';

export interface IGlobalInputManager {
    /**
     * @remarks
     * Register a named control category for display in the Control
     * Help panel.
     *
     * @param id
     * Unique category identifier (use a {@link
     * CoreInputBindingCategory} value or a custom string).
     * @param label
     * Localized display name shown as the group heading.
     * @param order
     * Numeric sort order; lower values appear first.
     */
    registerBindingCategory(id: string, label: string, order: number): void;
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
    /**
     * @remarks
     * Set or clear the mouse cursor icon for a given editor input
     * context layer.
     *
     * @param contextId
     * The editor input context id (maps to EditorInputContext).
     * @param mouseIcon
     * The MouseCursorIconType, or null to clear.
     * @throws
     *  *
     */
    setMouseIcon(contextId: EditorInputContext, mouseIcon: MouseCursorIconType | undefined): void;
}
