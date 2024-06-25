/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @rc
     * @remarks
     * Returns a collection of all available enchantment types.
     *
     */
    static getAll(): EnchantmentType[];
}