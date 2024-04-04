/* IMPORT */ import { MessageReceiveAfterEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}