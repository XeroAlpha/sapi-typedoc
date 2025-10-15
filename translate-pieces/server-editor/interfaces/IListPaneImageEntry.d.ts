/* IMPORT */ import { IListPaneEntry, ImageResourceData } from '..';

/**
 * List Pane image entry
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPaneImageEntry extends IListPaneEntry {
    /**
     * @remarks
     * Value of the entry.
     *
     */
    readonly value: Readonly<ImageResourceData>;
    /**
     * @remarks
     * Updates value of the entry.
     *
     * @param value
     * New value.
     */
    setValue(value: ImageResourceData): void;
}
