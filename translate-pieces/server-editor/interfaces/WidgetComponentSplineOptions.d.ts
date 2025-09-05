/* IMPORT */ import { SplineType, Widget, WidgetComponentBaseOptions } from '..';

export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}
