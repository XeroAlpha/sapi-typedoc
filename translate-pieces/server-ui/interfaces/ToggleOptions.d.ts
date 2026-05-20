/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @rc
 * Options for configuring a toggle component.
 */
export interface ToggleOptions {
    /**
     * @remarks
     * Descriptive text shown around the toggle to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When true or bound to a true ObservableBoolean, the toggle
     * is shown but cannot be interacted with.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the toggle
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
