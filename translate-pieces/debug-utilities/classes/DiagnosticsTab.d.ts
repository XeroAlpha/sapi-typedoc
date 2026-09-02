/* IMPORT */ import { DiagnosticsView } from '..';

/**
 * Represents a tab that is displayed in the live diagnostics
 * panel of the debugger. It can contain various data including
 * 'DiagnosticsViews' which are used to display live stats data
 * in the form of graphs or tables.
 */
export class DiagnosticsTab {
    private constructor();
    /**
     * @remarks
     * The name of the tab. This determines the name shown in the
     * live diagnostics section of the Minecraft VS Code debugger
     * extension list.
     *
     */
    readonly tabName: string;
    /**
     * @remarks
     * The list of views currently associated and displayed in this
     * tab.
     *
     */
    readonly views: DiagnosticsView[];
    /**
     * @remarks
     * Registers an existing diagnostics view under the given tab
     * for display in the live diagnostics.
     *
     * @param view
     * The existing view to add to this tab.
     */
    addView(view: DiagnosticsView): void;
    /**
     * @remarks
     * Returns whether the given view is currently registered and
     * used by this tab.
     *
     */
    containsView(view: DiagnosticsView): boolean;
    /**
     * @remarks
     * Removes a diagnostics view from this tab. It will no longer
     * be rendered.
     *
     * @param view
     * The DiagnosticsView instance to remove.
     */
    removeView(view: DiagnosticsView): void;
}
