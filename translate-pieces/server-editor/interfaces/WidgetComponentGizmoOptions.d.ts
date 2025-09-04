/* IMPORT */ import { Axis, Vector3, WidgetComponentBaseOptions, WidgetComponentGizmoStateChangeEventParameters } from '../index';

export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: Vector3;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}