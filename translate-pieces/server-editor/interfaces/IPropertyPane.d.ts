/* IMPORT */ import { EventSink, IActionPropertyItem, IDropdownPropertyItem, IPropertyItem, IPropertyItemOptions, IPropertyItemOptionsButton, IPropertyItemOptionsDataPicker, IPropertyItemOptionsDropdown, IPropertyItemOptionsNumber, IPropertyItemOptionsText, IPropertyItemOptionsVector3, IPropertyPaneOptions, IVector3PropertyItem, NoArgsAction, PropertyBag, PropertyPaneVisibilityUpdate, RegisteredAction } from '../index';

/**
 * Property pane present dynamic content. It can be associated
 * with an object and presented with different kind of
 * controls.
 */
export interface IPropertyPane {
    /**
     * @remarks
     * Pane state for being expanded or collapsed.
     *
     */
    collapsed: boolean;
    /**
     * @remarks
     * Unique ID for the property pane.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides visibility change events
     *
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    /**
     * @remarks
     * In case of sub pane this is the id of the parent pane.
     *
     */
    readonly parentPaneId?: string;
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId: string;
    /**
     * @remarks
     * Width of the panel in rem.
     *
     */
    width?: number;
    /**
     * @remarks
     * Adds a BlockPicker item to the pane.
     *
     */
    addBlockPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a boolean item to the pane.
     *
     */
    addBool<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptions,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button activate.
     *
     */
    addButton(
        action: RegisteredAction<NoArgsAction>,
        options?: IPropertyItemOptionsButton,
    ): IActionPropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItem<PropertyBag, string>;
    /**
     * @remarks
     * Adds an DropDown item to the pane.
     *
     */
    addDropdown<
        T extends Omit<PropertyBag, Prop> & {
            [key in Prop]: number;
        },
        Prop extends keyof T & string,
    >(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDropdown,
    ): IDropdownPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds an EntityPicker item to the pane.
     *
     */
    addEntityPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsNumber,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a string item to the pane
     *
     */
    addString<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptions,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a multiline Text item to the pane.
     *
     */
    addText<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsText,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsVector3,
    ): IVector3PropertyItem<T, Prop>;
    /**
     * @remarks
     * Collapse the pane.
     *
     */
    collapse(): void;
    /**
     * @remarks
     * Creates an internal sub panel that is presented inside a
     * extender control.
     *
     */
    createPropertyPane(options: IPropertyPaneOptions): IPropertyPane;
    /**
     * @remarks
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Removes a child property pane from the parent pane.
     *
     */
    removePropertyPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Show the pane and all of its property items.
     *
     */
    show(): void;
}