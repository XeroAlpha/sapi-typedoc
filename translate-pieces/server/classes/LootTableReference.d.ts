/* IMPORT */ import { LootPoolEntry } from '../index';

/**
 * @beta
 * Represents a loot pool entry containing a reference to
 * another loot table, described by its path.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * The path to the referenced loot table. Example:
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}