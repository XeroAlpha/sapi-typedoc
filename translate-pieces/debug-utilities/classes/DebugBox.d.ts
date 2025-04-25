/* IMPORT */ import { DebugShape, minecraftserver } from '../index';

/**
 * A debug shape class that represents a box or cuboid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugBox extends DebugShape {
    /**
     * @remarks
     * The bounding box of the shape. The final box will be this
     * bound multiplied by the shape's scale.
     *
     */
    bound: minecraftserver.Vector3;
    constructor(location: minecraftserver.Vector3);
}