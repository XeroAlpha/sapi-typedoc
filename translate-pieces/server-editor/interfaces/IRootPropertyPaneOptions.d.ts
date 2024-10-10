/* IMPORT */ import { IPropertyPaneOptions, IRootPropertyPaneHeaderAction, TooltipInteractiveContent } from '../index';

/**
 * The options to create a root pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IRootPropertyPaneOptions extends IPropertyPaneOptions {
    /**
     * @remarks
     * Optional action button to be displayed on the header.
     *
     */
    headerAction?: IRootPropertyPaneHeaderAction;
    /**
     * @remarks
     * Optional information tooltip for the pane to be displayed on
     * the header.
     *
     */
    infoTooltip?: TooltipInteractiveContent;
}