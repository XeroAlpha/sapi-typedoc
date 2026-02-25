/* IMPORT */ import { DimensionLocation, InvalidWaypointTextureSelectorError, RGB, Waypoint, WaypointTextureSelector } from '..';

/**
 * @beta
 * Waypoint that points to a fixed location in the world.
 * Unlike entity waypoints, location waypoints always remain
 * valid and their position can be updated.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * Updates the dimension and location that this waypoint points
     * to.
     *
     * @worldMutation
     *
     * @param dimensionLocation
     * The new {@link DimensionLocation} (dimension and
     * coordinates) for the waypoint.
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}
