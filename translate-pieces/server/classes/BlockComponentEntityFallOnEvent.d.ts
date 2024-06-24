/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an entity falling onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that fell onto the block.
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * The distance that the entity fell onto this block with.
     *
     */
    readonly fallDistance: number;
}