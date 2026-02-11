/**
 * An error thrown when HTTPS is required but a non-HTTPS URI
 * was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpsOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected for not using HTTPS.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}
