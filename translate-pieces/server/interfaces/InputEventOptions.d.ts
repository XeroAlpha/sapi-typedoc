/* IMPORT */ import { ButtonState, InputButton } from '../index';

/**
 * @rc
 * An interface that is passed into {@link
 * @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface InputEventOptions {
    /**
     * @remarks
     * The buttons the callback should be called for. If undefined,
     * the callback will be called for all buttons.
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * The state the callback should be called for. If undefined,
     * the callback will be called for all button states.
     *
     */
    state?: ButtonState;
}