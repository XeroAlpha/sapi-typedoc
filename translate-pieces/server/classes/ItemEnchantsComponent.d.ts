/* IMPORT */ import { EnchantmentList, ItemComponent } from '../index';

/**
 * @beta
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantsComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
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
     * Removes all enchantments applied to this item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
}