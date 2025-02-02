/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * 包含当前世界中可用的Minecraft附魔类型的目录。
 * 
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * 获取具有指定标识符的附魔。
     * 
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * 附魔的标识符。例如，"minecraft:flame"。
     * 
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * 如果可用，返回一个表示指定附魔的EnchantmentType对象。
     * 
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @remarks
     * 返回所有可用附魔类型的集合。
     * 
     * Returns a collection of all available enchantment types.
     *
     */
    static getAll(): EnchantmentType[];
}