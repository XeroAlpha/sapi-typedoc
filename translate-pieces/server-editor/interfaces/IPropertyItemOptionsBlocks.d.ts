/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsBlocks extends IPropertyItemOptions {
    /**
     * @remarks
     * The allowed blocks for the Block Picker.
     *
     */
    allowedBlocks?: string[];
}