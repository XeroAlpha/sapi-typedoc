/* IMPORT */ import { BlockPermutation, BlockType, BlockVolumeBase } from '../../server';
/* IMPORT */ import { BlockMaskList, BlockUtilityManifest, RelativeVolumeListBlockVolume } from '..';

export class BlockUtilityTasks {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): Promise<number>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    generateManifest(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): Promise<BlockUtilityManifest>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    replaceBlocksInSelection(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        fromBlockIdentifier: string,
        toBlock?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): Promise<number>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
        maxBlocksPerTick?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
}
