/* IMPORT */ import { ObservableBoolean, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * Options for configuring a text component (label or header).
 */
export interface TextOptions {
    /**
     * @beta
     */
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the text
     * component is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
