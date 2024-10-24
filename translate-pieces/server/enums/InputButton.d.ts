/**
 * @beta
 * All the different input buttons that are supported. Use with
 * {@link @minecraft/server.PlayerInput.getButtonState} via
 * {@link @minecraft/server.Player.input} or {@link
 * PlayerButtonInputAfterEvent} via {@link
 * WorldAfterEvents.playerButtonInput}
 */
export enum InputButton {
    /**
     * @remarks
     * This is mapped to the 'Jump' button on controllers,
     * keyboards, and touch interfaces.
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * This is mapped to the 'Sneak' button on controllers,
     * keyboards, and touch interfaces. By default, this is shift
     * on a keyboard or B on an Xbox controller. On touch
     * interfaces this will only be pressed for 1 tick or less and
     * then it will be released immediately even if the player
     * holds their finger down. Dismounting a horse or exiting a
     * boat will not send a Sneak button change event.
     *
     */
    Sneak = 'Sneak',
}