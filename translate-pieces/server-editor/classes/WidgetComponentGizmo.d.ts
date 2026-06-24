/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { Axis, InvalidWidgetComponentError, WidgetComponentBase, WidgetComponentGizmoStateChangeEventParameters, WidgetGizmoScaleMode } from '..';

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
