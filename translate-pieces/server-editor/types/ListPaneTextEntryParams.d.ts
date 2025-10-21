/* IMPORT */ import { IObservableProp, ListPaneEntryType, LocalizedString } from '..';

/**
 * List Pane Text entry creation parameter
 */
export type ListPaneTextEntryParams = {
    type: ListPaneEntryType.Text;
    value?: IObservableProp<LocalizedString>;
    visible?: boolean;
};
