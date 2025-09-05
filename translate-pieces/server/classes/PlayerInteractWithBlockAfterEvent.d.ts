/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '..';

/**
 * Contains information regarding an event after a player
 * successfully interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * The ItemStack before the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * The ItemStack after the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}
