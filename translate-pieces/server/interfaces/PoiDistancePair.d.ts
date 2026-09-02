/* IMPORT */ import { PoiBlockInstance } from '..';

/**
 * @beta
 * Associates a block point-of-interest instance with its
 * squared distance from a query center.
 */
export interface PoiDistancePair {
    /**
     * @remarks
     * Squared three-dimensional distance, in blocks squared, from
     * the query center to the POI position.
     *
     */
    distance: number;
    /**
     * @remarks
     * POI instance at this distance.
     *
     */
    poi: PoiBlockInstance;
}
