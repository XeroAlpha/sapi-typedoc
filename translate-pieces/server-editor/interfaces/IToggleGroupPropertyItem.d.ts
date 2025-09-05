/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, IToggleGroupPropertyItemEntry, LocalizedString } from '..';

/**
 * A property item which supports toggle button properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IToggleGroupPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current selected entry value.
     *
     */
    readonly value: number;
    /**
     * @remarks
     * Find a toggle entry at an index in the group.
     *
     * @param index
     * Index of the toggle entry in the list.
     */
    getEntryByIndex(index: number): IToggleGroupPropertyItemEntry | undefined;
    /**
     * @remarks
     * Find a toggle entry with a specific value associated with
     * property item.
     *
     * @param value
     * Value of the toggle entry in the group.
     */
    getEntryByValue(value: number): IToggleGroupPropertyItemEntry | undefined;
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
     * Update list of toggle group entries.
     *
     * @param entries
     * New list of updated entries.
     * @param newValue
     * New value value to use for the selected toggle button.
     */
    updateEntries(entries: IToggleGroupPropertyItemEntry[], newValue?: number): void;
}
