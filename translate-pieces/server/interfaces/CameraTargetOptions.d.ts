/* IMPORT */ import { Entity, Vector3 } from '..';

/**
 * Used to target an entity with a free camera.
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * Set an <x, y, z> offset from the target entity's center.
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * The singular entity you want to target.
     *
     */
    targetEntity: Entity;
}
