/* IMPORT */ import { Entity } from '..';

/**
 * @beta
 * Contains information regarding an event before an entity is
 * tamed.
 */
export class EntityTamedBeforeEvent {
    private constructor();
    /**
     * @remarks
     * When set to true will cancel the event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The entity that is being tamed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The entity that is attempting to tame the entity.
     *
     */
    readonly tamingEntity: Entity;
}
