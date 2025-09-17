/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that modifies the type of a banner that
 * drops.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The type of banner to drop.
     *
     */
    readonly 'type': number;
}
