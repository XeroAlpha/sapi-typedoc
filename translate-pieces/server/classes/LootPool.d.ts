/* IMPORT */ import { LootItemCondition, LootPoolEntry, LootPoolTiers, NumberRange } from '../index';

/**
 * @beta
 * A collection of entries which individually determine loot
 * drops. Can contain values determining drop outcomes,
 * including rolls, bonus rolls and tiers.
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * Returns the number of extra times a loot pool will be rolled
     * based on the player's luck level, represented as a range
     * from minimum to maximum rolls.
     *
     */
    readonly bonusRolls: NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * Gets a complete list of all loot pool entries contained in
     * the loot pool.
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * Returns the number of times a loot pool will be rolled,
     * represented as a range from minimum to maximum rolls.
     *
     */
    readonly rolls: NumberRange;
    /**
     * @remarks
     * Gets the loot pool tier values for a given table if they
     * exist.
     *
     */
    readonly tiers?: LootPoolTiers;
}