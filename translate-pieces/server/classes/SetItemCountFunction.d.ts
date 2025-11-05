/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that modifies the number items that drop
 * from the loot pool entry.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * number of items to drop. Contains minimum and maximum
     * values.
     *
     */
    readonly count: NumberRange;
}
