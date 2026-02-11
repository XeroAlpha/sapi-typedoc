/* IMPORT */ import { BannerPattern, LootItemFunction } from '..';

/**
 * Loot item function that modifies the type of a banner that
 * drops.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @beta
     * @remarks
     * The base color for the dropped banner.
     *
     */
    readonly baseColor: string;
    /**
     * @beta
     * @remarks
     * An array of {@link BannerPattern} objects used to decorate
     * the banner, including color and pattern type.
     *
     */
    readonly patterns: BannerPattern[];
    /**
     * @remarks
     * The type of banner to drop.
     *
     */
    readonly 'type': number;
}
