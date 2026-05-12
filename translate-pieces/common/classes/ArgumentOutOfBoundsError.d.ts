/**
 * This type of error is thrown when a parameter to a method or
 * property is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Max expected value for the condition.
     *
     * @earlyExecution
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * Min expected value for the condition.
     *
     * @earlyExecution
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * Passed-in value for the argument.
     *
     * @earlyExecution
     *
     */
    readonly value?: number;
}
