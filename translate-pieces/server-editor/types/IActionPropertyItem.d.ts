/**
 * A property item which supports bound actions and replacing
 * the bound action
 */
export type IActionPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    replaceBoundAction(action: RegisteredAction<NoArgsAction> | undefined): void;
};