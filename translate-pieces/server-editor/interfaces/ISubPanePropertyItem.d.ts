/* IMPORT */ import { IPropertyItemBase, IPropertyPane, LayoutAlignment, LayoutDirection } from '..';

/**
 * A property item which supports Sub Pane properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPanePropertyItem extends IPropertyItemBase, IPropertyPane {
    /**
     * @remarks
     * Updates layout alignment of the sub pane.
     *
     * @param alignment
     * New layout alignment.
     */
    setAlignment(alignment: LayoutAlignment): void;
    /**
     * @remarks
     * Updates layout direction of the sub pane.
     *
     * @param direction
     * New layout direction.
     */
    setDirection(direction: LayoutDirection): void;
}
