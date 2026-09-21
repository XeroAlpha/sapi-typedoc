/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Axis, InvalidWidgetComponentError, WidgetComponentBase, WidgetComponentGizmoStateChangeEventParameters, WidgetGizmoRotation, WidgetGizmoScaleMode } from '..';

export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
    activated: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enabledAxes: Axis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOffsetOverride?: Vector3;
    /**
     * @remarks
     * The rotation rings for this gizmo. Rotation is configured
     * and observed through the returned
     * {@link WidgetGizmoRotation}, and is disabled until at least
     * one rotation axis is enabled on it.
     *
     * @throws This property can throw when used.
     */
    readonly rotation: WidgetGizmoRotation;
    /**
     * @remarks
     * @worldMutation
     *
     */
    scaleMode: WidgetGizmoScaleMode;
    /**
     * @remarks
     * @worldMutation
     *
     */
    screenScale: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    worldScale: number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}
