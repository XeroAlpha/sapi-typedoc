/* IMPORT */ import { BlockFilter } from '..';

/**
 * Contains additional options for getBlockStandingOn and
 * getAllBlocksStandingOn.
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * When specified, the function will include / exclude what
     * block(s) are returned based on the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * If true, all blocks of height 0.2 or lower like trapdoors
     * and carpets will be ignored, and the block underneath will
     * be returned.
     *
     */
    ignoreThinBlocks?: boolean;
}
