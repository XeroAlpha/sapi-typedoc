/* IMPORT */ import { BlockBoundingBox, BlockVolume, BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { RelativeVolumeListBlockVolume, SelectionContainerBase } from '..';

export class SelectionContainerVolume extends SelectionContainerBase {
    private constructor();
    readonly isEmpty: boolean;
    readonly volumeCount: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    add(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    clear(): void;
    get(): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    moveTo(location: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    remove(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    set(
        volume:
            | Vector3[]
            | BlockVolume
            | BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    translate(offset: Vector3): void;
}
