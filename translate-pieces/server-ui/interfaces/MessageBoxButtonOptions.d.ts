/* IMPORT */ import { ImageDetails, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @beta
 * Options for configuring a message box button.
 */
export interface MessageBoxButtonOptions {
    /**
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
}
