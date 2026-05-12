/* IMPORT */ import { ObservableOptions, UIRawMessage } from '..';

/**
 * @beta
 */
export class ObservableUIRawMessage {
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    constructor(data: UIRawMessage, options?: ObservableOptions);
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): UIRawMessage;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    setData(data: UIRawMessage): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: UIRawMessage) => void): (arg0: UIRawMessage) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: UIRawMessage) => void): boolean;
}
