/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that randomly modifies the data value of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * data value to assign. Contains minimum and maximum values.
     *
     */
    readonly values: NumberRange;
}
