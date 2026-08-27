/**
 * @beta
 * Error thrown after using the /reload command when trying to
 * re-register an existing world clock with an invalid time
 * marker.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadTimeMarkerError extends Error {
    private constructor();
}
