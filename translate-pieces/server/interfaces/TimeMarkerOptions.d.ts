/**
 * @beta
 * Options for creating time markers for world clocks.
 */
export interface TimeMarkerOptions {
    /**
     * @remarks
     * The name that the time marker will have. Must have a
     * namespace and use only valid identifier characters. (e.g.,
     * 'mypack:my_time_marker').
     *
     */
    name: string;
    /**
     * @remarks
     * The optional repeat period (in ticks) that the time marker
     * will have. If not specified, the time marker will only occur
     * once.
     *
     * Minimum Value: 0
     */
    period?: number;
    /**
     * @remarks
     * The time (in ticks) that the time marker will occur at.
     *
     * Minimum Value: 0
     */
    time: number;
}
