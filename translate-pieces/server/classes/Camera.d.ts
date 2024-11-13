/* IMPORT */ import { CameraDefaultOptions, CameraFadeOptions, CameraFixedBoomOptions, CameraSetFacingOptions, CameraSetLocationOptions, CameraSetPosOptions, CameraSetRotOptions, CameraTargetOptions } from '../index';

/**
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * This function can't be called in read-only mode.
     *
     * @param fadeCameraOptions
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * Sets the current active camera for the specified player.
     *
     * This function can't be called in read-only mode.
     *
     * @param cameraPreset
     * Identifier of a camera preset file defined within JSON.
     * @param setOptions
     * Additional options for the camera.
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraDefaultOptions
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
}