/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ButtonPropertyItemSupportedActionTypes, IMenuCreationParams, IObservableProp, IPane, ISubPaneHeaderButtonItem, ISubPaneHeaderButtonOptions, ISubPaneHeaderColorItem, ISubPaneHeaderColorOptions } from '..';

/**
 * A fixed-layout header that replaces the default expander
 * header of a sub pane. Only the two dynamic widgets are
 * add*-able; they land in the right region, in call order,
 * just left of the menu.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPaneHeader extends IPane {
    /**
     * @remarks
     * Adds a color picker to the dynamic region of the header.
     *
     * @param value
     * Observable driving the color value.
     * @param options
     * Header-local color options.
     */
    addColorPicker(
        value: IObservableProp<RGBA>,
        options?: ISubPaneHeaderColorOptions,
    ): ISubPaneHeaderColorItem;
    /**
     * @remarks
     * Adds an icon button to the dynamic region of the header.
     *
     * @param action
     * Action to run when the button is clicked.
     * @param options
     * Header-local button options.
     */
    addIconButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options: ISubPaneHeaderButtonOptions,
    ): ISubPaneHeaderButtonItem;
    /**
     * @remarks
     * Replaces the overflow menu entries of the header.
     *
     * @param entries
     * New menu entries.
     */
    setMenu(entries: IMenuCreationParams[]): void;
}
