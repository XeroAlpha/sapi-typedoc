/* IMPORT */ import { PoiBlockInstance, PoiBlockOccupancyFilter, PoiBlockType, PoiDistancePair, PoiNameFilter, PoiTagFilter, Vector3 } from '..';

/**
 * @beta
 * Provides methods for querying and managing block-based
 * points of interest in a dimension.
 *
 * Required Experiments:
 * - Poi
 *
 */
export class PoiBlockManager {
    private constructor();
    /**
     * @remarks
     * Adds a block point of interest at a position. This method is
     * intended for temporary usage. Will be replaced when chunk is
     * reloaded
     *
     * @worldMutation
     *
     * @param position
     * Block position at which to add the POI.
     * @param poi
     * POI type to add, specified by numeric type Id, type name, or
     * POI type object.
     */
    addTemporary(position: Vector3, poi: PoiBlockType | string | number): void;
    /**
     * @remarks
     * Gets the type of the block point of interest at a position.
     *
     * @worldMutation
     *
     * @param position
     * Block position to inspect.
     * @returns
     * The POI type at the position, or undefined if no POI exists
     * there.
     */
    at(position: Vector3): PoiBlockType | undefined;
    /**
     * @remarks
     * Tests whether a block point of interest at a position
     * matches a type filter.
     *
     * @worldMutation
     *
     * @param position
     * Block position to inspect.
     * @param filter
     * Filter used to select the POI type. A callback receives the
     * POI type and returns whether it matches; a name filter
     * matches a type name; and a tag filter requires all specified
     * tags.
     * @returns
     * True if a POI exists at the position and its type matches
     * the filter; otherwise false.
     */
    exists(position: Vector3, filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter): boolean;
    /**
     * @remarks
     * Returns block points of interest that match the supplied
     * type and occupancy filters within the specified distance of
     * a location.
     *
     * @worldMutation
     *
     * @param filter
     * Filter used to select POI types. A callback receives each
     * POI type and returns whether it should be included; a name
     * filter matches a type name; and a tag filter requires all
     * specified tags.
     * @param center
     * Center of the search.
     * @param blockRadius
     * Maximum three-dimensional distance from the center, in
     * blocks.
     * @param occupancyFilter
     * Optional filter applied to the occupancy state of matching
     * POIs. If omitted, POIs in any occupancy state are returned.
     * @returns
     * The matching POI instances within range. The result order is
     * not guaranteed.
     */
    getInRange(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * Returns block points of interest that match the supplied
     * type and occupancy filters within an axis-aligned square
     * centered on the specified location, sorted from nearest to
     * farthest.
     *
     * @worldMutation
     *
     * @param filter
     * Filter used to select POI types. A callback receives each
     * POI type and returns whether it should be included; a name
     * filter matches a type name; and a tag filter requires all
     * specified tags.
     * @param center
     * Center of the search and the location from which distances
     * are calculated.
     * @param blockRadius
     * Maximum three-dimensional distance from the center, in
     * blocks.
     * @param occupancyFilter
     * Optional filter applied to the occupancy state of matching
     * POIs. If omitted, POIs in any occupancy state are returned.
     * @returns
     * The matching POI instances and their squared distances from
     * the center, sorted in ascending distance order.
     */
    getInRangeSorted(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiDistancePair[];
    /**
     * @remarks
     * Returns block points of interest that match the supplied
     * type and occupancy filters within an axis-aligned square
     * centered on the specified location.
     *
     * @worldMutation
     *
     * @param filter
     * Filter used to select POI types. A callback receives each
     * POI type and returns whether it should be included; a name
     * filter matches a type name; and a tag filter requires all
     * specified tags.
     * @param center
     * Center of the search volume.
     * @param blockRadius
     * Half-size of the search volume, in blocks, along each axis.
     * @param occupancyFilter
     * Optional filter applied to the occupancy state of matching
     * POIs. If omitted, POIs in any occupancy state are returned.
     * @returns
     * The matching POI instances in the search volume.
     */
    getInSquare(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * Releases one previously claimed ticket at a block point of
     * interest.
     *
     * @worldMutation
     *
     * @param center
     * Block position of the POI whose ticket should be released.
     * @returns
     * True if a ticket was released; false if no POI exists at the
     * position or the POI has no claimed tickets.
     */
    release(center: Vector3): boolean;
    /**
     * @remarks
     * Claims one available ticket from a matching block point of
     * interest within range.
     *
     * @worldMutation
     *
     * @param filter
     * Filter used to select the POI type to claim. A callback
     * receives each POI type and returns whether it should be
     * included; a name filter matches a type name; and a tag
     * filter requires all specified tags.
     * @param center
     * Center of the search.
     * @param blockRadius
     * Maximum three-dimensional distance from the center, in
     * blocks.
     * @returns
     * The block position of the claimed POI, or undefined if no
     * matching POI has an available ticket.
     */
    take(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
    ): Vector3 | undefined;
}
