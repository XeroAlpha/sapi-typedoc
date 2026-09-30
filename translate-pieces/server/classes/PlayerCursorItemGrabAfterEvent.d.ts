/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * Contains information about an item moved from a container to
 * a player's cursor.
 */
export class PlayerCursorItemGrabAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack moved to the player's cursor.
     *
     */
    readonly item: ItemStack;
    /**
     * @remarks
     * The player whose cursor item changed.
     *
     */
    readonly player: Player;
}
