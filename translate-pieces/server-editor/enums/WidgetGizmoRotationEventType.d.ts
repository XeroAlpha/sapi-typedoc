/**
 * The points in the lifecycle of a rotation ring drag that are
 * reported to a rotation state change handler.
 */
export enum WidgetGizmoRotationEventType {
    /**
     * @remarks
     * The drag ended without completing, so the consumer should
     * roll back to the rotation it had when the ring was grabbed.
     * Reported once.
     *
     */
    Cancelled = 'Cancelled',
    /**
     * @remarks
     * The player grabbed a rotation ring and started a drag.
     * Reported once, with zero delta and zero total.
     *
     */
    Grabbed = 'Grabbed',
    /**
     * @remarks
     * The drag moved around the ring. Reported any number of times
     * between the grab and the terminal event.
     *
     */
    Moved = 'Moved',
    /**
     * @remarks
     * The player let go of the ring and the drag completed.
     * Reported once, with zero delta and the final accumulated
     * total from the drag.
     *
     */
    Released = 'Released',
}
