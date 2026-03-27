/**
 * An error thrown when a platform-level HTTP error occurs.
 * Information provided in this class may be useful for
 * diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalHttpRequestError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorMessage: string;
}
