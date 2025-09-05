/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports boolean properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: boolean;
    /**
     * @remarks
     * Sets title of the property item.
     *
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Sets tooltip description of the property item.
     *
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}
