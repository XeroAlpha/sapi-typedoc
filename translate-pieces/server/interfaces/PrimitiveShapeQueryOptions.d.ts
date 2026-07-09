/* IMPORT */ import { Entity, Vector3 } from '..';

/**
 * @beta
 * Contains optional filters that control which primitive
 * shapes are returned from a primitive shapes query.
 */
export interface PrimitiveShapeQueryOptions {
    /**
     * @remarks
     * If specified, only returns shapes attached to this entity.
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, only includes shapes that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, only includes shapes that are at least this
     * distance away from the location specified in the location
     * property.
     *
     */
    minDistance?: number;
}
