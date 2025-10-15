/* IMPORT */ import { BasicTooltipContent, IListPaneEntry } from '..';

/**
 * List Pane button entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneButtonEntry extends IListPaneEntry {
    /**
     * @remarks
     * Enabled state of the entry.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * Updates enabled state of the entry.
     *
     * @param enabled
     * New enabled state.
     */
    setEnabled(enabled: true): void;
    /**
     * @remarks
     * Updates icon of the entry.
     *
     * @param icon
     * New icon.
     */
    setIcon(icon: string): void;
    /**
     * @remarks
     * Updates title of the entry.
     *
     * @param title
     * New title.
     */
    setTitle(title: string): void;
    /**
     * @remarks
     * Updates tooltip of the entry.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent): void;
}
