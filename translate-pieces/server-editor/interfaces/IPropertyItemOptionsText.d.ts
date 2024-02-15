/* IMPORT */ import { IPropertyItemOptions } from '../index';

/**
 * Localization string id and border enable boolean for
 * multiline text component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyItemOptionsText extends IPropertyItemOptions {
    border: boolean;
    valueStringId: string;
}