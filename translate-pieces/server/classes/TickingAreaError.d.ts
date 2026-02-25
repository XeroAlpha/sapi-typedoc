/* IMPORT */ import { TickingAreaErrorReason, TickingAreaManager } from '..';

/**
 * @rc
 * The error returned from invalid {@link TickingAreaManager}
 * method calls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * The specific reason that the error was thrown.
     *
     * @earlyExecution
     *
     */
    readonly reason: TickingAreaErrorReason;
}
