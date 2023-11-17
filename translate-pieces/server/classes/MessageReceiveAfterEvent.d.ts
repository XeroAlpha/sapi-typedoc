/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * The message identifier.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The message.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * The player who sent the message.
     *
     */
    readonly player: Player;
}