/* IMPORT */ import { ItemType, LootItemCondition, LootItemFunction, LootPoolEntry } from '..';

/**
 * Represents a loot pool entry containing an item to drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootItem extends LootPoolEntry {
    private constructor();
    /**
     * @rc
     */
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    /**
     * @remarks
     * The name of the item contained in this entry.
     *
     */
    readonly name?: ItemType;
}
