/* IMPORT */ import { Vector3 } from '..';

/**
 * @beta
 * Key frame that holds the rotation of the camera animation.
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * Value of the rotation of the camera.
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * Time value that the camera will be at the given rotation.
     *
     */
    timeSeconds: number;
}
