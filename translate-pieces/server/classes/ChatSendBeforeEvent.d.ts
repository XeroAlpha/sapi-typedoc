/* IMPORT */ import { ChatSendAfterEvent, Player } from '../index';

/**
 * @beta
 * An event that fires as players enter chat messages.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ChatSendBeforeEvent extends ChatSendAfterEvent {
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
     * Sets an updated list of players that will receive this
     * message.
     *
     * @param players
     * Updated array of players that should receive this message.
     */
    setTargets(players: Player[]): void;
}