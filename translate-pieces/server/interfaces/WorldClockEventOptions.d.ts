/**
 * @beta
 * Contains parameters for world clock events that filters out
 * which events are passed to the provided callback.
 */
export interface WorldClockEventOptions {
    /**
     * @remarks
     * The name of the clock that this event should fire for.
     *
     */
    clock: string;
}
