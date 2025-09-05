/* IMPORT */ import { LootPool } from '..';

/**
 * @beta
 * Represents a single Loot Table, which determines what items
 * are generated when killing a mob, breaking a block, filling
 * a container, and more.
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * Returns the path to the JSON file that represents this loot
     * table. Does not include file extension, or 'loot_tables/'
     * folder prefix. Example: `entities/creeper`.
     *
     */
    readonly path: string;
    /**
     * @remarks
     * Returns the array of loot pools on a given loot table.
     *
     */
    readonly pools: LootPool[];
}
