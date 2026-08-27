/* IMPORT */ import { TimeMarker, TimeMarkerOptions, WorldClockAddTimeMarkerError, WorldClockRemoveMinecraftTimeMarkerError, WorldClockRewindError, WorldClockTimeMarkerNotFoundError } from '..';

/**
 * @beta
 * A class that represents a particular clock within a world.
 */
export class WorldClock {
    private constructor();
    /**
     * @remarks
     * Retrieves or sets whether the world clock is currently
     * paused.
     *
     * @worldMutation
     *
     */
    isPaused: boolean;
    /**
     * @remarks
     * The identifier that represents this world clock.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Retrieves or sets the current time (in ticks) of the world
     * clock.
     *
     * @worldMutation
     *
     * Minimum Value: 0
     */
    time: number;
    /**
     * @remarks
     * Retrieves the current time markers of the world clock.
     *
     */
    readonly timeMarkers: TimeMarker[];
    /**
     * @remarks
     * Adds a new time marker to the world clock.
     *
     * @worldMutation
     *
     * @param timeMarkerOptions
     * Options for creating a time marker.
     * @throws This function can throw errors.
     *
     * {@link WorldClockAddTimeMarkerError}
     */
    addTimeMarker(timeMarkerOptions: TimeMarkerOptions): void;
    /**
     * @remarks
     * Removes an existing time marker from the world clock.
     *
     * @worldMutation
     *
     * @param timeMarker
     * The time marker or time marker name to remove.
     * @throws
     * WorldClockTimeMarkerNotFoundError: If the time marker does
     * not exist on the world clock.
     * WorldClockRemoveMinecraftTimeMarkerError: If the time marker
     * uses the 'minecraft' namespace.
     *
     * {@link WorldClockRemoveMinecraftTimeMarkerError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    removeTimeMarker(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * Rewinds the world clock's time to the previous occurrence of
     * the specified time marker.
     *
     * @worldMutation
     *
     * @param timeMarker
     * The time marker or time marker name to rewind the world
     * clock's time to.
     * @throws
     * WorldClockTimeMarkerNotFoundError: If the time marker does
     * not exist on the world clock.
     * WorldClockRewindError: If the world clock's current time is
     * before the time marker's first occurrence.
     *
     * {@link WorldClockRewindError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    rewindTo(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * Sets the world clock's time to the specified time marker.
     *
     * @worldMutation
     *
     * @param timeMarker
     * The time marker or time marker name to set the world clock's
     * time to.
     * @throws
     * WorldClockTimeMarkerNotFoundError: If the time marker does
     * not exist on the world clock.
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    set(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * Skips the world clock's time to the next occurrence of the
     * specified time marker.
     * If the next occurrence overflows the world clock's time, the
     * time is reset to the first occurrence.
     *
     * @worldMutation
     *
     * @param timeMarker
     * The time marker or time marker name to skip the world
     * clock's time to.
     * @throws
     * WorldClockTimeMarkerNotFoundError: If the time marker does
     * not exist on the world clock.
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    skipTo(timeMarker: string | TimeMarker): void;
}
