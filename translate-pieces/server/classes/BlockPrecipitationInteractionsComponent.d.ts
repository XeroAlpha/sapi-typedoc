/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * @rc
 * Represents a how a block interacts with precipitation (such
 * as rain or snow).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * Returns `true` if falling snow will accumulate naturally on
     * the block. Returns `false` if snow will not accumulate on
     * the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * Returns `true` if rain will not go through the block.
     * Returns `false` if rain should go through the block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}
