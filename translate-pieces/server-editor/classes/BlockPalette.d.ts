/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { IBlockPaletteItem } from '..';

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
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
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}
