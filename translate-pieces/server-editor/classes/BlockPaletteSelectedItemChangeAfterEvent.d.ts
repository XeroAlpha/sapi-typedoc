/* IMPORT */ import { IBlockPaletteItem } from '../index';

export class BlockPaletteSelectedItemChangeAfterEvent {
    private constructor();
    readonly selectedPaletteItem: IBlockPaletteItem;
}