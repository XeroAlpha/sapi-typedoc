/* IMPORT */ import { LocalizedString, TooltipInteractiveContentDescription } from '../index';

/**
 * Content properties to display interactive tooltips
 */
export declare type TooltipInteractiveContent = {
    title?: LocalizedString;
    description?: TooltipInteractiveContentDescription[];
};