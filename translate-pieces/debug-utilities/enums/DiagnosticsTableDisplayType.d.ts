/**
 * The display type for the table (e.g. single table or
 * multi-column table).
 */
export enum DiagnosticsTableDisplayType {
    /**
     * @remarks
     * A simple table of keys to values (2 columns). Does not track
     * history or value changes.
     *
     */
    Table = 0,
    /**
     * @remarks
     * A table of keys to multiple values. The amount of value
     * columns is driven by the data. Does not track history or
     * value changes.
     *
     */
    MultiColumnTable = 1,
}
