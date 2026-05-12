/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @beta
 * Options for configuring a text field component.
 */
export interface TextFieldOptions {
    /**
     * @remarks
     * Descriptive text shown around the text field label to
     * provide additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When true or bound to a true ObservableBoolean, the text
     * field is shown but cannot be edited.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the text
     * field is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
