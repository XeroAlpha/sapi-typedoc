/* IMPORT */ import { LayoutAlignment, LayoutFlex, LayoutSize } from '..';

/**
 * Optional style arguments for pane items
 */
export declare type PaneItemStyle = {
    width?: number | LayoutSize | LayoutFlex;
    minWidth?: number | LayoutSize;
    maxWidth?: number | LayoutSize;
    verticalAlignment?: LayoutAlignment;
};
