/* IMPORT */ import { MouseActionType, MouseInputType, MouseModifiers } from '../index';

/**
 * Mouse properties that provide additional information from
 * client event handling
 */
export declare type MouseProps = {
    mouseAction: MouseActionType;
    modifiers: MouseModifiers;
    inputType: MouseInputType;
};