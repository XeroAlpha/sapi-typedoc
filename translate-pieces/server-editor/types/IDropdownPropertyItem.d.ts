/* IMPORT */ import { IDropdownPropertyItemMixIn, IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports Dropdown properties
 */
export type IDropdownPropertyItem<
    T extends Omit<PropertyBag, Prop> & {
        [key in Prop]: number;
    },
    Prop extends keyof T & string,
> = IPropertyItem<T, Prop> & IDropdownPropertyItemMixIn;