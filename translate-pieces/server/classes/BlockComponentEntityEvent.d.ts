/* IMPORT */ import { BlockEvent, BlockPermutation, Entity } from '..';

/**
 * @beta
 * Contains information regarding an event sent by an entity to
 * this block in the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about the block receiving
     * the event.
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * The entity that sent the event.
     *
     */
    readonly entitySource?: Entity;
    /**
     * @remarks
     * Name of the event fired by the entity.
     *
     */
    readonly name: string;
}
