/* IMPORT */ import { ButtonOptions, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * Data used to configure a button.
 */
export interface ButtonData {
    /**
     * @remarks
     * The text label to display on the button.
     *
     */
    label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * A callback function that is invoked when the player clicks
     * the button.
     *
     */
    onClick: () => void;
    /**
     * @remarks
     * Optional configuration for the button, such as a tooltip,
     * disabled state, image, or visibility.
     *
     */
    options?: ButtonOptions;
}
