/* IMPORT */ import { BasicTooltipContent, IDropdownPropertyItemEntry, IPropertyItemBase, LocalizedString } from '../index';

/**
 * A property item which supports Dropdown properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDropdownPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current selected entry value of the property item list.
     *
     */
    readonly value: number;
    /**
     * @remarks
     * Find a dropdown entry at an index in the dropdown list.
     *
     * @param index
     * Index of the dropdown entry in the list.
     */
    getEntryByIndex(index: number): IDropdownPropertyItemEntry | undefined;
    /**
     * @remarks
     * Find a dropdown entry with a specific value associated with
     * property item.
     *
     * @param value
     * Value of the dropdown entry in the list.
     */
    getEntryByValue(value: number): IDropdownPropertyItemEntry | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Update list of dropdown entries.
     *
     * @param entries
     * New list of updated entries.
     * @param newValue
     * New value value to use for the dropdown.
     */
    updateEntries(entries: IDropdownPropertyItemEntry[], newValue?: number): void;
}