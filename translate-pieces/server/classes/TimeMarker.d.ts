/* IMPORT */ import { WorldClockInvalidTimeMarkerError } from '..';

/**
 * @beta
 * A named point in time on a world clock that can occur once
 * or periodically.
 */
export class TimeMarker {
    private constructor();
    /**
     * @remarks
     * The identifier that represents this time marker.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * The interval (in ticks) at which the time marker repeats. If
     * not specified, the time marker will only occur once.
     *
     * @throws
     * WorldClockInvalidTimeMarkerError: If the time marker is
     * invalid.
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly period?: number;
    /**
     * @remarks
     * The time (in ticks) that the time marker occurs at on a
     * world clock.
     *
     * @throws
     * WorldClockInvalidTimeMarkerError: If the time marker is
     * invalid.
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly time: number;
}
