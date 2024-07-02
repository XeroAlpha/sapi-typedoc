/* IMPORT */ import { IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports BlockList properties
 */
export type IBlockListPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateBlockList(newBlockList: string[]): void;
};