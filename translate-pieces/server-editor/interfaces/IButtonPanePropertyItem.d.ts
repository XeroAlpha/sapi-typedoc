/* IMPORT */ import { ButtonPropertyItemSupportedActionTypes, IButtonPropertyItem, IButtonPropertyItemOptions, IPane, IPropertyItemBase } from '..';

/**
 * A property item pane which supports multiple buttons
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPanePropertyItem extends IPropertyItemBase, IPane {
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button interaction.
     *
     */
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
}
