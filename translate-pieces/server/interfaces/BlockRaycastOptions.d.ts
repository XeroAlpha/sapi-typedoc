/* IMPORT */ import { BlockFilter } from '..';

/**
 * Contains additional options for configuring a block raycast
 * query.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum raycast distance, in blocks.
     *
     * Bounds: [-2147483648, 2147483647]
     */
    maxDistance?: number;
    /**
     * @remarks
     * When true, keeps fractional distances and checks the full
     * ray. Defaults to false.
     *
     */
    usePreciseRaycast?: boolean;
}
