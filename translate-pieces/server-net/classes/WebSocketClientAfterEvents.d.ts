/* IMPORT */ import { CloseAfterEventSignal, MessageAfterEventSignal } from '..';

export class WebSocketClientAfterEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly close: CloseAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly message: MessageAfterEventSignal;
}
