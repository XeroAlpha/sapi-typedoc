/* IMPORT */ import { Entity, ItemStack } from '..';

/**
 * @rc
 * Contains information related to an entity having picked up
 * items.
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * The entity that has picked up the items.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The list of items the entity has picked up.
     *
     */
    readonly items: ItemStack[];
}
