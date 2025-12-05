/* IMPORT */ import { EntitySwingSource, ItemStack, Player } from '..';

/**
 * @rc
 * Contains information regarding a player starting to swing
 * their arm.
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack being held by the player at the start of
     * their swing.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The source of the Player swing, see {@link
     * EntitySwingSource}.
     *
     */
    readonly swingSource: EntitySwingSource;
}
