/* IMPORT */ import { BlockVolume, BlockVolumeBase, Vector3 } from '../../server';

export class RelativeVolumeListBlockVolume extends BlockVolumeBase {
    readonly isEmpty: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    origin?: Vector3;
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /**
     * @remarks
     * @worldMutation
     *
     */
    add(
        toAdd:
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
    /**
     * @remarks
     * @worldMutation
     *
     */
    getVolumeList(): BlockVolume[];
    hasAdjacent(location: Vector3, normalizedOffset: Vector3): boolean;
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
        toRemove:
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
        toSet:
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
