/**
 * @beta
 * Error thrown when attempting to perform operations on an
 * invalid waypoint. A waypoint becomes invalid when it is
 * removed or when the entity it tracks is no longer valid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}
