/* IMPORT */ import { BlockMaskList, ContiguousSelectionProperties, QuickExtrudeProperties, RelativeVolumeListBlockVolume, minecraftserver } from '../index';

export class BlockUtilities {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: minecraftserver.BlockVolumeBase | minecraftserver.CompoundBlockVolume | RelativeVolumeListBlockVolume,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionLocationBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMaxLocation(): minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDimensionMinLocation(): minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds:
            | minecraftserver.BlockBoundingBox
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
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
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}