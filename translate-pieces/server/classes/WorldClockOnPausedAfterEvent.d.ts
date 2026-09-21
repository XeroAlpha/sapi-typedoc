/* IMPORT */ import { WorldClock } from '..';

/**
 * Contains information related to a {@link WorldClock} being
 * paused.
 */
export class WorldClockOnPausedAfterEvent {
    private constructor();
    /**
     * @remarks
     * The world clock that was paused.
     *
     */
    readonly clock: WorldClock;
}
