/* IMPORT */ import { DiagnosticsError, DiagnosticsStat } from '..';

/**
 * Represents a registered diagnostics view that can receive
 * stat data to display in the live diagnostics panel in the
 * debugger.
 */
export class DiagnosticsView {
    private constructor();
    /**
     * @remarks
     * Pushes a new set of stats to this diagnostics view to be
     * displayed.
     *
     * @param stats
     * An array of DiagnosticsStat objects containing the stat
     * names and values to display.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    pushStats(stats: DiagnosticsStat[]): void;
}
