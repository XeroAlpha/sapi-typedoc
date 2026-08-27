/* IMPORT */ import { WorldClock } from '..';

/**
 * @beta
 * Contains information related to a {@link WorldClock} being
 * resumed.
 */
export class WorldClockOnResumedAfterEvent {
    private constructor();
    /**
     * @remarks
     * The world clock that was resumed.
     *
     */
    readonly clock: WorldClock;
}
