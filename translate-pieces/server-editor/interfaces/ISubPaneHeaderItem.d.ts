/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase } from '..';

/**
 * Common base for the dynamic widgets of a sub pane header.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPaneHeaderItem extends IPropertyItemBase {
    /**
     * @remarks
     * Updates the tooltip of the header item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}
