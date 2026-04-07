/* IMPORT */ import { EntityFilter, Vector3 } from '..';

/**
 * Contains options for selecting entities within an area.
 * @seeExample blockConditional.ts d0766e96
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts 8320fecc
 * @seeExample playSoundChained.ts 92b093e0
 * @seeExample setScoreboardChained.ts b345c5c1
 * @seeExample summonMobChained.ts 1d5a375b
 * @seeExample bounceSkeletons.ts 5c3426f6
 * @seeExample tagsQuery.ts 91eec411
 * @seeExample testThatEntityIsFeatherItem.ts b40711bd
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
