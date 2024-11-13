/* IMPORT */ import { Selection, minecraftserver } from '../index';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: minecraftserver.BlockVolumeBase | minecraftserver.CompoundBlockVolume | Selection,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
}