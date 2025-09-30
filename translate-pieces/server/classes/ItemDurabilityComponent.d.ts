/* IMPORT */ import { NumberRange } from '../../common';
/* IMPORT */ import { ItemComponent } from '..';

/**
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Returns the current damage level of this particular item.
     *
     * @worldMutation
     *
     */
    damage: number;
    /**
     * @remarks
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * @beta
     * @remarks
     * Whether an item breaks or loses durability. Setting to true
     * temporarily removes item's durabilty HUD, and freezes
     * durability loss on item.
     *
     * @worldMutation
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking
     * enchantment level.
     *
     * @worldMutation
     *
     * @param unbreakingEnchantmentLevel
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be within the
     * range [0, 3].
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * A range of numbers that is used to calculate the damage
     * chance for an item. The damage chance will fall within this
     * range.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): NumberRange;
}
