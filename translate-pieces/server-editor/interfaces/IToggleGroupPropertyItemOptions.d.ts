/* IMPORT */ import { BasicTooltipContent, IPropertyItemOptionsBase, IToggleGroupPropertyItemEntry, LocalizedString } from '../index';

/**
 * Optional properties for Toggle Group property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IToggleGroupPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of toggle button entries associated with the property
     * item. If undefined, list will be empty.
     *
     */
    entries?: IToggleGroupPropertyItemEntry[];
    /**
     * @remarks
     * If true toggle buttons will be displayed vertically with
     * their labels. If undefined, labels will be hidden.
     *
     */
    hiddenEntryLabels?: boolean;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number, items: IToggleGroupPropertyItemEntry[]) => void;
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