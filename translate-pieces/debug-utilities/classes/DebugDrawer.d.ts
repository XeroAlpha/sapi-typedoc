/* IMPORT */ import { DebugShape } from '..';
/* IMPORT */ import { Dimension } from '../../server';

/**
 * Debug Drawing class used to allow adding and removing
 * wireframe shapes in world space.
 */
export class DebugDrawer {
    private constructor();
    /**
     * @remarks
     * Adds a new debug shape to the world.
     *
     * @param shape
     * The debug shape to be added. Should be of type DebugBox,
     * DebugLine, DebugCircle, DebugSphere, DebugArrow or
     * DebugText.
     */
    addShape(shape: DebugShape, dimension?: Dimension): void;
    /**
     * @remarks
     * Removes all debug shapes from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * Removes an instance of a debug shape from the world. This is
     * equivalent to calling remove on the shape itself.
     *
     */
    removeShape(shape: DebugShape): void;
}
