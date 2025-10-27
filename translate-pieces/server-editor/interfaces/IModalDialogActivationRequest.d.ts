/**
 * Represents modal dialog state for the specific activation
 * request
 */
export interface IModalDialogActivationRequest {
    /**
     * @remarks
     * Unique identifier for the request
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Determines if the request is still active
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Cancels the request if it's still active
     *
     */
    cancel(): void;
}
