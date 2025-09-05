/* IMPORT */ import { EntityComponent, ItemStack } from '..';

/**
 * Represents the players cursor inventory. Used when moving
 * items between between containers in the inventory UI. Not
 * used with touch controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The ItemStack currently in the players cursor inventory.
     *
     * @throws This property can throw when used.
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * Clears the players cursor inventory.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
}
