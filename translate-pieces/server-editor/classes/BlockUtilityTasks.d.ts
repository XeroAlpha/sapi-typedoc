/* IMPORT */ import { BlockPermutation, BlockType, BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, BlockUtilityExtrudeDirection, BlockUtilityFloodMatchCriteria, BlockUtilityManifest, RelativeVolumeListBlockVolume } from '..';

export class BlockUtilityTasks {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    extrude(
        location: Vector3,
        direction?: BlockUtilityExtrudeDirection,
        faceRadius?: number,
        layerCount?: number,
        isShrink?: boolean,
        criteria?: BlockUtilityFloodMatchCriteria,
        customBlockList?: string[],
        maxBlocksPerTick?: number,
        buildGeometry?: boolean,
        tolerance?: number,
        faceVolume?: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): Promise<RelativeVolumeListBlockVolume>;
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
    floodSearch(
        location: Vector3,
        criteria?: BlockUtilityFloodMatchCriteria,
        radius?: number,
        customBlockList?: string[],
        maxResultBlocks?: number,
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
