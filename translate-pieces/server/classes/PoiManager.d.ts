/* IMPORT */ import { PoiBlockManager } from '..';

/**
 * @beta
 * Provides access to point-of-interest (POI) data in a
 * dimension.
 *
 * Required Experiments:
 * - Poi
 *
 */
export class PoiManager {
    private constructor();
    /**
     * @remarks
     * Provides access to block-based points of interest in the
     * dimension.
     *
     */
    readonly blocks: PoiBlockManager;
}
