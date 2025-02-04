/* IMPORT */ import { BiomeType } from "../index";

/**
 * @beta
 * 表示在Minecraft中注册的可用生物群系类型目录。
 *
 * Supports a catalog of available biome types registered
 * within Minecraft.
 */
export class BiomeTypes {
	private constructor();
	/**
	 * @remarks
	 * 返回特定的生物群系类型。
	 *
	 * Returns a specific biome type.
	 *
	 * @param typeName
	 * 生物群系的标识符。通常应使用带命名空间的标识符
	 * (例如，minecraft:frozen_peaks)。
	 *
	 * Identifier of the biome.  Generally, namespaced identifiers
	 * (e.g., minecraft:frozen_peaks) should be used.
	 * @returns
	 * 若生物群系存在，则返回一个 BiomeType 对象。若不存在，
	 * 则返回 undefined。
	 *
	 * If the biome exists, a BiomeType object is returned. If not,
	 * undefined is returned.
	 */
	static get(typeName: string): BiomeType | undefined;
	/**
	 * @remarks
	 * 返回Minecraft中所有注册的生物群系类型。
	 *
	 * Returns all registered biome types within Minecraft
	 *
	 */
	static getAll(): BiomeType[];
}
