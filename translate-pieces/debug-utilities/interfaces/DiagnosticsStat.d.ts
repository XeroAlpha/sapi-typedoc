/**
 * Represents a single stat entry with a name and optional
 * values to be pushed to a DiagnosticsView.
 */
export interface DiagnosticsStat {
    /**
     * @remarks
     * The name identifier for this stat entry.
     *
     */
    name: string;
    /**
     * @remarks
     * Optional array of numeric or string values associated with
     * this stat entry.
     *
     */
    values?: (number | string)[];
}
