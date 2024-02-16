/* IMPORT */ import { BlockVolume, Dimension, InvalidStructureError, StructureCreateOptions, StructurePlaceOptions, StructureSaveMode, StructureTemplate, Vector3, minecraftcommon } from '../index';

/**
 * @beta
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        blockVolume: BlockVolume,
        options?: StructureCreateOptions,
    ): StructureTemplate;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | StructureTemplate): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    get(identifier: string): StructureTemplate | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | StructureTemplate,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
}