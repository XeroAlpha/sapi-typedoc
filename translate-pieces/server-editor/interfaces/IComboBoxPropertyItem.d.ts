/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Combo Box properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IComboBoxPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: string;
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
}
