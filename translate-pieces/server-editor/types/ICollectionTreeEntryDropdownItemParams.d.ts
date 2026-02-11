/* IMPORT */ import { BasicTooltipContent, ICollectionTreeEntryDropdownItem, ICollectionTreeEntryDropdownItemMenuOption, IObservableProp, LocalizedString } from '..';

/**
 * Parameters to create dropdown in a collection tree entry
 */
export type ICollectionTreeEntryDropdownItemParams = {
    value: IObservableProp<string>;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    enabled?: boolean;
    visible?: boolean;
    menuOptions?: ICollectionTreeEntryDropdownItemMenuOption[];
    onChange?: (newValue: string, oldValue: string, item: ICollectionTreeEntryDropdownItem) => void;
};
