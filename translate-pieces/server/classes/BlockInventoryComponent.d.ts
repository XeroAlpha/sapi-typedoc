/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}