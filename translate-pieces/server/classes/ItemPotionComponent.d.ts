/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { ItemComponent, PotionDeliveryType, PotionEffectType } from '..';

/**
 * @beta
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The PotionDeliveryType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}
