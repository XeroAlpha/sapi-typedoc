/* IMPORT */ import { EntityFilter } from '..';

/**
 * Contains additional options for an entity raycast operation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * If true, blocks will not be considered as blocks that 'stop'
     * the raycast.
     *
     */
    ignoreBlockCollision?: boolean;
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
     * ray. Defaults to false. When true, negative distances throw
     * InvalidArgumentError.
     *
     */
    usePreciseRaycast?: boolean;
}
