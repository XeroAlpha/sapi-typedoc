/* IMPORT */ import { CustomWidget, WidgetGroup, minecraftserver } from '../index';

export class CustomWidgetMoveEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly rotation?: minecraftserver.Vector2;
    readonly widget: CustomWidget;
}