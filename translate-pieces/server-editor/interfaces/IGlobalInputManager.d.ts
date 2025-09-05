/* IMPORT */ import { EditorInputContext, IRegisteredKeyBinding, KeyBinding, KeyBindingInfo, SupportedKeyboardActionTypes } from '..';

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
