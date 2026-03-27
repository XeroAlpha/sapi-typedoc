/* IMPORT */ import { WebSocketClientReceiveAfterEvent } from '..';

export class MessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WebSocketClientReceiveAfterEvent) => void,
    ): (arg0: WebSocketClientReceiveAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientReceiveAfterEvent) => void): void;
}
