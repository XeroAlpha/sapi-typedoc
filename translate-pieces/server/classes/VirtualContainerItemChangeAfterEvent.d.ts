/* IMPORT */ import { ItemStack, Player, VirtualContainer } from '..';

/**
 * Contains information about a slot of a virtual container
 * that a player changed through its screen. Changes made by
 * scripts do not raise this event.
 */
export class VirtualContainerItemChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item that was in the slot before the change, if any. A
     * storage item such as a bundle holds its contents as they
     * were at the change, unless it was dropped from the slot onto
     * the ground: its contents then go to the dropped item.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * The container that changed.
     *
     */
    readonly container: VirtualContainer;
    /**
     * @remarks
     * The item in the slot after the change, if any. A storage
     * item such as a bundle holds its contents as they were at the
     * change.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player who made the change.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The slot that changed.
     *
     */
    readonly slot: number;
}
