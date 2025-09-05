/* IMPORT */ import { ChatSendBeforeEvent } from '..';

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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}
