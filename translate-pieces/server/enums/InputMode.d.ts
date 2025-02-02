/**
 * @rc
 * Describes the type of input of a device.
 *
 * 表示设备的输入类型。
 */
export enum InputMode {
	/**
	 * @remarks
	 * Gamepad input.
	 *
	 * 游戏手柄输入。
	 */
	Gamepad = "Gamepad",
	/**
	 * @remarks
	 * Keyboard and mouse input.
	 *
	 * 键盘和鼠标输入。
	 */
	KeyboardAndMouse = "KeyboardAndMouse",
	/**
	 * @remarks
	 * Motion controller input.
	 *
	 * 运动控制器输入。
	 */
	MotionController = "MotionController",
	/**
	 * @remarks
	 * Touch input.
	 *
	 * 触摸输入。
	 */
	Touch = "Touch",
}
