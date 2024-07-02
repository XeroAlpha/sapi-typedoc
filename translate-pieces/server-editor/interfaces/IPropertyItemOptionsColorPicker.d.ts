/* IMPORT */ import { ColorPickerVariant, IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsColorPicker extends IPropertyItemOptions {
    showAlpha?: boolean;
    variant?: ColorPickerVariant;
}