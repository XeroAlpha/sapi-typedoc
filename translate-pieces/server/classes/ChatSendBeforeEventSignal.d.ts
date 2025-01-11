/* IMPORT */ import { ChatSendBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}