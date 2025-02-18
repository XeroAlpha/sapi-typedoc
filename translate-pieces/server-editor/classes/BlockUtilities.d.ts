/* IMPORT */ import { Selection, minecraftserver } from '../index';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: minecraftserver.BlockVolumeBase | minecraftserver.CompoundBlockVolume | Selection,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
}