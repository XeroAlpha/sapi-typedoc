/* IMPORT */ import { IPropertyPaneOptions, LocalizedString } from '..';

/**
 * The options to create introduction pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IIntroductionPaneOptions extends IPropertyPaneOptions {
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
