/* IMPORT */ import { IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports Vector3 properties
 */
export type IVector3PropertyItem_deprecated<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<
    T,
    Prop
> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
};