/* IMPORT */ import { ButtonState, InputButton, InputMode, InvalidEntityError, Vector2, minecraftcommon } from '../index';

/**
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * The last input mode used by the player.
     *
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @rc
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @rc
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}