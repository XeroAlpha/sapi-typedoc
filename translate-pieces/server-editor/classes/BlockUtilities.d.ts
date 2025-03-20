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
     *
     * {@link Error}
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getMaxWorldLocation(): minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getMinWorldLocation(): minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isLocationInWorld(
        locationOrVolumeOrBounds:
            | minecraftserver.BlockVolumeBase
            | minecraftserver.BoundingBox
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
     *
     * {@link Error}
     */
    trimVolumeToFitContents(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}