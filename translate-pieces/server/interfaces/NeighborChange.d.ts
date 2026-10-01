/* IMPORT */ import { BlockPermutation, Direction } from '..';

/**
 * Contains information regarding a block change in one
 * neighboring direction.
 */
export interface NeighborChange {
    /**
     * @remarks
     * The permutation of the neighboring block after its last
     * change during the tick.
     *
     */
    blockPermutation: BlockPermutation;
    /**
     * @remarks
     * Direction from the block receiving the event to the
     * neighboring block that changed.
     *
     */
    direction: Direction;
    /**
     * @remarks
     * The permutation of the neighboring block before its first
     * change during the tick.
     *
     */
    previousPermutation: BlockPermutation;
}
