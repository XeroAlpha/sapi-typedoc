/* IMPORT */ import { InvalidWidgetComponentError, RelativeVolumeListBlockVolume, WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightHullColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightOutlineColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showHighlightOutline: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showOutline: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    volumeOffset: minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setVolume(
        volumeToSet?:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
}