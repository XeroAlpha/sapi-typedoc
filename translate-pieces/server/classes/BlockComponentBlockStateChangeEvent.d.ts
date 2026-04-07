/* IMPORT */ import { BlockEvent, BlockPermutation } from '..';

/**
 * @beta
 * Contains information regarding a specific block permutation
 * that was changed from a previous permutation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The previous BlockPermutation.
     *
     */
    readonly previousPermutation: BlockPermutation;
}
