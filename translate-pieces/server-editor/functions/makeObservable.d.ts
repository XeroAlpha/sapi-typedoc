/* IMPORT */ import { IObservable, ObservableValidator } from '..';

/**
 * @remarks
 * Creates an observable object that stores a value state.
 *
 * @param initialValue
 * Initial value of the observable.
 * @param validator
 * Optional validator to use for the setter.
 */
export declare function makeObservable<T>(initialValue: T, validator?: ObservableValidator<T>): IObservable<T>;
