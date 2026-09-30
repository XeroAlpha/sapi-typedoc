/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { ButtonState, InputButton, InputMode, InvalidEntityError, PlayerButtonInputAfterEvent, Vector2, WorldAfterEvents } from '..';

/**
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * The last input mode used by the player.
     *
     * @throws {EngineError}
     *
     * @throws {InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws {InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @remarks
     * Retrieves the current state of a button. If a player presses
     * and releases a button really fast this may not ever be set
     * to true. To capture all button state changes, use
     * {@link PlayerButtonInputAfterEvent} via
     * {@link WorldAfterEvents.playerButtonInput}
     *
     * @throws {EngineError}
     *
     * @throws {InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @throws {InvalidEntityError}
     */
    getMovementVector(): Vector2;
}
