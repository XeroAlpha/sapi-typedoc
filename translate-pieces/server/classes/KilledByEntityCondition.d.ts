/* IMPORT */ import { LootItemCondition } from '..';

/**
 * Loot item condition that checks whether or not the drop
 * source was killed by a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The entity type required for this condition to pass.
     * Example: 'minecraft:skeleton'.
     *
     */
    readonly entityType: string;
}
