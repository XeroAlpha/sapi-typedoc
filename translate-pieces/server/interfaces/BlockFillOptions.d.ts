/* IMPORT */ import { BlockPermutation } from '../index';

/**
 * @beta
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * When specified, the fill operation will only apply to blocks
     * that match this description.
     *
     */
    matchingBlock?: BlockPermutation;
}