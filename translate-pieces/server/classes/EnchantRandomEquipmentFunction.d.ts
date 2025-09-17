/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that applies a random enchant to the
 * dropped item using the same algorithm used while enchanting
 * equipment vanilla mobs spawn with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * Value that determines the likelihood of equipment being
     * enchanted.
     *
     */
    readonly chance: number;
}
