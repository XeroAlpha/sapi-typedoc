/**
 * 此类错误表示调用的方法参数或待设置的属性超出允许的范围。
 *
 * This type of error is thrown when a parameter to a method or
 * property is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * 参数允许的最大值。
     *
     * Max expected value for the condition.
     */
    maxValue: number;
    /**
     * @remarks
     * 参数允许的最小值。
     *
     * Min expected value for the condition.
     */
    minValue: number;
    /**
     * @remarks
     * 传入参数的值。
     *
     * Passed-in value for the argument.
     */
    value: number;
}