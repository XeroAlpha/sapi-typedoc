/* IMPORT */ import { EasingType } from '..';

/**
 * @beta
 * Key frame that holds the progress of the camera animation.
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * Value to denote how far along the curve the camera will be.
     * Values are [0.0, 1.0] inclusive.
     *
     */
    alpha: number;
    /**
     * @remarks
     * The optional easing type that the frame will use for
     * position.
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * Time value that the camera will be at the given alpha.
     *
     */
    timeSeconds: number;
}
