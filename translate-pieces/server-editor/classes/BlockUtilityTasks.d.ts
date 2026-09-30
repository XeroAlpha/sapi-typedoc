/* IMPORT */ import { BlockPermutation, BlockType, BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, BlockUtilityExtrudeDirection, BlockUtilityFloodMatchCriteria, BlockUtilityShapeVolumeOptionsCone, BlockUtilityShapeVolumeOptionsCuboid, BlockUtilityShapeVolumeOptionsCylinder, BlockUtilityShapeVolumeOptionsEllipsoid, BlockUtilityShapeVolumeOptionsPyramid, ManifestTaskPromise, NumberTaskPromise, RelativeVolumeListBlockVolume, VolumeTaskPromise } from '..';

export class BlockUtilityTasks {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    createShapeVolume(
        options:
            | BlockUtilityShapeVolumeOptionsCone
            | BlockUtilityShapeVolumeOptionsCuboid
            | BlockUtilityShapeVolumeOptionsCylinder
            | BlockUtilityShapeVolumeOptionsEllipsoid
            | BlockUtilityShapeVolumeOptionsPyramid,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
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
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    fillVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    floodSearch(
        location: Vector3,
        criteria?: BlockUtilityFloodMatchCriteria,
        radius?: number,
        customBlockList?: string[],
        maxResultBlocks?: number,
        maxBlocksPerTick?: number,
        directionMask?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    generateManifest(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): ManifestTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    replaceBlocksInSelection(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        fromBlockIdentifier: string,
        toBlock?: BlockPermutation | BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    trimVolumeToFitContents(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
}
