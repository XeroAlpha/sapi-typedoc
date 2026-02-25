/* IMPORT */ import { EasingType, Vector3 } from '..';

/**
 * @rc
 * Key frame that holds the rotation of the camera animation.
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * The optional easing type that the frame will use for
     * rotation.
     *
     */
    easingFunc?: EasingType;
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
