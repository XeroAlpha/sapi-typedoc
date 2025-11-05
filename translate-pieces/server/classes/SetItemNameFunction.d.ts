/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that modifies the name of the item
 * dropped.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemNameFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The name to apply to the dropped item.
     *
     */
    readonly name: string;
}
