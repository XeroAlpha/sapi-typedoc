/**
 * Callback to execute when a value of a property item is
 * updated.
 */
export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (
    obj: T,
    property: Prop,
    oldValue: object,
    newValue: object,
) => void;