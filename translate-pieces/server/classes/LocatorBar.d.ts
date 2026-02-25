/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { GameRule, InvalidWaypointError, LocatorBarError, Waypoint } from '..';

/**
 * @beta
 * Manages the collection of waypoints displayed on a player's
 * locator bar. Allows adding, removing, and querying waypoints
 * with a maximum capacity limit.
 *
 * Invalid waypoints in the locator bar will be automatically
 * removed in the next tick. This includes waypoints tied to
 * entities that have been removed from the world.
 *
 * Note: You can control whether vanilla player waypoints are
 * automatically added to the locator bar using the
 * `locatorbar` {@link GameRule}. This game rule is currently
 * named `locatorbar` but will likely be renamed in a future
 * update to be more descriptive.
 *
 * Note: You can only modify, remove, or query waypoints that
 * were added by this pack.
 * @seeExample sharedWaypoint.ts
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * The current number of waypoints in the locator bar.
     *
     */
    readonly count: number;
    /**
     * @remarks
     * The maximum number of waypoints that can be added to the
     * locator bar.
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * Adds a waypoint to the locator bar. Throws an error if the
     * waypoint already exists, the maximum waypoint limit has been
     * reached, or the waypoint is invalid.
     *
     * @worldMutation
     *
     * @param waypoint
     * The {@link Waypoint} to add to the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidWaypointError}
     *
     * {@link LocatorBarError}
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * Returns an array of all waypoints currently in the locator
     * bar.
     *
     * @worldMutation
     *
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * Checks whether the specified waypoint exists in the locator
     * bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * The {@link Waypoint} to check for.
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * Removes all waypoints from the locator bar, clearing it
     * completely.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * Removes a specific waypoint from the locator bar. Returns an
     * error if the waypoint does not exist in the locator bar.
     *
     * @worldMutation
     *
     * @param waypoint
     * The {@link Waypoint} to remove from the locator bar.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}
