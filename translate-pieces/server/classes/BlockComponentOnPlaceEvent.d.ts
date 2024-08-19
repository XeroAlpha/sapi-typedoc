/* IMPORT */ import { BlockEvent, BlockPermutation } from '../index';

/**
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Previous block at this location that was replaced.
     *
     */
    readonly previousBlock: BlockPermutation;
}