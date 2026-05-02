/* IMPORT */ import { LocalizedString, TooltipInteractiveContentDescriptionItem } from '..';

/**
 * Content properties to display interactive tooltips
 */
export type TooltipInteractiveContent = {
    title?: LocalizedString;
    description?: (TooltipInteractiveContentDescriptionItem | TooltipInteractiveContentDescriptionItem[])[];
};
