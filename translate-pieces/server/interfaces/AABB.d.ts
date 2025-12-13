/* IMPORT */ import { Vector3 } from '..';

/**
 * Axis-aligned bounding box.
 */
export interface AABB {
    /**
     * @remarks
     * The centerpoint of the box.
     *
     */
    center: Vector3;
    /**
     * @remarks
     * Absolute distance from the centerpoint to the bounds of the
     * box. Equivalent to half of the box's length, height and
     * width. Will always be treated as positive.
     *
     */
    extent: Vector3;
}
