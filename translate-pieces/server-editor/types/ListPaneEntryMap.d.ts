/* IMPORT */ import { IListPaneBoolEntry, IListPaneEntry, IListPaneImageEntry, IListPaneTextEntry, ListPaneEntryType } from '..';

/**
 * List Pane entry type map
 */
export type ListPaneEntryMap = {
    [ListPaneEntryType.Button]: IListPaneEntry;
    [ListPaneEntryType.Bool]: IListPaneBoolEntry;
    [ListPaneEntryType.Image]: IListPaneImageEntry;
    [ListPaneEntryType.Text]: IListPaneTextEntry;
};
