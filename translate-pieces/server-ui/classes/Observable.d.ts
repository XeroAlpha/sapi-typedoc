/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { ObservableOptions, TextFilteringError, UIRawMessage } from '..';

/**
 * @beta
 * A class that represents data that can be Observed.
 * Extensively used for UI.
 */
export declare class Observable<T extends string | number | boolean | UIRawMessage> {
    /**
     * @remarks
     * Gets the data from the Observable.
     *
     */
    getData(): T;
    /**
     * @remarks
     * Gets filtered data from the Observable (only available for
     * strings). In case of failure, it will return an array of
     * TextFilteringError that can provide more context about the
     * filtering process. For testing purposes, the options are
     * available under "Creator -> Text Filtering" settings menu.
     * This delay is only applied to the getFilteredText function
     * and can be used to simulate network latency when testing.
     *
     */
    getFilteredText(
        this: Observable<T & string>,
        player: Player,
    ): Promise<string | TextFilteringError[]>;
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
    toJSON(): unknown;
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
    static create<T extends string | number | boolean | UIRawMessage>(
        data: T,
        options?: ObservableOptions,
    ): Observable<T>;
}
