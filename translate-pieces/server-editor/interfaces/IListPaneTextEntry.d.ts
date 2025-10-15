/* IMPORT */ import { IListPaneEntry, LocalizedString } from '..';

/**
 * List Pane text entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneTextEntry extends IListPaneEntry {
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: Readonly<LocalizedString>;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: LocalizedString): void;
}
