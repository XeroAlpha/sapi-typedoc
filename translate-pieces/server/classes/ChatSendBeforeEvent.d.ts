/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Message that is being broadcast.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * Player that sent the chat message.
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    readonly targets?: Player[];
}