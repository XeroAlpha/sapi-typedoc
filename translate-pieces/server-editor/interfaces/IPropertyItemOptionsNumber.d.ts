/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsNumber extends IPropertyItemOptions {
    /**
     * @remarks
     * If we should treat the number as floating point. By default
     * is false
     *
     */
    isFloat?: boolean;
    /**
     * @remarks
     * The min possible value for the number.
     *
     */
    max?: number;
    /**
     * @remarks
     * The max possible value for the number.
     *
     */
    min?: number;
    /**
     * @remarks
     * If UI should show slider control.
     *
     */
    showSlider?: boolean;
}