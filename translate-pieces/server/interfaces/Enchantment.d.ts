/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export interface Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     *
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     *
     */
    type: EnchantmentType | string;
}