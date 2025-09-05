/* IMPORT */ import { CustomCommandErrorReason } from '..';

/**
 * Error object thrown when CustomCommandRegistry errors occur.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * Reason for the error.
     *
     * @earlyExecution
     *
     */
    reason: CustomCommandErrorReason;
}
