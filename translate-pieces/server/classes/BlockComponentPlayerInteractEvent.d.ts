/* IMPORT */ import { BlockEvent, Direction, Player, Vector3 } from '../index';

/**
 * @beta
 * Contains information regarding a specific block being
 * interacted with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The block face that was interacted with.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block that the player interacted with.
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * The player that interacted with this block.
     *
     */
    readonly player?: Player;
}