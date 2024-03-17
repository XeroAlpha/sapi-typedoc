/* IMPORT */ import { ItemComponent } from '../index';

/**
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
     * 
     * If true, the player can always eat this item (even when not
     * hungry).
     *
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示实体在食用该物品后恢复的饥饿值，即营养值。
     * 
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     *
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当一个物品被食用，
     * 将根据公式 `nutrition * saturation_modifier * 2`
     * 来为玩家添加饱和状态。
     * 
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     *
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若给出，则使用时将该物品转换为标识符指定的物品。
     * 
     * When specified, converts the active item to the one
     * specified by this property.
     *
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}