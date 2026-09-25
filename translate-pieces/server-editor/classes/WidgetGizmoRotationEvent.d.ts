/* IMPORT */ import { Axis, Widget, WidgetComponentGizmo, WidgetGizmoRotation, WidgetGizmoRotationEventType } from '..';

/**
 * A single point in the lifecycle of a rotation ring drag,
 * delivered to the handler registered with
 * {@link WidgetGizmoRotation.setStateChangeEvent}. All angles
 * it reports are in degrees.
 */
export class WidgetGizmoRotationEvent {
    private constructor();
    /**
     * @remarks
     * The world axis of the ring being dragged. The value is
     * exactly one of `Axis.X`, `Axis.Y`, or `Axis.Z`. Every event
     * in one drag reports the same axis.
     *
     */
    readonly axis: Axis;
    /**
     * @remarks
     * The gizmo component that produced this rotation event.
     *
     */
    readonly component: WidgetComponentGizmo;
    /**
     * @remarks
     * The signed change in rotation, in degrees, since the
     * previous event of this drag. Only `Moved` events carry an
     * incremental delta. It is zero on `Grabbed`, `Released`, and
     * `Cancelled` events and is measured with the right-hand rule
     * about the positive direction of `axis`.
     *
     */
    readonly deltaDegrees: number;
    /**
     * @remarks
     * Which point in the drag this event reports.
     *
     */
    readonly eventType: WidgetGizmoRotationEventType;
    /**
     * @remarks
     * The signed rotation accumulated, in degrees, since the drag
     * was grabbed. It is zero on the `Grabbed` event, is measured
     * with the right-hand rule about the positive direction of
     * `axis`, and is not wrapped, so a drag of several turns keeps
     * growing past a full circle.
     *
     */
    readonly totalDegrees: number;
    /**
     * @remarks
     * The widget that owns the gizmo which produced this rotation
     * event.
     *
     */
    readonly widget: Widget;
}
