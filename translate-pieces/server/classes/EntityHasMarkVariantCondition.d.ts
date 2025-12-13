/* IMPORT */ import { LootItemCondition } from '..';

/**
 * Loot item condition that checks the value of the mark
 * variant of a mob as it drops its loot.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The mark variant value the mob must have for this condition
     * to pass.
     *
     */
    readonly value: number;
}
