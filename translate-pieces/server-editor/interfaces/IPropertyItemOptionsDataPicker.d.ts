/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsDataPicker extends IPropertyItemOptions {
    /**
     * @remarks
     * Used to hold the entries allowed in the block/entity picker
     *
     */
    allowedEntries?: string[];
}