/**
 * Thrown when attempting to modify a form after it has already
 * been shown to a player. Form properties cannot be changed
 * while the form is active.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidFormModificationError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the form that was illegally modified after
     * being shown.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
