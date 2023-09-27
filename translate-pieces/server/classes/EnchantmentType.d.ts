/**
 * @beta
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    private constructor();
    /**
     * @remarks
     * The name of the enchantment type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The maximum level this type of enchantment can have.
     *
     */
    readonly maxLevel: number;
}