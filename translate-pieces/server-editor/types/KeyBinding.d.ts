/* IMPORT */ import { InputModifier, KeyboardKey } from '../index';

/**
 * Keyboard binding properties.
 */
export type KeyBinding = {
    key: KeyboardKey;
    modifier?: InputModifier;
};