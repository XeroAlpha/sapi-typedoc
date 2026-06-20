/* IMPORT */ import { ObservableOptions, UIRawMessage } from '..';

/**
 * An observable that holds a UIRawMessage value. Listeners are
 * notified whenever the value changes.
 */
export class ObservableUIRawMessage {
    /**
     * @remarks
     * Creates a new ObservableUIRawMessage with the provided
     * initial UIRawMessage value.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial UIRawMessage value for this observable.
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     */
    constructor(data: UIRawMessage, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current UIRawMessage value held by this
     * observable.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): UIRawMessage;
    /**
     * @remarks
     * Updates the UIRawMessage value held by this observable. If
     * the new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new UIRawMessage value to set.
     */
    setData(data: UIRawMessage): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * A function that receives the new UIRawMessage value each
     * time the observable changes.
     */
    subscribe(callback: (arg0: UIRawMessage) => void): (arg0: UIRawMessage) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     */
    unsubscribe(callback: (arg0: UIRawMessage) => void): boolean;
}
