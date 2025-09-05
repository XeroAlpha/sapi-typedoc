/* IMPORT */ import { ChatSendAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}
