/* IMPORT */ import { BookErrorReason } from '../index';

/**
 * @beta
 * The error called if page content being set on an {@link
 * ItemBookComponent} are invalid ie. exceeding the maximum
 * page length.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * The index of the page requested to be modified.
     *
     * @earlyExecution
     *
     */
    pageIndex: number;
    /**
     * @remarks
     * The reason for the error.
     *
     * @earlyExecution
     *
     */
    reason: BookErrorReason;
}