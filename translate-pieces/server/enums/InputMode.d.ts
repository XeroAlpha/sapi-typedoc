/**
 * Describes the type of input of a device.
 */
export enum InputMode {
    /**
     * @remarks
     * Gamepad input.
     *
     */
    Gamepad = 'Gamepad',
    /**
     * @remarks
     * Gamepad and mouse input.
     *
     */
    GamepadAndMouse = 'GamepadAndMouse',
    /**
     * @remarks
     * Keyboard and mouse input.
     *
     */
    KeyboardAndMouse = 'KeyboardAndMouse',
    /**
     * @remarks
     * Motion controller input.
     *
     */
    MotionController = 'MotionController',
    /**
     * @remarks
     * Touch input.
     *
     */
    Touch = 'Touch',
}
