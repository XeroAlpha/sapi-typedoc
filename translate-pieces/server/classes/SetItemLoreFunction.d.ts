/* IMPORT */ import { LootItemFunction } from '..';

/**
 * Loot item function that modifies the lore of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The lore to apply to the dropped item.
     *
     */
    readonly lore: string[];
}
