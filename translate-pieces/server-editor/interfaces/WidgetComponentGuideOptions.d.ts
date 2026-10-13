/* IMPORT */ import { WidgetComponentBaseOptions, WidgetGuideSensorBlockFilter, WidgetGuideSensorDirection } from '..';

/**
 * Options for widget guide sensors, including probe directions
 * and which blocks stop the rays.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {
    /**
     * @remarks
     * Selects which blocks stop the guide rays. Defaults to
     * WidgetGuideSensorBlockFilter.Any. Boundary walls are
     * unaffected by this option.
     *
     */
    blockFilter?: WidgetGuideSensorBlockFilter;
    directions?: WidgetGuideSensorDirection;
}
