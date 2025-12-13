/* IMPORT */ import { LootItemFunction } from '..';

/**
 * Loot item function that modifies the effects of a dropped
 * stew item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * An array of integers corresponding to stew effects to be
     * randomly chosen from and applied to the dropped item.
     *
     */
    readonly effects: number[];
}
