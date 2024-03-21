/* IMPORT */ import { BlockEvent, BlockPermutation, Player } from '../index';

/**
 * @beta
 * Contains information regarding a specific block being
 * destroyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was destroyed.
     *
     */
    readonly destroyedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The player that destroyed this block.
     *
     */
    readonly player?: Player;
}