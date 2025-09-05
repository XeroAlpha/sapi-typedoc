/**
 * @beta
 * Represents one entry within Loot Table, which describes one
 * possible drop when a loot drop occurs. Can contain an item,
 * another loot table, a path to another loot table, or an
 * empty drop.
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * Gets the quality of a given loot pool entry.
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * Gets the subtable of a given loot pool entry.
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * Gets the weight of a given loot pool entry.
     *
     */
    readonly weight: number;
}
