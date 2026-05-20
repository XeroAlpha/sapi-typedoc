/**
 * @rc
 * Thrown when attempting to interact with a form using an
 * invalid or unknown form identifier.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidFormError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the invalid form that was referenced.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
