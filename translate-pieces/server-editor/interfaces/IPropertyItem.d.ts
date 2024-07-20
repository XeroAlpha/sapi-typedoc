/* IMPORT */ import { IPropertyItemBase, PropertyBag } from '../index';

export interface IPropertyItem<T extends PropertyBag, Prop extends keyof T & string> extends IPropertyItemBase {
    /**
     * @remarks
     * The object associated.
     *
     */
    readonly obj: T;
    /**
     * @remarks
     * The target property of the object associated.
     *
     */
    readonly property: Prop;
    /**
     * @remarks
     * The value of the property.
     *
     */
    readonly value: T[Prop];
    dispose(): void;
}