/* IMPORT */ import { EnchantInfo, LootItemFunction } from '..';

/**
 * Loot item function that applies one or several predefined
 * enchants to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}
