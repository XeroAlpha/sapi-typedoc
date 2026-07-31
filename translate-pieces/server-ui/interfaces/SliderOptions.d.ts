/* IMPORT */ import { ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
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
     * @beta
     * @remarks
     * If set, displays the number of digits after the decimal
     * point in fixed-point notation. For example, if set to 2, the
     * value 3.14159 will be displayed as 3.14.
     *
     */
    fixedFormatDigits?: number | ObservableNumber;
    /**
     * @remarks
     * The increment amount between each slider step. Defaults to 1
     * if not specified.
     *
     */
    step?: number | ObservableNumber;
    /**
     * @beta
     * @remarks
     * Text shown in a tooltip when the player hovers over the
     * slider.
     *
     */
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the slider
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
