/* IMPORT */ import { BlockVolume, BlockVolumeBase, RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetComponentError, RelativeVolumeListBlockVolume, WidgetComponentBase } from '..';

export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightHullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    highlightOutlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    hullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mirror: StructureMirrorAxis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOrigin: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation: StructureRotation;
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
    readonly transformedWorldVolume: BlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    volumeOffset: Vector3;
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
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
}
