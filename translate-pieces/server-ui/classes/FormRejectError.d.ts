/* IMPORT */ import { FormRejectReason } from '..';

export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: FormRejectReason;
}
