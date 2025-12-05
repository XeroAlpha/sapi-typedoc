/**
 * @beta
 */
export interface BiomeFilter {
    excludeBiomes?: string[];
    excludeTags?: string[];
    includeBiomes?: string[];
    includeTags?: string[];
    superset: boolean;
}
