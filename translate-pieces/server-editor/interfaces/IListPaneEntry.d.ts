/* IMPORT */ import { IListPaneSlot, ListPaneEntryType } from '..';

/**
 * List Pane entry
 */
export interface IListPaneEntry {
    /**
     * @remarks
     * Sequence index of the entry.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Slot that owns the entry.
     *
     */
    readonly slot: IListPaneSlot;
    /**
     * @remarks
     * Type of the entry.
     *
     */
    readonly type: ListPaneEntryType;
    /**
     * @remarks
     * Visibility state of the entry.
     *
     */
    readonly visible: boolean;
    /**
     * @remarks
     * Updates visibility of the entry.
     *
     * @param visible
     * New value.
     */
    setVisible(visible: boolean): void;
}
