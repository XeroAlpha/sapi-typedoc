/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { IBlockPaletteItem } from '..';

export class BlockPalette {
    /**
     * @throws {ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    removeItems(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}
