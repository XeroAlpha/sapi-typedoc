/**
 * Specifies how a structure should be saved.
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * The structure will be temporarily saved to memory. The
     * structure will persist until the world is shut down.
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * The structure will be saved to the world file and persist
     * between world loads. A saved structure can be removed from
     * the world via @minecraft/server.StructureManager.delete.
     *
     */
    World = 'World',
}
