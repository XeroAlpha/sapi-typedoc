/* IMPORT */ import { Dimension, Vector3 } from '..';

/**
 * @rc
 * Options to create a ticking area using the {@link
 * TickingAreaManager}.
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * The dimension the ticking area will be in.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * Corner block location of the bounding box.
     *
     */
    from: Vector3;
    /**
     * @remarks
     * Opposite corner block location of the bounding box.
     *
     */
    to: Vector3;
}
