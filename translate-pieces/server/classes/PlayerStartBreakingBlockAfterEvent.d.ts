/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, ItemStack, Player } from '..';

/**
 * @beta
 * Contains information regarding an event after a player
 * starts breaking a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The permutation of the block that the player is starting to
     * break.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * The face of the block being broken.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * The item stack that the player is using to break the block,
     * or undefined if empty hand.
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * Player that started breaking the block for this event.
     *
     */
    readonly player: Player;
}
