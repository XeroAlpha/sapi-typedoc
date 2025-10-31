/* IMPORT */ import { LootItemCondition } from '..';

/**
 * @rc
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the region the drop
 * is happening within.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the current region's multiplier.
     *
     */
    readonly maxChance: number;
}
