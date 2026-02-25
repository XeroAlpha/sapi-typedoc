/* IMPORT */ import { LocatorBarErrorReason } from '..';

/**
 * @beta
 * Error thrown when a locator bar operation fails. Contains a
 * reason code indicating the specific cause of the error.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * The {@link LocatorBarErrorReason} code that indicates why
     * the locator bar operation failed.
     *
     * @earlyExecution
     *
     */
    readonly reason: LocatorBarErrorReason;
}
