/* IMPORT */ import { BlockEvent, NeighborChange } from '..';

/**
 * Contains information regarding neighboring block changes for
 * a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentNeighborChangedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns the neighboring block changes for this event.
     *
     * @returns
     * One entry for each neighboring direction that changed,
     * ordered by when each direction first changed. If a direction
     * changed multiple times during the tick, the entry contains
     * the permutation before the first change and after the last
     * change. Intermediate permutations are not included.
     */
    getChanges(): NeighborChange[];
}
