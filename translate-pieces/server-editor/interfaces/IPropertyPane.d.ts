/* IMPORT */ import { EventSink, IBlockListPropertyItem, IBlockTablePropertyItem, IBlockTablePropertyItemOptions, IBoolPropertyItem, IBoolPropertyItemOptions, IButtonPropertyItem, IButtonPropertyItemOptions, IColorPickerPropertyItem, IColorPickerPropertyItemOptions, IComboBoxPropertyItem, IComboBoxPropertyItemOptions, IDropdownPropertyItem, IDropdownPropertyItemOptions, IDropdownPropertyItem_deprecated, IImagePropertyItem, IImagePropertyItemOptions, ILinkPropertyItem, ILinkPropertyItemOptions, INumberPropertyItem, INumberPropertyItemOptions, IObservableProp, IProgressIndicatorPropertyItem, IProgressIndicatorPropertyItemOptions, IPropertyItem, IPropertyItemBase, IPropertyItemOptions, IPropertyItemOptionsBlockList, IPropertyItemOptionsBool, IPropertyItemOptionsColorPicker_deprecated, IPropertyItemOptionsDropdown, IPropertyItemOptionsNumber, IPropertyItemOptionsTable, IPropertyItemOptionsVector3, IStringPropertyItem, IStringPropertyItemOptions, ISubPanePropertyItem, ISubPanePropertyItemOptions, ITablePropertyItem, ITextPropertyItem, ITextPropertyItemOptions, IToggleGroupPropertyItem, IToggleGroupPropertyItemOptions, IVector3PropertyItem, IVector3PropertyItemOptions, IVector3PropertyItem_deprecated, ImageResourceData, LocalizedString, NoArgsAction, PropertyBag, PropertyPaneVisibilityUpdate, RegisteredAction, minecraftserver } from '../index';

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
     * Check visibility of the pane
     *
     */
    visible: boolean;
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
     * Adds a block table to the pane.
     *
     */
    addBlockTable(options?: IBlockTablePropertyItemOptions): IBlockTablePropertyItem;
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
     * Adds a multiline Text item to the pane.
     *
     */
    addLink(value: IObservableProp<string>, options?: ILinkPropertyItemOptions): ILinkPropertyItem;
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
     * Adds a Progress Indicator item to the pane.
     *
     */
    addProgressIndicator(options?: IProgressIndicatorPropertyItemOptions): IProgressIndicatorPropertyItem;
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
     * Adds a toggle button group to the pane.
     *
     */
    addToggleGroup(value: IObservableProp<number>, options?: IToggleGroupPropertyItemOptions): IToggleGroupPropertyItem;
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
     * Creates an sub pane that can store property items.
     *
     */
    createSubPane(options: ISubPanePropertyItemOptions): ISubPanePropertyItem;
    /**
     * @remarks
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Returns property pane title.
     *
     */
    getTitle(): LocalizedString | undefined;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Removes an existing sub pane.
     *
     */
    removeSubPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Updates title of property pane.
     *
     * @param newTitle
     * New title
     */
    setTitle(newTitle: LocalizedString | undefined): void;
    /**
     * @remarks
     * Show the pane and all of its property items.
     *
     */
    show(): void;
}