/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Widget, WidgetComponentBoundingBox, WidgetGizmoEventType } from '..';

export class WidgetComponentBoundingBoxStateChangeEventParameters {
    private constructor();
    readonly boundsOffset?: Vector3;
    readonly boundsSize?: Vector3;
    readonly component: WidgetComponentBoundingBox;
    readonly eventType: WidgetGizmoEventType;
    readonly widget: Widget;
}
