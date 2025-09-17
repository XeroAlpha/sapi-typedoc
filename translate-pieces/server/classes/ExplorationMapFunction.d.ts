/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that modifies a dropped treasure map to
 * mark a location.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * Determines which type of treasure map will drop.
     *
     */
    readonly destination: string;
}
