/* IMPORT */ import { IPropertyItem, IPropertyTableCellItem, PropertyBag } from '../index';

/**
 * A property item which supports Table properties
 */
export type ITablePropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateCell(dataCell: IPropertyTableCellItem, row: number, column: number): void;
    updateRow(dataRow: IPropertyTableCellItem[], row: number): void;
    updateTable(newData: IPropertyTableCellItem[][]): void;
};