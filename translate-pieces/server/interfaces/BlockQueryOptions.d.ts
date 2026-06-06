/* IMPORT */ import { BlockFilter, Vector3 } from '..';

/**
 * @beta
 * Options for querying blocks in a volume. Extends BlockFilter
 * with additional sorting and limiting options based on
 * distance from a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * If specified, returns the closest N blocks to the location.
     * Must be greater than 0. Cannot be used with farthest.
     * Requires location to be set.
     *
     */
    closest?: number;
    /**
     * @remarks
     * If specified, returns the farthest N blocks from the
     * location. Must be greater than 0. Cannot be used with
     * closest. Requires location to be set.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * Location used as the reference point for closest or farthest
     * distance calculations. Required when closest or farthest is
     * specified.
     *
     */
    location?: Vector3;
}
