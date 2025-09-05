/* IMPORT */ import { BlockBoundingBoxUtils, Vector3 } from '..';

/**
 * A BlockBoundingBox is an interface to an object which
 * represents an AABB aligned rectangle.
 * The BlockBoundingBox assumes that it was created in a valid
 * state (min <= max) but cannot guarantee it (unless it was
 * created using the associated {@link BlockBoundingBoxUtils}
 * utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BlockBoundingBox is not a representation of blocks - it
 * has no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * A {@link Vector3} that represents the largest corner of the
     * rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link Vector3} that represents the smallest corner of the
     * rectangle
     *
     */
    min: Vector3;
}
