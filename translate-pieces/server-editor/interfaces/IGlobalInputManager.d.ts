/* IMPORT */ import { EditorInputContext, KeyBinding, KeyBindingInfo, SupportedKeyboardActionTypes } from '../index';

export interface IGlobalInputManager {
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): void;
}