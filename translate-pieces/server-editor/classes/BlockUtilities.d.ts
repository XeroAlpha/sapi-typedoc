/* IMPORT */ import { BlockBoundingBox, BlockPermutation, BlockType, BlockVolumeBase, ListBlockVolume, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, ContiguousSelectionProperties, QuickExtrudeProperties, RelativeVolumeListBlockVolume } from '..';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    fillVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: BlockPermutation | BlockType | string,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    findObscuredBlocksWithinVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionLocationBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMaxLocation(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMinLocation(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): ListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    isHighPriorityFillBlock(
        block: BlockPermutation | BlockType | string,
        location: Vector3,
    ): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds:
            | BlockBoundingBox
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    shrinkWrapVolume(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
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
    ): RelativeVolumeListBlockVolume;
}
