/* IMPORT */ import { KeyBinding, KeyBindingInfo } from '../index';

/**
 * Define a key binding for the simple tool activation
 */
export interface ISimpleToolKeyBinding {
    binding: KeyBinding;
    info?: KeyBindingInfo;
}