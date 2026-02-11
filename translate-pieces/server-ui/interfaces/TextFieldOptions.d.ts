/* IMPORT */ import { CustomForm, Observable, UIRawMessage } from '..';

/**
 * @beta
 * The options for including a textfield in {@link CustomForm}.
 */
export interface TextFieldOptions {
    /**
     * @remarks
     * The description for this text field, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this text field is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this text field is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}
