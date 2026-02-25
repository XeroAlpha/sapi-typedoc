/**
 * @beta
 * Enum representing the different reasons why a locator bar
 * operation may fail.
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * The waypoint already exists in the locator bar and cannot be
     * added again.
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * The maximum number of waypoints has been reached and no more
     * can be added.
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * The specified waypoint does not exist in the locator bar.
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}
