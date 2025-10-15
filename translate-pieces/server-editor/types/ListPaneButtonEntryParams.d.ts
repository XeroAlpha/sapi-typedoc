/* IMPORT */ import { BasicTooltipContent, ButtonPropertyItemVariant, IListPaneButtonEntry, ListPaneEntryType, LocalizedString } from '..';

/**
 * List Pane Button entry creation parameter
 */
export type ListPaneButtonEntryParams = {
    type: ListPaneEntryType.Button;
    onClick: (entry: IListPaneButtonEntry) => void;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    variant?: ButtonPropertyItemVariant;
    icon?: string;
    enabled?: boolean;
    visible?: boolean;
};
