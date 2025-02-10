/* IMPORT */ import { IBoolPropertyItem, IBoolPropertyItemOptions, IButtonPropertyItem, IButtonPropertyItemOptions, IObservableProp, IPane, IPropertyItemBase, NoArgsAction, RegisteredAction } from '../index';

/**
 * A sub pane for modal control elements.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IModalControlPane extends IPane {
    /**
     * @remarks
     * Adds a togglable boolean item to the pane.
     *
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button activation.
     *
     */
    addButton(
        action: (() => void) | RegisteredAction<NoArgsAction>,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItemBase;
}