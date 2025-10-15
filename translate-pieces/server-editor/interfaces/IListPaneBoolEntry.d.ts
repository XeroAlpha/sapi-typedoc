/* IMPORT */ import { BasicTooltipContent, IListPaneEntry } from '..';

/**
 * List Pane button entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneBoolEntry extends IListPaneEntry {
    /**
     * @remarks
     * Enabled state of the entry.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: boolean;
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
     * Updates tooltip of the entry.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent): void;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: boolean): void;
}
