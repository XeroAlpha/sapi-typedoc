/* IMPORT */ import { DebugShape, minecraftserver } from '../index';

/**
 * A debug shape class that represents a line segment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    /**
     * @remarks
     * The end location of the line segment. The final line will
     * spawn between location and endLocation.
     *
     */
    endLocation: minecraftserver.Vector3;
    constructor(location: minecraftserver.Vector3, endLocation: minecraftserver.Vector3);
}