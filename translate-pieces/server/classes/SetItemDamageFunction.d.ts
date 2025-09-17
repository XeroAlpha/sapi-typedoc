/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that modifies the durability value of the
 * item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The value range from which the function randomly chooses the
     * durability value to assign. Contains minimum and maximum
     * values. Must always be between 0.0 and 1.0.
     *
     */
    readonly damage: NumberRange;
}
