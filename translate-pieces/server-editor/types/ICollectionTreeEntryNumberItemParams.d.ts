/* IMPORT */ import { BasicTooltipContent, ICollectionTreeEntryNumberItem, IObservableProp, LocalizedString } from '..';

/**
 * Parameters to create number field in a collection tree entry
 */
export type ICollectionTreeEntryNumberItemParams = {
    value: IObservableProp<number>;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    enabled?: boolean;
    visible?: boolean;
    min?: number;
    max?: number;
    isInteger?: boolean;
    onChange?: (newValue: number, oldValue: number, item: ICollectionTreeEntryNumberItem) => void;
};
