/* IMPORT */ import { BlockEvent } from '..';

/**
 * Contains information regarding a specific block redstone
 * update event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone signal strength passing through this block. It
     * is guaranteed to be >= the `min_power` of the block's
     * 'minecraft:redstone_consumer' component.
     *
     */
    readonly powerLevel: number;
}
