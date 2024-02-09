/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsBool extends IPropertyItemOptions {
    /**
     * @remarks
     * controls appearance of the boolean. checkbox or toggleswitch
     *
     */
    displayAsToggleSwitch?: boolean;
}