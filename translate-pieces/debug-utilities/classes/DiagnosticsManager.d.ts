/* IMPORT */ import { DiagnosticsChartViewOptions, DiagnosticsError, DiagnosticsTab, DiagnosticsTableViewOptions, DiagnosticsView } from '..';

/**
 * Manages data, display tabs and views used by the Minecraft
 * Bedrock Debugger VS Code extension for live diagnostics.
 */
export class DiagnosticsManager {
    private constructor();
    /**
     * @remarks
     * The list of currently registered diagnostic tabs
     * (constrained to this pack).
     *
     */
    readonly tabs: DiagnosticsTab[];
    /**
     * @remarks
     * Adds an existing DiagnosticsTab instance to the live
     * diagnostics display in the debugger
     *
     * @param tab
     * The DiagnosticsTab instance to add to the display.
     */
    addTab(tab: DiagnosticsTab): void;
    /**
     * @remarks
     * Returns whether the given tab is currently registered and
     * used in the live diagnostics display.
     *
     */
    containsTab(tab: DiagnosticsTab): boolean;
    /**
     * @remarks
     * Returns whether the given view is currently registered and
     * used by any tab in the live diagnostics display.
     *
     */
    containsView(view: DiagnosticsView): boolean;
    /**
     * @remarks
     * Creates a new DiagnosticsTab and adds it to the live
     * diagnostics display in the debugger
     *
     * @param tabName
     * The name of the tab for creation and display.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createTab(tabName: string): DiagnosticsTab;
    /**
     * @remarks
     * Creates a new DiagnosticsView. This view will not be added
     * to the live diagnostics display automatically, please use
     * DiagnosticsTab.addView to do so.
     *
     * @param statName
     * The name of the stats data for creation and display.
     * @param options
     * An optional set of either chart or table options to be used
     * for modifying the display.
     * @returns
     * The newly created DiagnosticsView instance.
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createView(statName: string, options?: DiagnosticsChartViewOptions | DiagnosticsTableViewOptions): DiagnosticsView;
    /**
     * @remarks
     * Removes a previously registered tab from the live
     * diagnostics display in the debugger
     *
     */
    removeTab(tab: DiagnosticsTab): void;
}
