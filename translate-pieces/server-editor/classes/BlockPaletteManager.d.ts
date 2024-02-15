/* IMPORT */ import { minecraftserver } from '../index';

export class BlockPaletteManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setSelectedBlockType(block: minecraftserver.BlockType): void;
}