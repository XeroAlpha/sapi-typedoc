/* IMPORT */ import { IBlockPaletteItem, minecraftcommon, minecraftserver } from '../index';

export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}