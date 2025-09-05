/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports String properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IStringPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string>;
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
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}
