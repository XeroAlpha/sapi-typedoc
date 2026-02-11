/**
 * An error thrown when an HTTP request targets a URI that is
 * not in the configured allow list.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestNotAllowedError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected because it is not allowed.
     *
     * @earlyExecution
     *
     */
    uri: string;
}
