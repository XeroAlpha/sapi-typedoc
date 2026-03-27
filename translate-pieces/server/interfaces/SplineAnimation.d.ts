/* IMPORT */ import { ProgressKeyFrame, RotationKeyFrame } from '..';

/**
 * Collection of key frames for camera animation.
 */
export interface SplineAnimation {
    /**
     * @remarks
     * Key frames for camera progress along a given curve.
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * Key frames for camera rotation.
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}
