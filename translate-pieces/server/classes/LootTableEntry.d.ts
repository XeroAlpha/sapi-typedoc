/* IMPORT */ import { LootPoolEntry, LootTable } from '..';

/**
 * Represents a loot pool entry containing another separate,
 * nested loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * Gets the loot table stored as a subtable in the parent loot
     * pool.
     *
     */
    readonly lootTable: LootTable;
}
