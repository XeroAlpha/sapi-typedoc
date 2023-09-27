/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     *
     * This property can't be edited in read-only mode.
     *
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     *
     */
    readonly 'type': EnchantmentType;
    /**
     * @remarks
     * Creates a new particular type of enchantment configuration.
     *
     * @param enchantmentType
     * Type of the enchantment.
     * @param level
     * Level of the enchantment.
     * @throws This function can throw errors.
     */
    constructor(enchantmentType: EnchantmentType | string, level?: number);
}