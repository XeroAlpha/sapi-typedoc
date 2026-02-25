/* IMPORT */ import { AnimationOptions, CameraAttachOptions, CameraFadeOptions, CameraFixedBoomOptions, CameraFovOptions, CameraSetFacingOptions, CameraSetLocationOptions, CameraSetPosOptions, CameraSetRotOptions, CameraTargetOptions, CatmullRomSpline, EaseOptions, LinearSpline } from '..';

/**
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * Returns whether the Camera is valid to access and use. A
     * Camera is considered valid when the owning Player of the
     * Camera is loaded and valid itself.
     *
     */
    readonly isValid: boolean;
    /**
     * @rc
     * @remarks
     * Attaches the camera to a non-player entity.
     *
     * @worldMutation
     *
     * @param attachCameraOptions
     * Options for the entity the camera is attaching to. Contains
     * the entity identifier and optional entity location.
     * @throws This function can throw errors.
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * @worldMutation
     *
     * @param fadeCameraOptions
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @rc
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * Sets the current active camera for the specified player.
     *
     * @worldMutation
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
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * Sets the current active camera with easing.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * Options to ease the camera from the previous camera to the
     * current one.
     * @throws
     * Throws when easing to minecraft:first_person presets
     * currently without the experimental cameras toggle enabled.
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * Sets the current active camera for the specified player and
     * resets the position and rotation to the values defined in
     * the JSON.
     *
     * @worldMutation
     *
     * @param cameraPreset
     * Identifier of a camera preset file defined within JSON.
     * @param easeOptions
     * Options to ease the camera back to its original position and
     * rotation.
     * @throws This function can throw errors.
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
}
