/* IMPORT */ import { DiagnosticsTableDisplayType } from '..';

/**
 * Configuration options for registering a table-based
 * diagnostics view.
 */
export interface DiagnosticsTableViewOptions {
    /**
     * @remarks
     * Optional label for the key column of the table.
     *
     */
    keyLabel?: string;
    /**
     * @remarks
     * The display type for the table (e.g. single table or
     * multi-column table).
     *
     */
    tableType: DiagnosticsTableDisplayType;
    /**
     * @remarks
     * Optional array of labels for the value columns of the table.
     *
     */
    valueLabels?: string[];
}
