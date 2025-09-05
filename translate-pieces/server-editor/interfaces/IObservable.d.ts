/* IMPORT */ import { ObservableValidator } from '..';

/**
 * Represents a stateful value that can be observed by
 * different objects.
 */
export interface IObservable<T> {
    /**
     * @remarks
     * Optional validator that will pre-process the new value.
     *
     */
    readonly validator?: ObservableValidator<T>;
    /**
     * @remarks
     * Current value of the observable.
     *
     */
    readonly value: Readonly<T>;
    /**
     * @remarks
     * Updates the value and notifies dependent objects.
     *
     * @param newValue
     * New value to be set (will be processed by the validator if
     * it exists).
     */
    set(newValue: T): boolean;
}
