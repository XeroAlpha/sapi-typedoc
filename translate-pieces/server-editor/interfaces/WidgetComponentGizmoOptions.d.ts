/* IMPORT */ import { Axis, WidgetComponentBaseOptions, WidgetComponentGizmoStateChangeEventParameters, minecraftserver } from '../index';

export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: minecraftserver.Vector3;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}