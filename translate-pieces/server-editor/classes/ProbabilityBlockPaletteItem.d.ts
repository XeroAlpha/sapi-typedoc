/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { IBlockPaletteItem, WeightedBlock } from '..';

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
