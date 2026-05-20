/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, ItemStack, Player } from '..';

/**
 * @beta
 * Contains information regarding an event after a player
 * cancels breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The permutation of the block that the player cancelled
     * breaking.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * The progress of breaking the block when the player cancelled
     * in the exclusive range (0, 1).
     *
     */
    readonly breakProgress: number;
    /**
     * @remarks
     * The face of the block that was being broken.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * The item stack that the player was using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * Player that cancelled breaking the block for this event.
     *
     */
    readonly player: Player;
}
