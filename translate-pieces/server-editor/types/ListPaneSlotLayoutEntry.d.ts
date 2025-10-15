/* IMPORT */ import { LayoutAlignment, LayoutSize, ListPaneEntryType } from '..';

export declare type ListPaneSlotLayoutEntry = {
    type: ListPaneEntryType;
    size?: number | LayoutSize | 'shrink' | 'grow';
    alignment?: LayoutAlignment;
};
