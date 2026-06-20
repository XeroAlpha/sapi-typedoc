/**
 * Configuration options for creating an Observable. Controls
 * how the observable value can be accessed and modified.
 */
export interface ObservableOptions {
    /**
     * @remarks
     * When true, allows the client to write to this observable's
     * value directly, enabling two-way data binding between the UI
     * and the observable.
     *
     */
    clientWritable: boolean;
}
