/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { IBlockPaletteItem, WeightedBlock } from '..';

export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * @worldMutation
     *
     * @param weight
     * Bounds: [1, 100]
     * @throws
     */
    addBlock(block: BlockPermutation | BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    removeBlockAt(index: number): void;
}
