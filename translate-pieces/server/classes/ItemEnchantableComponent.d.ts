/* IMPORT */ import { Enchantment, EnchantmentLevelOutOfBoundsError, EnchantmentSlot, EnchantmentType, EnchantmentTypeNotCompatibleError, EnchantmentTypeUnknownIdError, ItemComponent } from '..';

/**
 * When present on an item, this item can have enchantments
 * applied to it.
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
     * @worldMutation
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
     * @worldMutation
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
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * Removes an enchantment of the given type.
     *
     * @worldMutation
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
