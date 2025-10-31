/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that modifies an ominous bottle's
 * amplifier value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * amplifier value to assign. Contains minimum and maximum
     * values.
     *
     */
    readonly amplifier: NumberRange;
}
