/* IMPORT */ import { LootPoolEntry } from '..';

/**
 * Represents a completely empty entry in a loot pool. If this
 * entry is chosen, no items will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}
