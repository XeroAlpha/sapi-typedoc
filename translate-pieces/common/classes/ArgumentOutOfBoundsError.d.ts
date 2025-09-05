/**
 * This type of error is thrown when a parameter to a method or
 * property is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * Max expected value for the condition.
     *
     */
    maxValue: number;
    /**
     * @remarks
     * Min expected value for the condition.
     *
     */
    minValue: number;
    /**
     * @remarks
     * Passed-in value for the argument.
     *
     */
    value: number;
    index: number;
}
