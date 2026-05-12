/**
 * @beta
 * A message that can be sent to the client. This is a subset
 * of the RawMessage type, and is used for UI messages.
 */
export interface UIRawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: UIRawMessage[];
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a localization string where, if the client has an
     * available resource in the players' language which matches
     * the localization string, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * Arguments for the localization string. Can be either an
     * array of strings or UIRawMessage containing an array of raw
     * text objects.
     *
     */
    with?: string[] | UIRawMessage;
}
