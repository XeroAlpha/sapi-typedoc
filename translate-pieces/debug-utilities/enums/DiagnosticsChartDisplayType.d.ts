/**
 * The display type for the chart (e.g. line chart, stacked
 * line chart, stacked bar chart).
 */
export enum DiagnosticsChartDisplayType {
    /**
     * @remarks
     * Represents a simple line graph chart where the X axis is
     * time and the Y axis is the user driven data.
     *
     */
    LineChart = 0,
    /**
     * @remarks
     * Indicates that the view or stat has not been registered.
     *
     */
    StackedLineChart = 1,
    /**
     * @remarks
     * Represents a line graph chart where the X axis is time and
     * the Y axis is a collection of multiple the user driven data
     * entries that are visually stacked on top of each other.
     *
     */
    StackedBarChart = 2,
}
