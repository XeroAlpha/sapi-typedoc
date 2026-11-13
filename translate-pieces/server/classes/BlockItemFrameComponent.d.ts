/* IMPORT */ import { BlockComponent, InvalidBlockComponentError, ItemFrameRotation, ItemStack } from '..';

/**
 * Represents the frame holding an item of a block in the
 * world. You can replace the item, remove it, drop it into the
 * world, or get and set its rotation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockItemFrameComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:item_frame';
    /**
     * @remarks
     * Removes the framed item and drops it into the world.
     *
     * @worldMutation
     *
     * @throws {InvalidBlockComponentError}
     */
    dropFramedItem(): void;
    /**
     * @remarks
     * Gets the item stack currently displayed in the frame.
     *
     * @returns
     * The framed item stack, or undefined if the frame is empty.
     * @throws {InvalidBlockComponentError}
     */
    getFramedItem(): ItemStack | undefined;
    /**
     * @remarks
     * Gets the current rotation of the item frame.
     *
     * @returns
     * The current {@link ItemFrameRotation} of the item frame.
     * @throws {InvalidBlockComponentError}
     */
    getRotation(): ItemFrameRotation;
    /**
     * @remarks
     * Sets or replaces the item displayed in the frame. Pass
     * undefined to remove the item without dropping it.
     *
     * @worldMutation
     *
     * @param itemStack
     * The item stack to display in the frame, or undefined to
     * clear it without dropping it.
     * @throws {InvalidBlockComponentError}
     */
    setFramedItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the rotation of the item frame.
     *
     * @worldMutation
     *
     * @param rotation
     * The {@link ItemFrameRotation} to apply to the item frame.
     * @throws {InvalidBlockComponentError}
     */
    setRotation(rotation: ItemFrameRotation): void;
}
