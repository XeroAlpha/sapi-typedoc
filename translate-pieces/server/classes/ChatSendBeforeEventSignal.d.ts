/* IMPORT */ import { ChatSendBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
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
     */
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
}