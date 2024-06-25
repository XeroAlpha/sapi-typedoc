/* IMPORT */ import { Dimension, InvalidStructureError, Structure, StructureCreateOptions, StructurePlaceOptions, StructureSaveMode, Vector3, minecraftcommon } from '../index';

/**
 * Manager for Structure related APIs. Includes APIs for
 * creating, getting, placing and deleting Structures.
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * Creates an empty Structure in memory. Use {@link
     * Structure.setBlockPermutation} to populate the structure
     * with blocks and save changes with {@link
     * @minecraft/server.Structure.save}.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The name of the structure. A valid identifier must include a
     * namespace and must be unique.
     * @param size
     * The size of the structure. For example, to create a single
     * block structure the size should be {x:1, y:1, z:1}.
     * @param saveMode
     * How the Structure should be saved upon creation. Defaults to
     * StructureSaveMode.Memory.
     * @returns
     * Returns the newly created Structure.
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * Creates a new Structure from blocks in the world. This is
     * functionally equivalent to the /structure save command.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The name of the structure. A valid identifier must include a
     * namespace and must be unique.
     * @param dimension
     * The dimension where the blocks should be read from.
     * @param options
     * Additional options for creating a structure from the world.
     * @returns
     * Returns the newly created Structure.
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     * Throws if the structure bounds exceed the maximum size.
     * Throws if the structure bounds contains blocks outside the
     * world bounds.
     *
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * Deletes a structure from memory and from the world if it
     * exists.
     *
     * This function can't be called in read-only mode.
     *
     * @param structure
     * The structure identifier or Structure object that should be
     * deleted. Note, a Structure object will become invalid after
     * it is deleted.
     * @returns
     * Returns whether the structure was removed.
     * @throws
     * Throws if a structure cannot be removed. For example, a
     * structure loaded from a Behavior Pack.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * Gets a Structure that is saved to memory or the world.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The name of the structure to get.
     * @returns
     * Returns a Structure if it exists, otherwise undefined.
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * Places a structure in the world. Structures placed in
     * unloaded chunks will be queued for loading.
     *
     * This function can't be called in read-only mode.
     *
     * @param structure
     * The structure's identifier or a Structure object.
     * @param dimension
     * The dimension where the Structure should be placed.
     * @param location
     * The location within the dimension where the Structure should
     * be placed.
     * @param options
     * Additional options for Structure placement.
     * @throws
     * Throws if the integrity value is outside of the range [0,1]
     * Throws if the integrity seed is invalid.
     * Throws if the placement location contains blocks that are
     * outside the world bounds.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
}