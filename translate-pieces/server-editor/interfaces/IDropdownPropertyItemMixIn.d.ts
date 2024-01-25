/* IMPORT */ import { IDropdownItem } from '../index';

/**
 * Dropdown property item specific functionality
 */
export interface IDropdownPropertyItemMixIn {
    /**
     * @remarks
     * Used to update the Dropdown options in the control. Will
     * trigger onChange with -1 as the old value due to the list
     * changing entries.
     *
     */
    updateDropdownItems(dropdownItems: IDropdownItem[], newValue: number): void;
}