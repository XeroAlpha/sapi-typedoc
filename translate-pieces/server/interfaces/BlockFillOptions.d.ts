/* IMPORT */ import { BlockFilter } from '../index';

/**
 * @beta
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    blockFilter?: BlockFilter;
    ignoreChunkBoundErrors?: boolean;
}