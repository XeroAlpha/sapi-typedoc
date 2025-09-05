/* IMPORT */ import { BlockBoundingBox, BlockPermutation, BlockType, BlockVolumeBase, CompoundBlockVolume, ListBlockVolume, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, ContiguousSelectionProperties, QuickExtrudeProperties, RelativeVolumeListBlockVolume } from '..';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume:
            | BlockVolumeBase
            | CompoundBlockVolume
            | RelativeVolumeListBlockVolume,
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
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): CompoundBlockVolume;
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
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): ListBlockVolume;
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
     * @throws This function can throw errors.
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
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}
