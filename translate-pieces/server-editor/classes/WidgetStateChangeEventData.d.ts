/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Widget, WidgetGroup, WidgetMouseButtonEventData } from '..';

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: Vector3;
    readonly mouseEvent?: WidgetMouseButtonEventData;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}
