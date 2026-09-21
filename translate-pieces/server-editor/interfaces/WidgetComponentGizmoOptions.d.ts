/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Axis, WidgetComponentBaseOptions, WidgetComponentGizmoStateChangeEventParameters, WidgetGizmoScaleMode } from '..';

/**
 * Options used when creating a gizmo component. A gizmo must
 * enable at least one translation axis or one rotation axis.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: Vector3;
    /**
     * @remarks
     * The world axes that have rotation rings when the gizmo is
     * created. Defaults to `Axis.None`. The value can be
     * `Axis.None` when at least one translation axis is enabled.
     *
     * @throws
     * Throws when neither a translation axis nor a rotation axis
     * is enabled, or when the value contains bits other than
     * `Axis.X`, `Axis.Y`, or `Axis.Z`.
     */
    rotationAxes?: Axis;
    scaleMode?: WidgetGizmoScaleMode;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}
