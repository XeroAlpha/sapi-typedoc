/* IMPORT */ import { ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @beta
 * Options for configuring an image component.
 */
export interface ImageOptions {
    /**
     * @remarks
     * Sets a callback to be executed when the image is clicked.
     *
     */
    onClick?: () => void;
    /**
     * @remarks
     * Sets a tooltip to be displayed when the user hovers over the
     * image.
     *
     */
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the image
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
    /**
     * @remarks
     * Sets the width of the image as a percentage of the width of
     * the form. 1 is the entire form width, 0.5 is half of the
     * form width. Greater than 1 or less than/equal to 0 will
     * become 1.
     *
     */
    width?: number | ObservableNumber;
}
