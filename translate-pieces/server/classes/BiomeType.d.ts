/**
 * Describes a type of biome.
 */
export class BiomeType {
    private constructor();
    /**
     * @remarks
     * Identifier of the biome type.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Returns a list of the biome's tags.
     *
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks if the biome has all of the provided tags.
     *
     * @param tags
     * The list of tags to check against the biome.
     */
    hasTags(tags: string[]): boolean;
}
