/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * Contains information about an item moved from a player's
 * cursor to a container.
 */
export class PlayerCursorItemReleaseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack from the player's cursor.
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
