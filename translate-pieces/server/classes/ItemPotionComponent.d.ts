/* IMPORT */ import { ItemComponent, PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly potionEffectType: PotionEffectType;
    /**
     * @throws This property can throw when used.
     */
    readonly potionLiquidType: PotionLiquidType;
    /**
     * @throws This property can throw when used.
     */
    readonly potionModifierType: PotionModifierType;
    static readonly componentId = 'minecraft:potion';
}