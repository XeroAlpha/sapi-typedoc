/* IMPORT */ import { EaseOptions } from '..';

/**
 * @rc
 * Used to change the field of view of the current camera.
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
