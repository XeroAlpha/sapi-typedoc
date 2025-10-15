/* IMPORT */ import { DebugLine } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * The length of the arrow's head/tip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    /**
     * @remarks
     * Adds a new debug shape to the world.
     *
     */
    headLength: number;
    /**
     * @remarks
     * The radius of the arrow's head/tip.
     *
     */
    headRadius: number;
    /**
     * @remarks
     * The number of segments for the base circle of the arrow's
     * head/tip (default: 4).
     *
     */
    headSegments: number;
    constructor(
        location: DimensionLocation | Vector3,
        endLocation: Vector3,
    );
}
