/* IMPORT */ import { TimeMarker, WorldClock } from '..';

/**
 * @beta
 * Contains information related to when the time of a
 * {@link WorldClock} hits a {@link TimeMarker}.
 */
export class WorldClockOnTimeMarkerAfterEvent {
    private constructor();
    /**
     * @remarks
     * The world clock that hit a time marker.
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * The time marker that was hit by the world clock.
     *
     */
    readonly timeMarker: TimeMarker;
}
