/* IMPORT */ import { BlockEvent } from '..';

/**
 * Contains information regarding a named tick event for a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentNamedTickEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Name of the named tick event.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Checks whether this named tick event was scheduled by this
     * pack.
     *
     * @returns
     * True if this named tick event was scheduled by this pack;
     * otherwise, false.
     */
    isMine(): boolean;
}
