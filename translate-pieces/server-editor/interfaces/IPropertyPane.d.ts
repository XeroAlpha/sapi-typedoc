/* IMPORT */ import { EventSink, IActionPropertyItem, IBlockListPropertyItem, IDropdownPropertyItem, IPropertyItem, IPropertyItemOptions, IPropertyItemOptionsBlockList, IPropertyItemOptionsBool, IPropertyItemOptionsButton, IPropertyItemOptionsColorPicker, IPropertyItemOptionsDataPicker, IPropertyItemOptionsDropdown, IPropertyItemOptionsImage, IPropertyItemOptionsNumber, IPropertyItemOptionsTable, IPropertyItemOptionsText, IPropertyItemOptionsVector3, IPropertyPaneOptions, ITablePropertyItem, IVector3PropertyItem, NoArgsAction, PropertyBag, PropertyPaneVisibilityUpdate, RegisteredAction } from '../index';

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
     * Localized title of the property pane
     *
     */
    title: string;
    /**
     * @remarks
     * Check visibility of the pane
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Width of the panel in rem.
     *
     */
    width?: number;
    /**
     * @remarks
     * Adds a block list to the pane.
     *
     */
    addBlockList(options?: IPropertyItemOptionsBlockList): IBlockListPropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
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
        options?: IPropertyItemOptionsBool,
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
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsColorPicker,
    ): IPropertyItem<T, Prop>;
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
     * Adds an image item to the pane.
     *
     */
    addImage<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsImage,
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
     * Adds a table to the pane.
     *
     */
    addTable(options?: IPropertyItemOptionsTable): ITablePropertyItem<
        {
            EMPTY: undefined;
        },
        'EMPTY'
    >;
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