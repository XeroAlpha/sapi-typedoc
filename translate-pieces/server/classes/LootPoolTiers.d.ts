/**
 * @beta
 * Represents the values which determine loot drops in a tiered
 * loot pool. Potential drops from tiered loot pools are
 * ordered, and chosen via logic controlled by the values in
 * this object.
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * The chance for each bonus roll attempt to upgrade the tier
     * of the dropped item.
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * The number of attempts for the loot drop to upgrade its
     * tier, thereby incrementing its position in the loot pool
     * entry array, resulting in a higher tier drop.
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * Represents the upper bound for the starting point in
     * determining which tier of loot to drop. The lower bound is
     * always 1. For example, a value of 3 would result in the tier
     * drop logic starting at a randomly selected position in the
     * loot pool entry array between 1 and 3.
     *
     */
    readonly initialRange: number;
}