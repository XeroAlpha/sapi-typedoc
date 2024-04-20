/* IMPORT */ import { InputModifier, KeyboardKey } from '../index';

/**
 * Define a (key & modifier) pair for the simple tool
 * activation key binding
 */
export interface ISimpleToolKeyPair {
    button: KeyboardKey;
    buttonModifier: InputModifier;
}