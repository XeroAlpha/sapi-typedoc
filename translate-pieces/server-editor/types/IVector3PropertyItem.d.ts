/**
 * A property item which supports Vector3 properties
 */
export type IVector3PropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
};