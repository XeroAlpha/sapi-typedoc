/* IMPORT */ import { IListPaneSlotOptions, ListPaneEntryParams } from '..';

/**
 * Properties required to create a slot
 */
export type ListPaneSlotCreationProps = {
    entries: ListPaneEntryParams[];
    options?: IListPaneSlotOptions;
};
