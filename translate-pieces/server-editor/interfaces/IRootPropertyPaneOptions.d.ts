/* IMPORT */ import { IPropertyPaneOptions, RootPaneLocation } from '..';

/**
 * The options to create a root pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IRootPropertyPaneOptions extends IPropertyPaneOptions {
    /**
     * @remarks
     * Optional content badge identifier associated with the root
     * pane.
     *
     */
    contentBadgeId?: string;
    /**
     * @remarks
     * Pane icon shown in front of the pane header
     *
     */
    icon?: string;
    /**
     * @remarks
     * Determines how root pane will be displayed in the UI.
     *
     */
    location?: RootPaneLocation;
    /**
     * @remarks
     * Determines if the pane is scrollable
     *
     */
    scrollable?: boolean;
}
