/* IMPORT */ import { Vector3 } from '..';

/**
 * @rc
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * Bounding volume size to look within.
     *
     */
    boundingSize?: Vector3;
}
