/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { EnchantInfo, LootItemCondition } from '..';

/**
 * Loot item condition that checks whether an appropriate tool
 * was used to trigger the loot event. Can describe item type,
 * count, durability, enchantments, or arrays of item tags to
 * compare against.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The stack size, or count, required for this condition to
     * pass.
     *
     */
    readonly count: NumberRange;
    /**
     * @remarks
     * The durability value required for this condition to pass.
     *
     */
    readonly durability: NumberRange;
    /**
     * @remarks
     * Array of enchantments required for this condition to pass.
     *
     */
    readonly enchantments: EnchantInfo[];
    /**
     * @remarks
     * The name of the tool item required for this condition to
     * pass.
     *
     */
    readonly itemName: string;
    /**
     * @remarks
     * Array of item tags which ALL must be matched for this
     * condition to pass.
     *
     */
    readonly itemTagsAll: string[];
    /**
     * @remarks
     * Array of item tags, from which at least 1 must be matched
     * for this condition to pass.
     *
     */
    readonly itemTagsAny: string[];
    /**
     * @remarks
     * Array of item tags, from which exactly zero must match for
     * this condition to pass.
     *
     */
    readonly itemTagsNone: string[];
}
