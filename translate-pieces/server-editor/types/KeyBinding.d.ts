/* IMPORT */ import { InputModifier, KeyboardKey } from '..';

/**
 * Keyboard binding properties.
 */
export type KeyBinding = {
    key: KeyboardKey;
    modifier?: InputModifier;
};
