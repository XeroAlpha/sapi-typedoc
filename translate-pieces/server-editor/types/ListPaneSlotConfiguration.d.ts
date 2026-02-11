/* IMPORT */ import { ListPaneSlotLayoutEntry, ListPaneSlotLayoutSections, ListPaneSlotVariant } from '..';

export declare type ListPaneSlotConfiguration = {
    height: number;
    columns?: number;
    clickable?: boolean;
    outline?: boolean;
    variant?: ListPaneSlotVariant;
    entryLayout: ListPaneSlotLayoutEntry[] | ListPaneSlotLayoutSections;
};
