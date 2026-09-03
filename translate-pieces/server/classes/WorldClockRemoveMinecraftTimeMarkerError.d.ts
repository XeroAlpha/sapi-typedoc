/* IMPORT */ import { WorldClock } from '..';

/**
 * @beta
 * Error thrown by {@link WorldClock.removeTimeMarker} when
 * trying to remove a time marker with the 'minecraft'
 * namespace from a world clock.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRemoveMinecraftTimeMarkerError extends Error {
    private constructor();
}
