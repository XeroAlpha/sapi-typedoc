export interface IPropertyItem<T extends PropertyBag, Prop extends keyof T & string> {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable: boolean;
    /**
     * @remarks
     * Unique ID for the property item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The object associated.
     *
     */
    readonly obj: T;
    /**
     * @remarks
     * The parent pane id.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * The target property of the object associated.
     *
     */
    readonly property: Prop;
    /**
     * @remarks
     * The type name of the target property.
     *
     */
    readonly typeName: EDITOR_PANE_PROPERTY_ITEM_TYPE;
    /**
     * @remarks
     * The value of the property.
     *
     */
    readonly value: T[Prop];
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible: boolean;
    dispose(): void;
}