/* IMPORT */ import { DimensionLocation, InvalidWaypointError, InvalidWaypointTextureSelectorError, RGB, WaypointTextureSelector } from '..';

/**
 * @beta
 * Base class for waypoints displayed on the player's locator
 * bar. Waypoints can track locations or entities and are
 * rendered with customizable textures and colors.
 *
 * Waypoints act as shared handles that can be added to
 * multiple players' locator bars. When you modify a waypoint's
 * properties (such as color, texture, or enabled state), the
 * changes are reflected for all players who have that waypoint
 * in their locator bar. This allows you to efficiently manage
 * waypoints across multiple players without creating separate
 * instances for each player.
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * Optional {@link RGB} color tint applied to the waypoint
     * icon. If not specified, the waypoint uses its default color.
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Controls whether the waypoint is currently displayed on the
     * player's screen. When disabled, the waypoint is hidden but
     * remains valid.
     *
     * @worldMutation
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * Returns whether the waypoint is currently valid. A waypoint
     * becomes invalid when its tracked entity is no longer valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The {@link WaypointTextureSelector} that determines which
     * icon texture is displayed for the waypoint based on distance
     * or other criteria.
     *
     * @worldMutation
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * Gets the current {@link DimensionLocation} of the waypoint.
     * For entity waypoints, this returns the entity's current
     * position. For location waypoints, this returns the stored
     * location.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * Removes the waypoint from all locator bars it has been added
     * to. This affects all players who have this waypoint in their
     * locator bar.
     *
     * @worldMutation
     *
     */
    remove(): void;
}
