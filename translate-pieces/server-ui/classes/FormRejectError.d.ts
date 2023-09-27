export class FormRejectError extends Error {
    private constructor();
    reason: FormRejectReason;
}