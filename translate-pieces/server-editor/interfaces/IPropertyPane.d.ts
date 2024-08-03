/* IMPORT */ import { EventSink, IBlockListPropertyItem, IBoolPropertyItem, IBoolPropertyItemOptions, IButtonPropertyItem, IButtonPropertyItemOptions, IColorPickerPropertyItem, IColorPickerPropertyItemOptions, IComboBoxPropertyItem, IComboBoxPropertyItemOptions, IDropdownPropertyItem, IDropdownPropertyItemOptions, IDropdownPropertyItem_deprecated, IImagePropertyItem, IImagePropertyItemOptions, INumberPropertyItem, INumberPropertyItemOptions, IObservableProp, IPropertyItem, IPropertyItemBase, IPropertyItemOptions, IPropertyItemOptionsBlockList, IPropertyItemOptionsBool, IPropertyItemOptionsColorPicker_deprecated, IPropertyItemOptionsDropdown, IPropertyItemOptionsNumber, IPropertyItemOptionsTable, IPropertyItemOptionsVector3, IPropertyPaneOptions, IStringPropertyItem, IStringPropertyItemOptions, ITablePropertyItem, ITextPropertyItem, ITextPropertyItemOptions, IVector3PropertyItem, IVector3PropertyItemOptions, IVector3PropertyItem_deprecated, ImageResourceData, LocalizedString, NoArgsAction, PropertyBag, PropertyPaneVisibilityUpdate, RegisteredAction, minecraftserver } from '../index';

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
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a boolean item to the pane.
     *
     */
    addBool_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
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
        action: (() => void) | RegisteredAction<NoArgsAction>,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker(
        value: IObservableProp<minecraftserver.RGBA>,
        options?: IColorPickerPropertyItemOptions,
    ): IColorPickerPropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsColorPicker_deprecated,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     * Adds a combo box item to the pane.
     *
     */
    addComboBox(value: IObservableProp<string>, options?: IComboBoxPropertyItemOptions): IComboBoxPropertyItem;
    /**
     * @remarks
     * Adds an divider item to the pane.
     *
     */
    addDivider(): IPropertyItemBase;
    /**
     * @remarks
     * Adds an Dropdown item to the pane.
     *
     */
    addDropdown(value: IObservableProp<number>, options?: IDropdownPropertyItemOptions): IDropdownPropertyItem;
    /**
     * @remarks
     * Adds an DropDown item to the pane.
     *
     */
    addDropdown_deprecated<
        T extends Omit<PropertyBag, Prop> & {
            [key in Prop]: number;
        },
        Prop extends keyof T & string,
    >(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDropdown,
    ): IDropdownPropertyItem_deprecated<T, Prop>;
    /**
     * @remarks
     * Adds an image item to the pane.
     *
     */
    addImage(
        value: IObservableProp<string | ImageResourceData>,
        options?: IImagePropertyItemOptions,
    ): IImagePropertyItem;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber(value: IObservableProp<number>, options?: INumberPropertyItemOptions): INumberPropertyItem;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsNumber,
    ): IPropertyItem<T, Prop>;
    /**
     * @remarks
     */
    addString(value: IObservableProp<string>, options?: IStringPropertyItemOptions): IStringPropertyItem;
    /**
     * @remarks
     * Adds a string item to the pane
     *
     */
    addString_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
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
    addText(value: IObservableProp<LocalizedString>, options?: ITextPropertyItemOptions): ITextPropertyItem;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3(
        value: IObservableProp<minecraftserver.Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;
    /**
     * @remarks
     * Adds a Vec3 item to the pane.
     *
     */
    addVector3_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsVector3,
    ): IVector3PropertyItem_deprecated<T, Prop>;
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