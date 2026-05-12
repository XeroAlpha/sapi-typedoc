/* IMPORT */ import { ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @beta
 * Options for configuring a slider component.
 */
export interface SliderOptions {
    /**
     * @remarks
     * Descriptive text shown around the slider to provide
     * additional context.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When true or bound to a true ObservableBoolean, the slider
     * is shown but cannot be moved.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @remarks
     * The increment amount between each slider step. Defaults to 1
     * if not specified.
     *
     */
    step?: number | ObservableNumber;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the slider
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
