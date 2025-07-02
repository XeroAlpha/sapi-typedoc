/* IMPORT */ import { EaseOptions } from '../index';

/**
 * @beta
 * Used to change the field of view of the current camera.
 *
 * Required Experiments:
 * - Required Experiment Toggle: Experimental Creator Cameras
 *
 */
export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    /**
     * @remarks
     * Set a value for the field of view.
     *
     */
    fov?: number;
}