/* IMPORT */ import { BlockFilter } from '..';

/**
 * Options for finding blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockSearchOptions extends BlockFilter {
    /**
     * @remarks
     * When true, includes liquid blocks.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * When true, includes passable blocks, such as vines and
     * flowers.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum search distance, in blocks. Vertical searches use
     * whole blocks.
     *
     */
    maxDistance?: number;
}
