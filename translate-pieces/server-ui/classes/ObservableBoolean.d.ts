/* IMPORT */ import { ObservableOptions } from '..';

/**
 * @rc
 * An observable that holds a boolean value. Listeners are
 * notified whenever the value changes.
 */
export class ObservableBoolean {
    /**
     * @remarks
     * Creates a new ObservableBoolean with the provided initial
     * boolean value.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The initial boolean value for this observable.
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     */
    constructor(data: boolean, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current boolean value held by this observable.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    getData(): boolean;
    /**
     * @remarks
     * Updates the boolean value held by this observable. If the
     * new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param data
     * The new boolean value to set.
     */
    setData(data: boolean): void;
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
     * A function that receives the new boolean value each time the
     * observable changes.
     */
    subscribe(callback: (arg0: boolean) => void): (arg0: boolean) => void;
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
    unsubscribe(callback: (arg0: boolean) => void): boolean;
}
