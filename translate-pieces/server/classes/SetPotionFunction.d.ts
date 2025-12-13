/* IMPORT */ import { LootItemFunction } from '..';

/**
 * Loot item function that assigns a type to a dropped potion.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The id to be assigned to the dropped potion.
     *
     */
    readonly id: string;
}
