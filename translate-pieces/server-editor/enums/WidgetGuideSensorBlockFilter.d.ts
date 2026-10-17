/**
 * Controls which blocks stop a widget guide sensor. World and
 * widget boundary walls stop the sensor in every mode.
 */
export enum WidgetGuideSensorBlockFilter {
    /**
     * @remarks
     * Uses block selection outlines, including pickable
     * non-colliding blocks such as plants. This is the default and
     * preserves existing guide behavior.
     *
     */
    Any = 0,
    /**
     * @remarks
     * Uses block collision shapes, including partial blocks such
     * as slabs and stairs. Ignores liquids and blocks without
     * collision, such as flowers.
     *
     */
    Collidable = 1,
    /**
     * @remarks
     * Uses collision shapes of motion-blocking, cube-shaped blocks
     * only. Ignores liquids, non-colliding blocks, and partial
     * blocks such as slabs and stairs.
     *
     */
    FullBlocks = 2,
}
