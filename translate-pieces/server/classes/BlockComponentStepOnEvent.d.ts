/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * Contains information regarding an entity stepping onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that stepped on the block.
     *
     */
    readonly entity?: Entity;
}
