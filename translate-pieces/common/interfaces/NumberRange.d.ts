/**
 * 表示一个最大/最小值的结构，用于描述数值的取值范围。
 * 
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * @remarks
     * 能够取到的最大值。
     * 
     * Maximum value within a range.
     *
     */
    max: number;
    /**
     * @remarks
     * 能够取到的最小值。
     * 
     * Minimum value within a range.
     *
     */
    min: number;
}