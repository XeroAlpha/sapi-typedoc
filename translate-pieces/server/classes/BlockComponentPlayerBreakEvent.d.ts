/* IMPORT */ import { BlockEvent, BlockPermutation, Player } from '../index';

/**
 * Contains information regarding a specific block being broken
 * by a player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The player that broke this block.
     *
     */
    readonly player?: Player;
}