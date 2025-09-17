/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that applies a random enchant to the
 * dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * level of enchantment to apply. Contains minimum and maximum
     * values.
     *
     */
    readonly levels: NumberRange;
    /**
     * @remarks
     * Value that determines whether or not treasure enchants
     * should be included in the random enchant selection.
     *
     */
    readonly treasure: boolean;
}
