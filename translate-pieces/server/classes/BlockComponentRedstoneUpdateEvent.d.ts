/* IMPORT */ import { BlockEvent } from '..';

/**
 * Contains information regarding a specific block redstone
 * update event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * The first update event for the redstone component.
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * The redstone signal strength passing through this block. It
     * is guaranteed to be >= the `min_power` of the block's
     * 'minecraft:redstone_consumer' component.
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * The redstone signal strength from the last tick that was
     * passing through this block. It is guaranteed to be >= the
     * `min_power` of the block's 'minecraft:redstone_consumer'
     * component.
     *
     */
    readonly previousPowerLevel: number;
}
