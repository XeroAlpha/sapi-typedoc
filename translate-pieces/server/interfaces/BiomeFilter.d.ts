/**
 * Options to include or exclude biomes based on biome names,
 * tags, or namespaces. If no include options are added it will
 * select all biomes that are not rejected by the exclude
 * options. If at least one include option is added the biome
 * must match one of the include options to not be rejected.
 */
export interface BiomeFilter {
    /**
     * @remarks
     * Array of biome names that the filter should reject if any
     * matches.
     *
     */
    excludeBiomes?: string[];
    /**
     * @remarks
     * Array of namespaces that the filter should reject if the
     * biome belongs to at least one.
     *
     */
    excludeNamespaces?: string[];
    /**
     * @remarks
     * Array of biome tags that the filter should reject if any
     * matches.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Array of biome names that the filter should select if at
     * least one matches.
     *
     */
    includeBiomes?: string[];
    /**
     * @remarks
     * Array of namespaces that the filter should select if the
     * biome belongs to at least one.
     *
     */
    includeNamespaces?: string[];
    /**
     * @remarks
     * Array of biome tags that the filter should select if at
     * least one matches.
     *
     */
    includeTags?: string[];
}
