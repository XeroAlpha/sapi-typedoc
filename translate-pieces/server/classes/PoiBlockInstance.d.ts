/* IMPORT */ import { PoiBlockType, Vector3 } from '..';

/**
 * @beta
 * Describes a block point-of-interest instance returned by a
 * query.
 *
 * Required Experiments:
 * - Poi
 *
 */
export class PoiBlockInstance {
    private constructor();
    /**
     * @remarks
     * Block position of this POI instance.
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * Number of tickets currently available to be claimed from
     * this POI instance.
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * Type of this POI instance.
     *
     */
    readonly 'type': PoiBlockType;
}
