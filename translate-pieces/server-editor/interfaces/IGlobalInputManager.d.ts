/* IMPORT */ import { EditorInputContext, InputModifier, KeyboardKey, SupportedKeyboardActionTypes } from '../index';

export interface IGlobalInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        button: KeyboardKey,
        modifier?: InputModifier,
    ): void;
}