/* IMPORT */ import { FormRejectReason } from '../index';

export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: FormRejectReason;
}