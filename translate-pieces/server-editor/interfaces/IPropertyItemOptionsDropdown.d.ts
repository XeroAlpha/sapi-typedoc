/* IMPORT */ import { IDropdownItem, IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsDropdown extends IPropertyItemOptions {
    /**
     * @remarks
     * The possible options for the drop down control.
     *
     */
    dropdownItems: IDropdownItem[];
}