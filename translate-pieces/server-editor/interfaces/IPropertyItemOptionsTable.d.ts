/* IMPORT */ import { IPropertyItemOptions, IPropertyTableCellItem } from '../index';

export interface IPropertyItemOptionsTable extends IPropertyItemOptions {
    defaultData: IPropertyTableCellItem[][];
    titleId?: string;
}