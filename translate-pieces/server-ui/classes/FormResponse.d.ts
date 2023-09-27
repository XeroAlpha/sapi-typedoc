/**
 * Base type for a form response.
 */
export class FormResponse {
    private constructor();
    /**
     * @beta
     * @remarks
     * Contains additional details as to why a form was canceled.
     *
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * @beta
     * @remarks
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     *
     */
    readonly canceled: boolean;
}