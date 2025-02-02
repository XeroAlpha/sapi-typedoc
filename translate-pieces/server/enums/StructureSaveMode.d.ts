/**
 * Specifies how a structure should be saved.
 *
 * 表示如何保存结构。
 */
export enum StructureSaveMode {
	/**
	 * @remarks
	 * The structure will be temporarily saved to memory. The
	 * structure will persist until the world is shut down.
	 *
	 * 表示结构将被临时保存到内存中。该结构将持续存在，直到世界被关闭。
	 *
	 */
	Memory = "Memory",
	/**
	 * @remarks
	 * The structure will be saved to the world file and persist
	 * between world loads. A saved structure can be removed from
	 * the world via @minecraft/server.StructureManager.delete.
	 *
	 * 表示结构将被保存到世界文件中，并在世界加载之间持续存在。可以通过@minecraft/server.StructureManager.delete从世界中删除已保存的结构。
	 *
	 */
	World = "World",
}
