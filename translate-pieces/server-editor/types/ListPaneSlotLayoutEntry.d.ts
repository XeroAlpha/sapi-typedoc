/* IMPORT */ import { LayoutAlignment, LayoutFlex, LayoutSize, ListPaneEntryType } from '..';

export declare type ListPaneSlotLayoutEntry = {
    type: ListPaneEntryType;
    size?: number | LayoutSize | LayoutFlex;
    alignment?: LayoutAlignment;
};
