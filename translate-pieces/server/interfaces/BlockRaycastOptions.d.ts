/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
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
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}