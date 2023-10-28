/**
 * 表示参数越界。提示传入的参数超出范围。
 */
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /** 参数允许的最大值。 */
    maxValue: number;
    /** 参数允许的最小值。 */
    minValue: number;
    /** 当前参数的值。 */
    value: number;
}