/* IMPORT */ import { Entity } from '..';

/**
 * @rc
 * Contains information related to an entity picking up an
 * item.
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the item will not be picked up.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The entity that will pick up the item.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The item that will be picked up.
     *
     */
    readonly item: Entity;
}
