/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector2, Vector3 } from '../../server';

/**
 * A debug shape class that represents a cylinder.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCylinder extends DebugShape {
    /**
     * @remarks
     * The height of the cylinder.
     *
     */
    height: number;
    /**
     * @remarks
     * The number of segments used to approximate the circular
     * cross-section of the cylinder. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * The radii of the cylinder's circular cross-section (x:
     * bottom radius, y: top radius).
     *
     */
    radii: Vector2;
    constructor(location: DimensionLocation | Vector3);
}
