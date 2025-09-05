/* IMPORT */ import { BiomeType } from '..';

/**
 * @beta
 * Supports a catalog of available biome types registered
 * within Minecraft.
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific biome type.
     *
     * @param typeName
     * Identifier of the biome.  Generally, namespaced identifiers
     * (e.g., minecraft:frozen_peaks) should be used.
     * @returns
     * If the biome exists, a BiomeType object is returned. If not,
     * undefined is returned.
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * Returns all registered biome types within Minecraft
     *
     */
    static getAll(): BiomeType[];
}
