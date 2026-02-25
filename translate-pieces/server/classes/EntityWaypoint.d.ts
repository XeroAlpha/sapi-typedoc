/* IMPORT */ import { Entity, EntityVisibilityRules, InvalidWaypointError, InvalidWaypointTextureSelectorError, RGB, Waypoint, WaypointTextureSelector } from '..';

/**
 * @beta
 * Waypoint that tracks an entity's position. The waypoint
 * automatically updates as the entity moves and becomes
 * invalid when the entity is removed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWaypoint extends Waypoint {
    /**
     * @remarks
     * The entity being tracked by this waypoint.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The visibility rules that control when the waypoint is shown
     * based on the entity's state (e.g., sneaking, invisible,
     * dead).
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entityRules: EntityVisibilityRules;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        entity: Entity,
        textureSelector: WaypointTextureSelector,
        entityRules: EntityVisibilityRules,
        color?: RGB,
    );
}
