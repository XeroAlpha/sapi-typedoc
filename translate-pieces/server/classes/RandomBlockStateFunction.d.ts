/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that randomly modifies the block state of
 * the item dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * The range from which the function randomly chooses the value
     * to assign to the given block state. Contains minimum and
     * maximum values.
     *
     */
    readonly values: NumberRange;
}
