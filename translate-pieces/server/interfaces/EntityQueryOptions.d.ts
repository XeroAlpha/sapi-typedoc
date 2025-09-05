/* IMPORT */ import { EntityFilter, Vector3 } from '..';

/**
 * Contains options for selecting entities within an area.
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: Vector3;
}
