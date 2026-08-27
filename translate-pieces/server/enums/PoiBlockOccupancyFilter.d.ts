/**
 * @beta
 * Specifies how a block point-of-interest query filters
 * instances by ticket occupancy.
 */
export enum PoiBlockOccupancyFilter {
    /**
     * @remarks
     * Includes POI instances regardless of their occupancy or
     * available ticket count.
     *
     */
    Any = 'Any',
    /**
     * @remarks
     * Includes POI instances with no available tickets.
     *
     */
    Full = 'Full',
    /**
     * @remarks
     * Includes POI instances with at least one ticket available to
     * be claimed.
     *
     */
    HasVacancy = 'HasVacancy',
}
