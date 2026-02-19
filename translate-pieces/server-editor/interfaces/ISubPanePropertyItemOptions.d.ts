/* IMPORT */ import { IPropertyPaneOptions, LayoutAlignment, LayoutSize, PaneLayoutType } from '..';

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
    /**
     * @remarks
     * Pane icon shown in front of the pane header
     *
     */
    icon?: string;
    /**
     * @remarks
     * Determines layout of sub pane property items. If undefined,
     * it will default to Vertical.
     *
     */
    layout?: PaneLayoutType;
    /**
     * @remarks
     * Maximum height of the property item.
     *
     */
    maxHeight?: number;
    /**
     * @remarks
     * Enables scrolling for the pane if it has a max height
     * defined.
     *
     */
    scrollable?: boolean;
    /**
     * @remarks
     * Custom width of the property item.
     *
     */
    width?: number | LayoutSize;
}
