/* IMPORT */ import { LootItemCondition } from '..';

/**
 * @beta
 * Loot item condition that checks whether the loot source was
 * damaged by a specific type of entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DamagedByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The entity type required for this condition to pass.
     *
     */
    readonly entityType: string;
}
