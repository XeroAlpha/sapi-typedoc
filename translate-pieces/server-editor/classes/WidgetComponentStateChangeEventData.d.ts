/* IMPORT */ import { Widget, WidgetComponentBase, WidgetGroup } from '../index';

export class WidgetComponentStateChangeEventData {
    private constructor();
    readonly component: WidgetComponentBase;
    readonly gizmoActivated?: boolean;
    readonly group: WidgetGroup;
    readonly widget: Widget;
}