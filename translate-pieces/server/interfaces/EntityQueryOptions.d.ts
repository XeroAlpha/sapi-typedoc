/* IMPORT */ import { EntityQueryPropertyOptions, EntityQueryScoreOptions, GameMode, Vector3 } from '../index';

/**
 * Contains options for selecting entities within an area.
 * @example testBlockConditional.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon
 *
 * // Equivalent scripting code would be:
 * function spawnFish(dimension: Dimension) {
 *     dimension
 *         .getEntities({
 *             type: 'fox',
 *         })
 *         .filter(entity => {
 *             const block = dimension.getBlock({
 *                 x: entity.location.x,
 *                 y: entity.location.y - 1,
 *                 z: entity.location.z,
 *             });
 *
 *             return block !== undefined && block.matches('minecraft:stone');
 *         })
 *         .forEach(entity => {
 *             dimension.spawnEntity('salmon', entity.location);
 *         });
 * }
 * ```
 * @example testPlaySoundChained.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run playsound raid.horn @a
 *
 * // Equivalent scripting code would be:
 * function playSounds(dimension: Dimension) {
 *     const targetPlayers = dimension.getPlayers();
 *     const originEntities = dimension.getEntities({
 *         type: 'armor_stand',
 *         name: 'myArmorStand',
 *         tags: ['dummyTag1'],
 *         excludeTags: ['dummyTag2'],
 *     });
 *
 *     originEntities.forEach(entity => {
 *         targetPlayers.forEach(player => {
 *             player.playSound('raid.horn');
 *         });
 *     });
 * }
 * ```
 * @example testSendMessageAllPlayers.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { "rawtext": [{"translate": "hello.world" }] }
 *
 * // Equivalent scripting code would be:
 * function sendMessagesToPlayers(dimension: Dimension) {
 *     const targetPlayers = dimension.getPlayers();
 *     const originEntities = dimension.getEntities({
 *         type: 'armor_stand',
 *         name: 'myArmorStand',
 *         tags: ['dummyTag1'],
 *         excludeTags: ['dummyTag2'],
 *     });
 *
 *     originEntities.forEach(entity => {
 *         targetPlayers.forEach(player => {
 *             player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });
 *         });
 *     });
 * }
 * ```
 * @example testSetScoreBoardChained.ts
 * ```typescript
 * import { Dimension, world } from '@minecraft/server';
 *
 * // Having these commands:
 *
 * // scoreboard objectives add scoreObjective1 dummy
 * // scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1
 *
 * // Equivalent scripting code would be:
 * function setScores(dimension: Dimension) {
 *     const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
 *     dimension
 *         .getEntities({
 *             type: 'armor_stand',
 *             name: 'myArmorStand',
 *         })
 *         .forEach(entity => {
 *             if (entity.scoreboardIdentity !== undefined) {
 *                 objective.setScore(entity.scoreboardIdentity, -1);
 *             }
 *         });
 * }
 * ```
 * @example testSummonMobChained.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~
 *
 * // Equivalent scripting code would be:
 * function spawnPigs(dimension: Dimension) {
 *     const armorStandArray = dimension.getEntities({
 *         type: 'armor_stand',
 *     });
 *     const playerArray = dimension.getPlayers({
 *         location: { x: 0, y: -60, z: 0 },
 *         closest: 4,
 *         maxDistance: 15,
 *     });
 *     armorStandArray.forEach(entity => {
 *         playerArray.forEach(player => {
 *             dimension.spawnEntity('pig', {
 *                 x: player.location.x + 1,
 *                 y: player.location.y,
 *                 z: player.location.z,
 *             });
 *         });
 *     });
 * }
 * ```
 * @example checkFeatherNearby.ts
 * ```typescript
 * import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";
 *
 * // Returns true if a feather item entity is within 'distance' blocks of 'location'.
 * function isFeatherNear(location: DimensionLocation, distance: number): boolean {
 *     const items = location.dimension.getEntities({
 *         location: location,
 *         maxDistance: 20,
 *     });
 *
 *     for (const item of items) {
 *         const itemComp = item.getComponent(EntityComponentTypes.Item);
 *
 *         if (itemComp) {
 *             if (itemComp.itemStack.typeId.endsWith('feather')) {
 *                 return true;
 *             }
 *         }
 *     }
 *
 *     return false;
 * }
 * ```
 */
export interface EntityQueryOptions {
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
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
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
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
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
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     *
     */
    name?: string;
    /**
     * @beta
     * @remarks
     * Gets/sets a collection of EntityQueryPropertyOptions objects
     * with filters for specific properties.
     *
     */
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
    /**
     * @beta
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: Vector3;
}