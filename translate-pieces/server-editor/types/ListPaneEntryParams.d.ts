/* IMPORT */ import { ListPaneBoolEntryParams, ListPaneButtonEntryParams, ListPaneImageEntryParams, ListPaneTextEntryParams } from '..';

/**
 * List Pane entry creation parameters
 */
export type ListPaneEntryParams =
    | ListPaneButtonEntryParams
    | ListPaneBoolEntryParams
    | ListPaneTextEntryParams
    | ListPaneImageEntryParams;
