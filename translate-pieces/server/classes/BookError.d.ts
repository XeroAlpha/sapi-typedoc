/* IMPORT */ import { BookErrorReason } from '..';

/**
 * Errors that can be thrown when using {@link
 * ItemBookComponent}.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
    /**
     * @remarks
     * The reason for the error.
     *
     * @earlyExecution
     *
     */
    reason: BookErrorReason;
}
