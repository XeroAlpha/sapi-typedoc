/* IMPORT */ import { BlockPermutation, BlockType, IBlockPaletteItem, WeightedBlock } from '../index';

export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addBlock(
        block: BlockPermutation | BlockType | string,
        weight: number,
    ): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeBlockAt(index: number): void;
}