/* IMPORT */ import { Vector3, Widget, WidgetComponentBoundingBox, WidgetGizmoEventType } from '../index';

export class WidgetComponentBoundingBoxStateChangeEventParameters {
    private constructor();
    readonly boundsOffset?: Vector3;
    readonly boundsSize?: Vector3;
    readonly component: WidgetComponentBoundingBox;
    readonly eventType: WidgetGizmoEventType;
    readonly widget: Widget;
}