/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { DimensionLocation, Vector3 } from '../../server';

/**
 * A debug shape class that represents a pyramid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugPyramid extends DebugShape {
    /**
     * @remarks
     * The depth of the pyramid's base.
     *
     */
    depth?: number;
    /**
     * @remarks
     * The height of the pyramid.
     *
     */
    height: number;
    /**
     * @remarks
     * The width of the pyramid's base.
     *
     */
    width: number;
    constructor(location: DimensionLocation | Vector3);
}
