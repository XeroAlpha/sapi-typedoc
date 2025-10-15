/* IMPORT */ import { BasicTooltipContent, IListPaneBoolEntry, IObservableProp, ListPaneEntryType } from '..';

/**
 * List Pane Bool entry creation parameter
 */
export type ListPaneBoolEntryParams = {
    type: ListPaneEntryType.Bool;
    value: IObservableProp<boolean>;
    tooltip?: BasicTooltipContent;
    icon?: string;
    enabled?: boolean;
    visible?: boolean;
    onChange?: (newValue: boolean, oldValue: boolean, entry: IListPaneBoolEntry) => void;
};
