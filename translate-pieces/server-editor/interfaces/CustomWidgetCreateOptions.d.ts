/* IMPORT */ import { CustomWidgetMoveEventData, WidgetCreateOptions, minecraftserver } from '../index';

export interface CustomWidgetCreateOptions extends WidgetCreateOptions {
    moveEvent?: (arg: CustomWidgetMoveEventData) => void;
    showTextOnlyWhenSelected?: boolean;
    text?: string;
    visualOffset?: minecraftserver.Vector3;
}