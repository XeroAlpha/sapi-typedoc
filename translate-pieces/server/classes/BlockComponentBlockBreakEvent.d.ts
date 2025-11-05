/* IMPORT */ import { Block, BlockEvent, BlockPermutation, Entity } from '..';

/**
 * @rc
 * Contains information regarding a specific block being
 * broken.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The block that caused destruction.
     *
     */
    readonly blockDestructionSource?: Block;
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The Actor that caused destruction.
     *
     */
    readonly entitySource?: Entity;
}
