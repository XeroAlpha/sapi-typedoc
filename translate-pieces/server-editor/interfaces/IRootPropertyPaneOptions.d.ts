/* IMPORT */ import { IPropertyPaneOptions, IRootPropertyPaneHeaderAction } from '..';

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
     * Pane icon shown in front of the pane header
     *
     */
    icon?: string;
}
