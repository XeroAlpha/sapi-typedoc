/* IMPORT */ import { CustomComponentNameErrorReason } from '..';

export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}
