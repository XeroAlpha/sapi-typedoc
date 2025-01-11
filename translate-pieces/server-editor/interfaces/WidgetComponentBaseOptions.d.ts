/* IMPORT */ import { WidgetComponentStateChangeEventData, minecraftserver } from '../index';

export interface WidgetComponentBaseOptions {
    lockToSurface?: boolean;
    offset?: minecraftserver.Vector3;
    stateChangeEvent?: (arg0: WidgetComponentStateChangeEventData) => void;
    visible?: boolean;
}