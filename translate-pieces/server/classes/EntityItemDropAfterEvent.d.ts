/* IMPORT */ import { Entity } from '..';

/**
 * @rc
 * Contains information related to an entity having dropped
 * items.
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * The entity that has dropped the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The list of items the entity has dropped.
     *
     */
    readonly items: Entity[];
}
