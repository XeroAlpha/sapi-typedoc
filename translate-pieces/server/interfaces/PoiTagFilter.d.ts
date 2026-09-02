/**
 * @beta
 * Selects block point-of-interest types that have all
 * specified tags.
 */
export interface PoiTagFilter {
    /**
     * @remarks
     * Namespaced POI tags that a matching type must contain. All
     * tags in the array are required.
     *
     */
    tags: string[];
}
