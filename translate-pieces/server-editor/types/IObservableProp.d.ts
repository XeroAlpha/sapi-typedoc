/* IMPORT */ import { IObservable } from '../index';

/**
 * Type that can be an observable or a value.
 */
export type IObservableProp<T> = IObservable<T> | T;