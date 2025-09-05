/* IMPORT */ import { IDataTablePropertyItemEntry, IPropertyItemBase } from '..';

/**
 * A property item which supports data entries displayed in a
 * table
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDataTablePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update table entries
     *
     * @param data
     * New data entries.
     */
    updateEntries(data: IDataTablePropertyItemEntry[][]): void;
    /**
     * @remarks
     * Update table cell entry
     *
     * @param data
     * New data entry.
     * @param row
     * Cell row index.
     * @param column
     * Cell column index.
     */
    updateEntry(data: IDataTablePropertyItemEntry, row: number, column: number): void;
    /**
     * @remarks
     * Update table row entries
     *
     * @param data
     * New data entries.
     * @param row
     * Cell row index.
     */
    updateRow(data: IDataTablePropertyItemEntry[], row: number): void;
}
