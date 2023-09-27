export interface IGlobalInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        button: KeyboardKey,
        modifier?: InputModifier,
    ): void;
}