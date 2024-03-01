/* IMPORT */ import { Widget, WidgetGroup } from '../index';

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly isSelected?: boolean;
    readonly isVisible?: boolean;
    readonly widget: Widget;
}