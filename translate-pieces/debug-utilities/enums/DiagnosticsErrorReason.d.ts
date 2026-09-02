/**
 * Reason codes for errors thrown by DiagnosticsManager and
 * DiagnosticsView operations.
 */
export enum DiagnosticsErrorReason {
    /**
     * @remarks
     * Indicates that the view or stat has already been registered.
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * Indicates an issue with the stats data pushed to the view,
     * see message for details.
     *
     */
    InvalidData = 'InvalidData',
    /**
     * @remarks
     * Indicates that the view or stat name is invalid (likely the
     * name is empty).
     *
     */
    InvalidName = 'InvalidName',
}
