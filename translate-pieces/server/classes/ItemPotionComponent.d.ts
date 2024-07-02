/* IMPORT */ import { ItemComponent, PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @rc
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionEffectType: PotionEffectType;
    /**
     * @remarks
     * The PotionLiquidType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionLiquidType: PotionLiquidType;
    /**
     * @remarks
     * The PotionModifierType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionModifierType: PotionModifierType;
    static readonly componentId = 'minecraft:potion';
}