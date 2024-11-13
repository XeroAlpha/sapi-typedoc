/* IMPORT */ import { BlockFilter } from '../index';

/**
 * @rc
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * When specified, the fill operation will include / exclude
     * the blocks added to the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * When true fillBlocks will not error if part of the fill
     * volume is outside of loaded chunks bounds. Instead it will
     * just fill the blocks that are inside the loaded chunk bounds
     * and ignoring blocks outside.
     *
     */
    ignoreChunkBoundErrors?: boolean;
}