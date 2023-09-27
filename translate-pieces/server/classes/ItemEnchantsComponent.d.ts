/**
 * @beta
 * 表示物品魔咒组件。当出现在物品上时，可以操作物品上的魔咒。
 * 
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantsComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 该物品堆叠上的魔咒集合。
     * 注意，该属性仅返回一个拷贝，若需应用修改，需要先赋值为变量，进行操作，再将变量赋值回这个属性。
     * 
     * Returns a collection of the enchantments applied to this
     * item stack.
     *
     * This property can't be edited in read-only mode.
     *
     */
    enchantments: EnchantmentList;
    static readonly componentId = 'minecraft:enchantments';
    /**
     * @remarks
     * 移除该物品堆叠上的所有魔咒。
     * 
     * Removes all enchantments applied to this item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
}