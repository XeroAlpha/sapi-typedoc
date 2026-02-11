/**
 * @beta
 * An interface passed into `Observable.create`.
 */
export interface ObservableOptions {
    /**
     * @remarks
     * If set to true, the client can update this value. This
     * should be used for things like dropdown values, toggles,
     * textfields, etc. If unset or false, the client cannot write
     * to this observable.
     *
     */
    clientWritable?: boolean;
}
