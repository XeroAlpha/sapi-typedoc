/* IMPORT */ import { SplineAnimation } from '..';

/**
 * @rc
 * Used to create camera animations.
 */
export interface AnimationOptions {
    /**
     * @remarks
     * Key frames for the camera animation.
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * Total time of the camera animation in seconds.
     *
     */
    totalTimeSeconds: number;
}
