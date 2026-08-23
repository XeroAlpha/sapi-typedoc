/* IMPORT */ import { DiagnosticsChartDisplayType } from '..';

/**
 * Configuration options for registering a chart-based
 * diagnostics view.
 */
export interface DiagnosticsChartViewOptions {
    /**
     * @remarks
     * The display type for the chart (e.g. line chart, stacked
     * line chart, stacked bar chart).
     *
     */
    chartType: DiagnosticsChartDisplayType;
    /**
     * @remarks
     * Optional target value to display as a reference line on the
     * chart.
     *
     */
    targetValue?: number;
    /**
     * @remarks
     * Optional number of ticks to display along the chart's time
     * axis.
     *
     */
    tickRange?: number;
    /**
     * @remarks
     * Optional label for the chart's Y axis.
     *
     */
    yAxisLabel?: string;
}
