/* IMPORT */ import { InvalidContainerSlotError, ItemLockMode, ItemStack, ItemType, Vector3, minecraftcommon } from '../index';

/**
 * @beta
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this item stack.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of the item in the slot. Returns undefined if
     * the slot is empty.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns all tags for the item in the slot.
     *
     * @returns
     * Returns all tags for the item in the slot. Return an empty
     * array if the the slot is empty.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * Returns whether the item in the slot slot has the given tag.
     *
     * @param tag
     * The item tag.
     * @returns
     * Returns false when the slot is empty or the item in the slot
     * does not have the given tag.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * The ItemStack that is being compared.
     * @returns
     * Returns whether this item stack can be stacked with the
     * given `itemStack`.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the given ItemStack in the slot, replacing any existing
     * item.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The ItemStack to be placed in the slot.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @param loreList
     * A list of lore strings. Setting this argument to undefined
     * will clear the lore.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: string[]): void;
}