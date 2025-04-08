/* IMPORT */ import { RelativeVolumeListBlockVolume, SelectionContainerBase, minecraftserver } from '../index';

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
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
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
     *
     * {@link Error}
     */
    getBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    remove(
        volume:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    set(
        volume:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    translate(offset: minecraftserver.Vector3): void;
}