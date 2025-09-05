/* IMPORT */ import { LootItemCondition } from '..';

/**
 * @beta
 * Loot item condition that checks the variant value of a mob
 * as it drops its loot.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The variant value the mob must have for this condition to
     * pass.
     *
     */
    readonly value: number;
}
