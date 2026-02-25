/* IMPORT */ import { EntityWaypoint, InvalidWaypointError, InvalidWaypointTextureSelectorError, Player, PlayerVisibilityRules, RGB, WaypointTextureSelector } from '..';

/**
 * @beta
 * Waypoint that tracks a player's position. Extends {@link
 * EntityWaypoint} with additional player-specific visibility
 * rules such as hidden state and spectator mode.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * The {@link PlayerVisibilityRules} that control when the
     * waypoint is shown based on the player's state (e.g., hidden,
     * spectator mode, spectator viewing another spectator).
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}
