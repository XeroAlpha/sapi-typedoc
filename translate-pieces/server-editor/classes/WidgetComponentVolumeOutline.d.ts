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
     * @throws {InvalidWidgetComponentError}
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
     * @throws {InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
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
