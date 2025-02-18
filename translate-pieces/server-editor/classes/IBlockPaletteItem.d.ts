/* IMPORT */ import { BlockPaletteItemType, minecraftserver } from '../index';

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}