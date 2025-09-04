/* IMPORT */ import { BlockPaletteItemType, BlockPermutation, BlockType } from '../index';

export class IBlockPaletteItem {
    private constructor();
    getBlock(): BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBlock(block: BlockPermutation | BlockType | string): void;
}