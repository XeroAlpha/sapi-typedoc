/* IMPORT */ import { Widget, WidgetGroup, minecraftserver } from '../index';

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}