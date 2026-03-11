/* IMPORT */ import { BlockEvent, ContainerAccessSource } from '..';

/**
 * @beta
 * Contains information regarding a specific container block
 * being closed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The source of the block container being closed.
     *
     * @worldMutation
     *
     */
    closeSource: ContainerAccessSource;
}
