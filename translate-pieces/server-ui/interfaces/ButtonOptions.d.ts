/* IMPORT */ import { ImageDetails, ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * Options for configuring a button component.
 */
export interface ButtonOptions {
    /**
     * @remarks
     * When true or bound to a true ObservableBoolean, the button
     * is shown but cannot be pressed.
     *
     */
    disabled?: boolean | ObservableBoolean;
    /**
     * @beta
     * @remarks
     * Details of an image to display alongside the button label.
     *
     */
    imageDetails?: ImageDetails;
    /**
     * @remarks
     * Text shown in a tooltip when the player hovers over the
     * button.
     *
     */
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the button
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
