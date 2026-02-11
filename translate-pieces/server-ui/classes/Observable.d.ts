/* IMPORT */ import { ObservableOptions } from '..';

/**
 * @beta
 * A class that represents data that can be Observed.
 * Extensively used for UI.
 */
export declare class Observable<T extends string | number | boolean> {
    /**
     * @remarks
     * Gets the data from the Observable.
     *
     */
    getData(): T;
    /**
     * @remarks
     * Sets the data on this Observable and notifies the
     * subscribers.
     *
     */
    setData(data: T): void;
    /**
     * @remarks
     * Subscribes a callback to any changes that occur to the
     * Observable. The return value can be passed into the
     * `unsubscribe` function to stop listening to changes.
     *
     */
    subscribe(listener: (newValue: T) => void): (newValue: T) => void;
    /**
     * @remarks
     * Unsubscribe a callback from any changes that occur to the
     * Observable. This takes the return value from the `subscribe`
     * function.
     *
     */
    unsubscribe(listener: (newValue: T) => void): void;
    /**
     * @remarks
     * Creates an Observable, use this instead of a constructor.
     *
     */
    static create<T extends string | number | boolean>(data: T, options?: ObservableOptions): Observable<T>;
}
