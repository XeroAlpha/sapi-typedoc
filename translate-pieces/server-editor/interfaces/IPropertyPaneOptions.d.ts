/* IMPORT */ import { LocalizedString, TooltipInteractiveContent } from '../index';

/**
 * Common optional properties used for constructing a property
 * pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Optional information tooltip for the pane to be displayed on
     * the header.
     *
     */
    infoTooltip?: TooltipInteractiveContent;
    /**
     * @remarks
     * Localized title of the property pane
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Unique identifier for the pane
     *
     */
    uniqueId?: string;
}