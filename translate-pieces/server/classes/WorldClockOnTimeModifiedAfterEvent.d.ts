/* IMPORT */ import { WorldClock } from '..';

/**
 * @beta
 * Contains information related to changes to the time of a
 * {@link WorldClock}.
 */
export class WorldClockOnTimeModifiedAfterEvent {
    private constructor();
    /**
     * @remarks
     * The world clock that had its time modified.
     *
     */
    readonly clock: WorldClock;
}
