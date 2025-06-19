/* IMPORT */ import { ContainerRules, ContainerRulesError, ContainerSlot, InvalidContainerError, ItemStack } from '../index';

/**
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @seeExample containers.ts
 */
export class Container {
    private constructor();
    /**
     * @beta
     */
    readonly containerRules?: ContainerRules;
    /**
     * @remarks
     * Count of the slots in the container that are empty.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @beta
     * @remarks
     * The combined weight of all items in the container.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;
    /**
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * @worldMutation
     *
     * @param itemStack
     * The stack of items to add.
     * @throws
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * @worldMutation
     *
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @rc
     * @remarks
     * Attempts to find an item inside the container
     *
     * @param itemStack
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @rc
     * @remarks
     * Find the index of the first instance of an item inside the
     * container
     *
     * @param itemStack
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;
    /**
     * @rc
     * @remarks
     * Find the index of the last instance of an item inside the
     * container
     *
     * @param itemStack
     * The item to find.
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;
    /**
     * @rc
     * @remarks
     * Finds the index of the first empty slot inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;
    /**
     * @rc
     * @remarks
     * Finds the index of the first item inside the container
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @seeExample getFirstHotbarItem.ts
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * @param slot
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * @worldMutation
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample moveBetweenContainers.ts
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * @worldMutation
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * @worldMutation
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * @worldMutation
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @returns
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * Won't throw {@link ContainerRules} error for over weight
     * limit but will instead add items up to the weight limit.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @seeExample transferBetweenContainers.ts
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}