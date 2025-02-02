/* IMPORT */ import { InvalidContainerSlotError, ItemLockMode, ItemStack, ItemType, Vector3, minecraftcommon } from "../index";

/**
 * 表示更大容器中的一个槽位（例如，实体的物品栏）。
 *
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
	private constructor();
	/**
	 * @remarks
	 * 表示物品堆中的物品数量。有效值的范围是1-255。提供的值会被限制在物品的最大堆叠数量内。
	 *
	 * Number of the items in the stack. Valid values range between
	 * 1-255. The provided value will be clamped to the item's
	 * maximum stack size.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * @throws
	 * 如果值超出了1-255的范围，会抛出错误。
	 *
	 * Throws if the value is outside the range of 1-255.
	 */
	amount: number;
	/**
	 * @remarks
	 * 返回物品是否可堆叠。一个物品被认为是可堆叠的，如果该物品的最大堆叠数大于1并且物品不包含任何自定义数据或属性。
	 *
	 * Returns whether the item is stackable. An item is considered
	 * stackable if the item's maximum stack size is greater than 1
	 * and the item does not contain any custom data or properties.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly isStackable: boolean;
	/**
	 * @remarks
	 * 获取或设置物品在死亡时是否保留。
	 *
	 * Gets or sets whether the item is kept on death.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 */
	keepOnDeath: boolean;
	/**
	 * @remarks
	 * 获取或设置物品的锁定模式。默认值是`ItemLockMode.none`。
	 *
	 * Gets or sets the item's lock mode. The default value is
	 * `ItemLockMode.none`.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 */
	lockMode: ItemLockMode;
	/**
	 * @remarks
	 * 表示最大堆叠数量。该值取决于物品的类型。例如，火把的最大堆叠数量是64，而鸡蛋的最大堆叠数量是16。
	 *
	 * The maximum stack size. This value varies depending on the
	 * type of item. For example, torches have a maximum stack size
	 * of 64, while eggs have a maximum stack size of 16.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly maxAmount: number;
	/**
	 * @remarks
	 * 表示此物品堆的自定义名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或`undefined`将移除名称标签。
	 *
	 * Given name of this stack of items. The name tag is displayed
	 * when hovering over the item. Setting the name tag to an
	 * empty string or `undefined` will remove the name tag.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * @throws
	 * 如果槽位的容器无效会抛出错误。如果长度超过255个字符也会抛出错误。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * the length exceeds 255 characters.
	 */
	nameTag?: string;
	/**
	 * @remarks
	 * 表示物品的类型。
	 *
	 * The type of the item.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly "type": ItemType;
	/**
	 * @remarks
	 * 表示物品堆中物品类型的标识符。如果没有指定命名空间，则默认使用`minecraft:`。例如，`wheat`或`apple`。
	 *
	 * Identifier of the type of items for the stack. If a
	 * namespace is not specified, 'minecraft:' is assumed.
	 * Examples include 'wheat' or 'apple'.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 清除在此物品堆上设置的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * item stack.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 返回此容器槽位中的物品是否可以被破坏。
	 *
	 * Returns whether the item within this container slot can be
	 * destroyed.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * Throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanDestroy(): string[];
	/**
	 * @remarks
	 * 返回此容器槽位中的物品是否可以被放置。
	 *
	 * Returns if the item in this container slot can be placed on.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * Throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanPlaceOn(): string[];
	/**
	 * @remarks
	 * 返回一个属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @returns
	 * 返回该属性的值，如果属性未设置则返回`undefined`。
	 *
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 返回已在此物品堆上使用的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this item stack.
	 *
	 * @returns
	 * 一个字符串数组，包含在此实体上设置的动态属性。
	 *
	 * A string array of the dynamic properties set on this entity.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号很有用——例如，如果一个实体有许多兆字节的关联动态属性，可能会在各种设备上加载缓慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic
	 * properties that are currently stored for this entity. This
	 * includes the size of both the key and the value.  This can
	 * be useful for diagnosing performance warning signs - if, for
	 * example, an entity has many megabytes of associated dynamic
	 * properties, it may be slow to load on various devices.
	 *
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 创建物品堆的精确副本，包括任何自定义数据或属性。
	 *
	 * Creates an exact copy of the item stack, including any
	 * custom data or properties.
	 *
	 * @returns
	 * 返回槽位中的物品副本。如果槽位为空，则返回`undefined`。
	 *
	 * Returns a copy of the item in the slot. Returns undefined if
	 * the slot is empty.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getItem(): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回物品堆的附加文本信息（次要显示字符串）。
	 *
	 * Returns the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * @returns
	 * 一个包含附加文本信息的数组。如果物品没有附加文本信息，则返回一个空数组。
	 *
	 * An array of lore strings. If the item does not have lore,
	 * returns an empty array.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getLore(): string[];
	/**
	 * @remarks
	 * 返回槽位中物品的所有标签。
	 *
	 * Returns all tags for the item in the slot.
	 *
	 * @returns
	 * 返回槽位中物品的所有标签。如果槽位为空，则返回一个空数组。
	 *
	 * Returns all tags for the item in the slot. Return an empty
	 * array if the the slot is empty.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 返回此槽位是否有物品。
	 *
	 * Returns true if this slot has an item.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasItem(): boolean;
	/**
	 * @remarks
	 * 返回槽位中的物品是否有给定的标签。
	 *
	 * Returns whether the item in the slot slot has the given tag.
	 *
	 * @param tag
	 * 物品标签。
	 *
	 * The item tag.
	 * @returns
	 * 如果槽位为空或槽位中的物品没有给定的标签，则返回`false`。
	 *
	 * Returns false when the slot is empty or the item in the slot
	 * does not have the given tag.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 返回此物品堆是否可以与给定的`itemStack`堆叠。这是通过比较物品类型和与物品堆叠相关的任何自定义数据和属性来确定的。物品堆叠的数量不予考虑。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`. This is determined by comparing the item
	 * type and any custom data and properties associated with the
	 * item stacks. The amount of each item stack is not taken into
	 * consideration.
	 *
	 * @param itemStack
	 * 被比较的物品堆。
	 *
	 * The ItemStack that is being compared.
	 * @returns
	 * 返回此物品堆是否可以与给定的`itemStack`堆叠。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	isStackableWith(itemStack: ItemStack): boolean;
	/**
	 * @remarks
	 * 返回ContainerSlot是否有效。如果容器存在且已加载，并且槽位索引有效，则容器槽位有效。
	 *
	 * Returns whether the ContainerSlot is valid. The container
	 * slot is valid if the container exists and is loaded, and the
	 * slot index is valid.
	 *
	 */
	isValid(): boolean;
	/**
	 * @remarks
	 * 表示此物品在冒险模式下可以破坏的方块类型列表。方块名称显示在物品的提示信息中。将值设置为`undefined`将清除列表。
	 *
	 * The list of block types this item can break in Adventure
	 * mode. The block names are displayed in the item's tooltip.
	 * Setting the value to undefined will clear the list.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 * @throws
	 * 如果槽位的容器无效会抛出错误。如果提供的任何方块标识符无效也会抛出错误。
	 *
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
	 * 表示此物品在冒险模式下可以放置的方块类型列表。仅适用于方块物品。方块名称显示在物品的提示信息中。将值设置为`undefined`将清除列表。
	 *
	 * The list of block types this item can be placed on in
	 * Adventure mode. This is only applicable to block items. The
	 * block names are displayed in the item's tooltip. Setting the
	 * value to undefined will clear the list.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 * @throws
	 * 如果槽位的容器无效会抛出错误。如果提供的任何方块标识符无效也会抛出错误。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * any of the provided block identifiers are invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setCanPlaceOn(blockIdentifiers?: string[]): void;
	/**
	 * @beta
	 * @remarks
	 * 设置具有特定值的多个动态属性。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 *
	 * 要设置的动态属性的键值对记录。
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定的属性设置为一个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 * T
	 * he property identifier.
	 * @param value
	 * 要设置的属性值。
	 *
	 * Data value of the property to set.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 将给定的ItemStack放入槽位，替换任何现有的物品。
	 *
	 * Sets the given ItemStack in the slot, replacing any existing
	 * item.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param itemStack
	 * 要放入槽位的ItemStack。
	 *
	 * The ItemStack to be placed in the slot.
	 * @throws
	 * 如果槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setItem(itemStack?: ItemStack): void;
	/**
	 * @remarks
	 * 设置物品堆的附加文本信息（次要显示字符串）。
	 *
	 * Sets the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param loreList
	 * 附加文本信息的列表。将此参数设置为`undefined`将清除附加文本信息。
	 *
	 * A list of lore strings. Setting this argument to undefined
	 * will clear the lore.
	 * @throws
	 * 如果槽位的容器无效会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setLore(loreList?: string[]): void;
}
