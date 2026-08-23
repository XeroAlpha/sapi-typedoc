/* IMPORT */ import { IMenuCreationParams, ISubPaneHeaderCheckboxOptions } from '..';

/**
 * Options to create a fixed-layout header for a sub pane.
 */
export interface ISubPaneHeaderOptions {
    /**
     * @remarks
     * Prebaked left: optional multiselect checkbox, rendered
     * before the chevron.
     *
     */
    checkbox?: ISubPaneHeaderCheckboxOptions;
    /**
     * @remarks
     * If false, clicking the non-widget header background does not
     * toggle expand. Default true.
     *
     */
    clickToExpand?: boolean;
    /**
     * @remarks
     * Prebaked right: optional overflow menu entries.
     *
     */
    menu?: IMenuCreationParams[];
    /**
     * @remarks
     * Called when a header menu item is clicked.
     *
     */
    onMenuClicked?: (menuId: string) => void;
}
