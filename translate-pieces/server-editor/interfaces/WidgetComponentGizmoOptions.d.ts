/* IMPORT */ import { Axis, WidgetComponentBaseOptions } from '../index';

export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
}