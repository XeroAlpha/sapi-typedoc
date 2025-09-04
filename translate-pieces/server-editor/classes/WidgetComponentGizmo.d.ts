/* IMPORT */ import { Axis, InvalidWidgetComponentError, Vector3, WidgetComponentBase, WidgetComponentGizmoStateChangeEventParameters } from '../index';

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
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}