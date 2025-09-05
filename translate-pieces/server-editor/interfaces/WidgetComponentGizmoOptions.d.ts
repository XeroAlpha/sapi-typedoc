/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Axis, WidgetComponentBaseOptions, WidgetComponentGizmoStateChangeEventParameters } from '..';

export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: Vector3;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}
