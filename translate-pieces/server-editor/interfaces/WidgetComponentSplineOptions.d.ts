/* IMPORT */ import { SplineType, Widget, WidgetComponentBaseOptions } from '../index';

export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}