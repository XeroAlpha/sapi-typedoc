/* IMPORT */ import { CustomComponentNameErrorReason } from '..';

export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: CustomComponentNameErrorReason;
}
