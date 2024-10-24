/* IMPORT */ import { ButtonState, InputButton, Player } from '../index';

/**
 * @beta
 * Event data for when a player presses a button.
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * @remarks
     * The button this event is about.
     *
     */
    readonly button: InputButton;
    /**
     * @remarks
     * The state that this button transferred to.
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * @remarks
     * The player that performed the input event.
     *
     */
    readonly player: Player;
}