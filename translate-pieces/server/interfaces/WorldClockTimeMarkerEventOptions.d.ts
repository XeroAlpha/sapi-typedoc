/**
 * @beta
 * Contains parameters for world clock time marker events that
 * filters out which events are passed to the provided
 * callback.
 */
export interface WorldClockTimeMarkerEventOptions {
    /**
     * @remarks
     * The name of the world clock that this event should fire for.
     *
     */
    clock: string;
    /**
     * @remarks
     * The name of the time marker that this event should fire for.
     * If undefined, the event will fire for all time markers on
     * the world clock.
     *
     */
    timeMarker?: string;
}
