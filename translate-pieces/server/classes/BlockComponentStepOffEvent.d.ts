/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that stepped off the block.
     *
     */
    readonly entity?: Entity;
}