/* IMPORT */ import { LootItemCondition } from '..';

/**
 * Loot item condition that applies a given value to the
 * chances that loot will drop, modified by the level of
 * looting enchantment on the tool used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The base chance, from 0.0-1.0, that loot will drop. Will be
     * modified by the 'lootingMultiplier' value.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * The increase in drop chance per looting enchant level.
     *
     */
    readonly lootingMultiplier: number;
}
