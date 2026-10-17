/* IMPORT */ import { ObservableBoolean } from '..';

/**
 * Options for configuring a CustomForm.
 */
export interface CustomFormOptions {
    /**
     * @remarks
     * Controls whether the form's top-right close button is
     * visible. Defaults to true.
     *
     */
    topCloseButtonVisible?: boolean | ObservableBoolean;
}
