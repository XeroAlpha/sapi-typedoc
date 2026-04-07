/**
 * @beta
 * An enum representing the errors that can occur during text
 * filtering. This is used to provide more context about the
 * filtering process.
 */
export declare enum TextFilteringError {
    /**
     * @remarks
     * The text was not filtered because the player disabled text
     * filtering in their settings.
     *
     */
    DisabledByPlayer = 'DisabledByPlayer',
    /**
     * @remarks
     * The text was not filtered because the service is
     * unreachable. This can occur if there are network issues or
     * if the service is down for maintenance.
     *
     */
    TextProcessorServiceUnreachable = 'TextProcessorServiceUnreachable',
    /**
     * @remarks
     * An unknown error occurred during text filtering. This can
     * occur if there is an unexpected issue with the text
     * filtering service or if the service returns an error that is
     * not categorized under the other error types.
     *
     */
    Unknown = 'Unknown',
}
