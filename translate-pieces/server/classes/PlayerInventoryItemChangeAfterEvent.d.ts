/* IMPORT */ import { ItemStack, Player, PlayerInventoryType } from '../index';

/**
 * @rc
 * Contains information regarding an event after a player's
 * inventory item changes.
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The previous item stack.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * Inventory type.
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * @remarks
     * The new item stack.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The slot index with the change.
     *
     */
    readonly slot: number;
}