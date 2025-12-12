/* IMPORT */ import { LootItemCondition } from '..';

/**
 * Loot item condition that checks the entity type of the
 * entity dropping its loot.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The entity type required for this condition to pass.
     * Example: 'minecraft:skeleton'.
     *
     */
    readonly entityType: string;
}
