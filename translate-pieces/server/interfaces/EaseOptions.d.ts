/* IMPORT */ import { EasingType } from '../index';

/**
 * Contains options associated with easing between positions
 * and/or rotations.
 */
export interface EaseOptions {
    /**
     * @remarks
     * Time for the ease operation.
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * Type of ease operation to use.
     *
     */
    easeType?: EasingType;
}