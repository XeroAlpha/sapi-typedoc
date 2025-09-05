/**
 * Used for validating an observable value before it gets set
 */
export declare abstract class ObservableValidator<T> {
    abstract validate(newValue: T): T | undefined;
}
