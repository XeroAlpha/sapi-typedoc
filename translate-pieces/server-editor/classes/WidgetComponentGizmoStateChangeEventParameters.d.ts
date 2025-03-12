/* IMPORT */ import { Widget, WidgetComponentGizmo, WidgetGizmoEventType } from '../index';

export class WidgetComponentGizmoStateChangeEventParameters {
    private constructor();
    readonly component: WidgetComponentGizmo;
    readonly eventType?: WidgetGizmoEventType;
    readonly widget: Widget;
}