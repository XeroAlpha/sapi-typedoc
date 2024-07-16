/* IMPORT */ import { LayoutDirection } from '../index';

/**
 * The options to create a pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Layout direction for sub panes
     *
     */
    direction?: LayoutDirection;
    /**
     * @remarks
     * Localized title of the property pane
     *
     */
    title: string;
}