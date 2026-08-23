/* IMPORT */ import { IObservableProp } from '..';

/**
 * Options for the prebaked multiselect checkbox displayed at
 * the start of a header sub pane.
 */
export interface ISubPaneHeaderCheckboxOptions {
    /**
     * @remarks
     * Called when the user toggles the checkbox.
     *
     */
    onChange?: (checked: boolean) => void;
    /**
     * @remarks
     * Observable driving the checked state of the checkbox.
     *
     */
    value: IObservableProp<boolean>;
}
