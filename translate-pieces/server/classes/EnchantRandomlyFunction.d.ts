/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that randomly enchants the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * Determines whether or not treasure enchantments are included
     * in the randomly chosen enchantments.
     *
     */
    readonly treasure: boolean;
}
