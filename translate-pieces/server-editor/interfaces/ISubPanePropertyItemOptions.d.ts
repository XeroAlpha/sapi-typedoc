/* IMPORT */ import { IPropertyPaneOptions, LayoutAlignment, LayoutDirection } from '..';

/**
 * Optional properties for Sub Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPanePropertyItemOptions extends IPropertyPaneOptions {
    /**
     * @remarks
     * Alignment of property items within the pane of the property
     * pane. If undefined, it will default to Left.
     *
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Initial expander state of sub pane. If undefined, it will
     * default to false.
     *
     */
    collapsed?: boolean;
    /**
     * @remarks
     * Determines layout direction of sub pane property items. If
     * undefined, it will default to Vertical.
     *
     */
    direction?: LayoutDirection;
    /**
     * @remarks
     * Determines if sub pane should have an expander. If
     * undefined, it will default to true.
     *
     */
    hasExpander?: boolean;
    /**
     * @remarks
     * Adds additional margins to sub pane. If undefined, it will
     * default to true.
     *
     */
    hasMargins?: boolean;
}
