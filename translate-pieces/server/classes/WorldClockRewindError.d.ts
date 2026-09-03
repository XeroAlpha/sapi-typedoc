/* IMPORT */ import { WorldClock } from '..';

/**
 * @beta
 * Error thrown by {@link WorldClock.rewindTo} when the world
 * clock's time is already before the time marker's first
 * occurrence.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRewindError extends Error {
    private constructor();
}
