/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player } from '../index';

/**
 * @rc
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The block face that was placed onto.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * The block permutation that will be placed if the event is
     * not cancelled. If set to a different block permutation, that
     * permutation will be placed instead.
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * The player that is placing this block.
     *
     */
    readonly player?: Player;
}