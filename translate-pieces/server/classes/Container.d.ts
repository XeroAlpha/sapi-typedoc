/* IMPORT */ import { ContainerSlot, ItemStack } from '../index';

/**
 * 表示一个可以存放物品的容器。用于诸如玩家、矿车箱、羊驼等实体。
 *
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @seeExample containers.ts
 */
export class Container {
	private constructor();
	/**
	 * @remarks
	 * 容器中空槽的数量。
	 *
	 * Count of the slots in the container that are empty.
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	readonly emptySlotsCount: number;
	/**
	 * @beta
	 * @remarks
	 * 返回一个布尔值，表示容器对象（或与此容器关联的实体或方块）在当前上下文中是否仍可用。
	 *
	 * Returns whether a container object (or the entity or block
	 * that this container is associated with) is still available
	 * for use in this context.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 此容器中的槽位数量。例如，一个标准的单格箱子有27个槽位。
	 * 注意，玩家的物品栏容器总共包含36个槽位，包括9个快捷栏槽位和27个物品栏槽位。
	 *
	 * The number of slots in this container. For example, a
	 * standard single-block chest has a size of 27. Note, a
	 * player's inventory container contains a total of 36 slots, 9
	 * hotbar slots plus 27 inventory slots.
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	readonly size: number;
	/**
	 * @remarks
	 * 向容器中添加一个物品。物品将放置在第一个可用槽位中，并可以与相同类型的现有物品堆叠。
	 * 若希望将物品放置在特定槽位中，请使用 {@link Container.setItem}。
	 *
	 * Adds an item to the container. The item is placed in the
	 * first available slot(s) and can be stacked with existing
	 * items of the same type. Note, use {@link Container.setItem}
	 * if you wish to set the item in a particular slot.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param itemStack
	 * 要添加的物品堆。
	 *
	 * The stack of items to add.
	 * @throws 此函数可能抛出错误。
	 * @throws This function can throw errors.
	 */
	addItem(itemStack: ItemStack): ItemStack | undefined;
	/**
	 * @remarks
	 * 清空容器中的所有物品。
	 *
	 * Clears all inventory items in the container.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	clearAll(): void;
	/**
	 * @remarks
	 * 获取指定槽位中的 {@link ItemStack}。若槽位为空，则返回 `undefined`。
	 * 此方法不会更改或清空指定槽位的内容。要获取某个槽位的引用，请参阅 {@link Container.getSlot}。
	 *
	 * Gets an {@link ItemStack} of the item at the specified slot.
	 * If the slot is empty, returns `undefined`. This method does
	 * not change or clear the contents of the specified slot. To
	 * get a reference to a particular slot, see {@link
	 * Container.getSlot}.
	 *
	 * @param slot
	 * 要从中检索物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to retrieve items from.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 * @seeExample getFirstHotbarItem.ts
	 */
	getItem(slot: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回一个容器槽位。这相当于对该容器中给定索引的槽位的引用。
	 *
	 * Returns a container slot. This acts as a reference to a slot
	 * at the given index for this container.
	 *
	 * @param slot
	 * 要返回的槽位的索引。此索引必须在容器范围内。
	 *
	 * The index of the slot to return. This index must be within
	 * the bounds of the container.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	getSlot(slot: number): ContainerSlot;
	/**
	 * @remarks
	 * 将物品从一个槽位移动到另一个槽位，可能跨容器移动。
	 *
	 * Moves an item from one slot to another, potentially across
	 * containers.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param fromSlot
	 * 要从中转移物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toSlot
	 * 要将物品转移到的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item to, on
	 * `toContainer`.
	 * @param toContainer
	 * 要转移到的目标容器。注意，这可以与源容器相同。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample moveBetweenContainers.ts
	 */
	moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
	/**
	 * @remarks
	 * 在特定槽位中设置一个物品堆。
	 *
	 * Sets an item stack within a particular slot.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param slot
	 * 要设置物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to set an item at.
	 * @param itemStack
	 * 要放置在指定槽位中的物品堆。将 `itemStack` 设置为 undefined 将清空该槽位。
	 *
	 * Stack of items to place within the specified slot. Setting
	 * `itemStack` to undefined will clear the slot.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	setItem(slot: number, itemStack?: ItemStack): void;
	/**
	 * @remarks
	 * 在容器之间的两个不同槽位交换物品。
	 *
	 * Swaps items between two different slots within containers.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param slot
	 * 要从此容器交换的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to swap from this container.
	 * @param otherSlot
	 * 要交换的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to swap with.
	 * @param otherContainer
	 * 要交换的目标容器。注意，这可以与此源容器相同。
	 *
	 * Target container to swap with. Note this can be the same
	 * container as this source.
	 * @throws
	 * 若此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围，则抛出异常。
	 *
	 * Throws if either this container or `otherContainer` are
	 * invalid or if the `slot` or `otherSlot` are out of bounds.
	 */
	swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
	/**
	 * @remarks
	 * 将物品从一个槽位移动到另一个容器，或者移动到同一容器中的第一个可用槽位。
	 *
	 * Moves an item from one slot to another container, or to the
	 * first available slot in the same container.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param fromSlot
	 * 要从中转移物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toContainer
	 * 要转移到的目标容器。注意，这可以与源容器相同。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @returns
	 * 一个包含无法转移的物品的物品堆。若所有物品都已转移，则返回 undefined。
	 *
	 * An itemStack with the items that couldn't be transferred.
	 * Returns undefined if all items were transferred.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample transferBetweenContainers.ts
	 */
	transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}
