/* IMPORT */ import { ItemStack, Player, VirtualContainer, VirtualContainerCloseReason } from '..';

/**
 * Contains information about a player's virtual container
 * screen that closed, including the contents of the container
 * at that moment.
 */
export class VirtualContainerCloseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The container whose screen closed.
     *
     */
    readonly container: VirtualContainer;
    /**
     * @remarks
     * The contents of every slot of the container when the screen
     * closed. Empty slots are undefined. Storage items such as
     * bundles hold their contents as they were at that moment.
     *
     */
    readonly items: (ItemStack | undefined)[];
    /**
     * @remarks
     * The player whose screen closed. When the reason is
     * PlayerLeft the player is no longer valid.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * Why the screen closed.
     *
     */
    readonly reason: VirtualContainerCloseReason;
}
