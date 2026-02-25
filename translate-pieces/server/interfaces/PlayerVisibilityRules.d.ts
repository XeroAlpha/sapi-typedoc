/* IMPORT */ import { EntityVisibilityRules } from '..';

/**
 * @beta
 * Controls when a waypoint is visible based on player-specific
 * states. Extends {@link EntityVisibilityRules} with
 * additional rules for player-only states like hidden mode and
 * spectator mode.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * Controls whether the waypoint is shown when the tracked
     * player is hidden. If undefined, defaults to true.
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * Controls whether the waypoint is shown when the tracked
     * player is in spectator mode. If undefined, defaults to true.
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * Controls whether the waypoint is shown when a spectator is
     * viewing another spectator player. If undefined, defaults to
     * true.
     *
     */
    showSpectatorToSpectator?: boolean;
}
