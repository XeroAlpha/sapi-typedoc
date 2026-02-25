/**
 * @beta
 * Controls when a waypoint is visible based on the state of
 * the entity it tracks. These rules allow filtering waypoint
 * visibility by entity conditions like sneaking, invisibility,
 * and death state.
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * Controls whether the waypoint is shown when the tracked
     * entity is dead. If undefined, defaults to true.
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * Controls whether the waypoint is shown when the tracked
     * entity is invisible. If undefined, defaults to true.
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * Controls whether the waypoint is shown when the tracked
     * entity is sneaking. If undefined, defaults to true.
     *
     */
    showSneaking?: boolean;
}
