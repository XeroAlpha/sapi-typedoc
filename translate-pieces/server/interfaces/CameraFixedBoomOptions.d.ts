/* IMPORT */ import { Vector2, Vector3 } from '..';

/**
 * Options to control pivot points and offsets of the third
 * person boom preset.
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * Changes the pivot point to be <x, y, z> away from the
     * player.
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * Offsets the camera from center by <x, y>.
     *
     */
    viewOffset?: Vector2;
}
