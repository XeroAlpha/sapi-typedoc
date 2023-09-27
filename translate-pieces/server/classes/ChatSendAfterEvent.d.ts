/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     *
     */
    message: string;
    /**
     * @remarks
     * Player that sent the chat message.
     *
     */
    sender: Player;
    /**
     * @remarks
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    sendToTargets: boolean;
    /**
     * @remarks
     * List of players that will receive this message.
     *
     * @returns
     * List of player objects.
     */
    getTargets(): Player[];
}