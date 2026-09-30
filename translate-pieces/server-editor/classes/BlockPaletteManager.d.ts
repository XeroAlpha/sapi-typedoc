/* IMPORT */ import { BlockType } from '../../server';
/* IMPORT */ import { BlockPalette, IBlockPaletteItem } from '..';

export class BlockPaletteManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    /**
     * @throws
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    /**
     * @throws
     */
    getSelectedBlockType(): BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}
