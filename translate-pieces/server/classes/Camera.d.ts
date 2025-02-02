/* IMPORT */ import { CameraDefaultOptions, CameraFadeOptions, CameraFixedBoomOptions, CameraSetFacingOptions, CameraSetLocationOptions, CameraSetPosOptions, CameraSetRotOptions, CameraTargetOptions } from '../index';

/**
 * 包含与指定玩家的活动摄像机相关的方法。
 * 
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 清除指定玩家的活动摄像机。会使指定玩家结束所有正在进行的摄像机视角，包括任何平滑的摄像机移动，并恢复到正常视角。
     * 
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
     * 开始一个摄像机的淡入淡出过渡效果。淡入淡出过渡效果是一种全屏颜色的渐入、保持、然后渐出的效果。
     * 
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * This function can't be called in read-only mode.
     *
     * @param fadeCameraOptions
     * 有关摄像机淡入淡出操作的附加选项。
     * 
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动摄像机。
     * 
     * Sets the current active camera for the specified player.
     *
     * This function can't be called in read-only mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的摄像机预设文件的标识符。
     * 
     * Identifier of a camera preset file defined within JSON.
     * @param setOptions
     * 摄像机的附加选项。
     * 
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