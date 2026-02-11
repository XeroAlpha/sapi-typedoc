/* IMPORT */ import { BasicTooltipContent, ICollectionTreeEntryStringItem, IObservableProp, LocalizedString } from '..';

/**
 * Parameters to create string field in a collection tree entry
 */
export type ICollectionTreeEntryStringItemParams = {
    value: IObservableProp<string>;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    enabled?: boolean;
    visible?: boolean;
    onChange?: (newValue: string, oldValue: string, item: ICollectionTreeEntryStringItem) => void;
};
