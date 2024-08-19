/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * Contains information regarding an item before it is damaged
 * from hitting an entity.
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * The damage applied to the item's durability when the event
     * occurs.
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    itemStack?: ItemStack;
}