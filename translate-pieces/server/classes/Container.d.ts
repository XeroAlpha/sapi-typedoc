/* IMPORT */ import { ContainerSlot, ItemStack } from '../index';

/**
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @example containers.js
 * ```typescript
 * let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location
 * let rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location
 *
 * const chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });
 *
 * let leftChestBlock = defaultDimension.getBlock(leftLocation);
 * let rightChestBlock = defaultDimension.getBlock(rightLocation);
 *
 * leftChestBlock.setType(MinecraftBlockTypes.chest);
 * rightChestBlock.setType(MinecraftBlockTypes.chest);
 *
 * const rightChestInventoryComp = rightChestBlock.getComponent("inventory");
 * const leftChestInventoryComp = leftChestBlock.getComponent("inventory");
 * const chestCartInventoryComp = chestCart.getComponent("inventory");
 *
 * const rightChestContainer = rightChestInventoryComp.container;
 * const leftChestContainer = leftChestInventoryComp.container;
 * const chestCartContainer = chestCartInventoryComp.container;
 *
 * rightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
 * test.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");
 *
 * rightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));
 * test.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");
 *
 * test.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);
 * test.assert(
 *   rightChestContainer.emptySlotsCount === 25,
 *   "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount
 * );
 *
 * const itemStack = rightChestContainer.getItem(0);
 * test.assert(itemStack.id === "apple", "Expected apple");
 * test.assert(itemStack.amount === 10, "Expected 10 apples");
 * test.assert(itemStack.data === 0, "Expected 0 data");
 *
 * leftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));
 *
 * rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
 * rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
 *
 * test.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");
 * test.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");
 * test.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");
 *
 * ```
 */
export class Container {
    private constructor();
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
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
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
     * @example getItem.ts
     * ```typescript
     * // A function that gets a copy of the first item in the player's hotbar
     * import { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';
     *
     * function getFirstHotbarItem(player: Player): ItemStack | undefined {
     *     const inventory = player.getComponent(EntityInventoryComponent.componentId);
     *     if (inventory && inventory.container) {
     *         return inventory.container.getItem(0);
     *     }
     *     return undefined;
     * }
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @beta
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
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * This function can't be called in read-only mode.
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
     * @example moveItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.moveItem(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
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
     * @example swapItems.ts
     * ```typescript
     * // A function that swaps an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.swapItems(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * This function can't be called in read-only mode.
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
     * @example transferItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.transferItem(slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}