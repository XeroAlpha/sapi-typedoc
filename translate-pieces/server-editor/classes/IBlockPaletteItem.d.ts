/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { BlockPaletteItemType } from '..';

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
