/* IMPORT */ import { Enchantment, EnchantmentLevelOutOfBoundsError, EnchantmentSlot, EnchantmentType, EnchantmentTypeNotCompatibleError, EnchantmentTypeUnknownIdError, ItemComponent } from '../index';

/**
 * @beta
 * When present on an item, this item can have enchantments
 * applied to it.
 * @example givePlayerIronFireSword.ts
 * ```typescript
 * // Spawns a bunch of item stacks
 * import { ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
 * import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';
 *
 * function giveFireSword(player: Player) {
 *     const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
 *
 *     const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
 *     if (enchantments) {
 *         enchantments.addEnchantment({ type: MinecraftEnchantmentTypes.FireAspect, level: 1 });
 *     }
 *
 *     const inventory = player.getComponent('minecraft:inventory');
 *     if (inventory === undefined || inventory.container === undefined) {
 *         return;
 *     }
 *     inventory.container.setItem(0, ironFireSword);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * Adds an enchantment to the item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if the enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * Adds a list of enchantments to the item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param enchantments
     * The list of enchantments to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if any
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if any enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if any enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * Checks whether an enchantment can be added to the item
     * stack.
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @returns
     * Returns true if the enchantment can be added to the item
     * stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Gets the enchantment of a given type from the item stack.
     *
     * @param enchantmentType
     * The enchantment type to get.
     * @returns
     * Returns the enchantment if it exists on the item stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * Gets all enchantments on the item stack.
     *
     * @returns
     * Returns a list of enchantments on the item stack.
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * Checks whether an item stack has a given enchantment type.
     *
     * @param enchantmentType
     * The enchantment type to check for.
     * @returns
     * Returns true if the item stack has the enchantment type.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * Removes an enchantment of the given type.
     *
     * This function can't be called in read-only mode.
     *
     * @param enchantmentType
     * The enchantment type to remove.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}