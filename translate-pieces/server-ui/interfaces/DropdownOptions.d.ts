/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * Options for configuring a dropdown component.
 */
export interface DropdownOptions {
    /**
     * @remarks
     * Descriptive text shown around the dropdown to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When true or bound to a true ObservableBoolean, the dropdown
     * is shown but cannot be changed.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the
     * dropdown is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
