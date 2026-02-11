/**
 * An error thrown when an HTTP request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestBodyTooLargeError extends Error {
    private constructor();
    /**
     * @remarks
     * Configured maximum body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly maxBytes: number;
    /**
     * @remarks
     * Request body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly providedBytes: number;
}
