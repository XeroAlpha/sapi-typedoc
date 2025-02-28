/* IMPORT */ import { IPropertyItemBase } from '../index';

/**
 * A property item which supports block list properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockListPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: ReadonlyArray<string>;
}