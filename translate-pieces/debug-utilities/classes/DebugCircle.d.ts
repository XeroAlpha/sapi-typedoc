/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { Vector3 } from '../../server';

/**
 * A debug shape class that represents a circle (2D).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: Vector3);
}
