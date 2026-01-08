/* IMPORT */ import { BasicTooltipContent, IDropdownPropertyItemEntry, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Dropdown property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDropdownPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of dropdown entries associated with the property item.
     * If undefined, list will be empty.
     *
     */
    entries?: IDropdownPropertyItemEntry[];
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Displays label inline. If undefined, it will be true.
     *
     */
    inlineLabel?: boolean;
    /**
     * @remarks
     * Determines how many entries can be displayed before
     * scrolling is enabled, based on available space.
     *
     */
    maxVisibleEntries?: number;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number, items: IDropdownPropertyItemEntry[]) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
}
