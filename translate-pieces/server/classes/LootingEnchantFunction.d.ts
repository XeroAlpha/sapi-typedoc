/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that drops extra items if the provided
 * tool has the looting enchant.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * number of extra items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}
