/* IMPORT */ import { Entity, EntityAttachPoint } from '..';

/**
 * @rc
 * Used to attach the camera to a non player entity.
 */
export interface CameraAttachOptions {
    /**
     * @remarks
     * Set a non player entity for the camera to target.
     *
     */
    entity: Entity;
    /**
     * @remarks
     * The location of the entity that you want to target (eg.
     * head, feet, eyes).
     *
     */
    locator: EntityAttachPoint;
}
