/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that populates a dropped container item
 * using another loot table.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The path to the loot table with which the container will be
     * filled.
     *
     */
    readonly lootTable: string;
}
