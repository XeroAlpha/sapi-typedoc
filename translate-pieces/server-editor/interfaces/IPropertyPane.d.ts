/* IMPORT */ import { RGBA, Vector2, Vector3 } from '../../server';
/* IMPORT */ import { ButtonPropertyItemSupportedActionTypes, EventSink, IBlockListPropertyItem, IBlockListPropertyItemOptions, IBlockTablePropertyItem, IBlockTablePropertyItemOptions, IBoolPropertyItem, IBoolPropertyItemOptions, IButtonPanePropertyItem, IButtonPanePropertyItemOptions, IButtonPropertyItem, IButtonPropertyItemOptions, ICollectionTreePropertyItem, ICollectionTreePropertyItemOptions, IColorPickerPropertyItem, IColorPickerPropertyItemOptions, IColorTimelinePropertyItem, IColorTimelinePropertyItemOptions, IComboBoxPropertyItem, IComboBoxPropertyItemOptions, IDataTablePropertyItem, IDataTablePropertyItemOptions, IDropdownPropertyItem, IDropdownPropertyItemOptions, IImagePropertyItem, IImagePropertyItemOptions, ILinkPropertyItem, ILinkPropertyItemOptions, IListPanePropertyItem, IListPanePropertyItemOptions, IMenuCreationParams, IMenuPropertyItem, IMenuPropertyItemOptions, IMinimapPropertyItem, IMinimapPropertyItemOptions, INumberPropertyItem, INumberPropertyItemOptions, INumberTimelinePropertyItem, INumberTimelinePropertyItemOptions, IObservableProp, IPane, IProgressIndicatorPropertyItem, IProgressIndicatorPropertyItemOptions, IPropertyItemBase, IStringPropertyItem, IStringPropertyItemOptions, ISubPanePropertyItem, ISubPanePropertyItemOptions, ITagContainerPropertyItem, ITagContainerPropertyItemOptions, ITextPropertyItem, ITextPropertyItemOptions, IToggleGroupPropertyItem, IToggleGroupPropertyItemOptions, IVector2PropertyItem, IVector2PropertyItemOptions, IVector3PropertyItem, IVector3PropertyItemOptions, IVector3TimelinePropertyItem, IVector3TimelinePropertyItemOptions, ImageResourceData, LocalizedString, NoArgsAction, PropertyPaneVisibilityUpdate, RegisteredAction } from '..';

/**
 * Property pane present dynamic content. It can be associated
 * with an object and presented with different kind of
 * controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IPropertyPane extends IPane {
    /**
     * @remarks
     * Pane state for being expanded or collapsed.
     *
     */
    readonly collapsed: boolean;
    /**
     * @remarks
     * Provides visibility change events
     *
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    /**
     * @remarks
     * Adds a block list to the pane.
     *
     */
    addBlockList(value: IObservableProp<string[]>, options?: IBlockListPropertyItemOptions): IBlockListPropertyItem;
    /**
     * @remarks
     * Adds a block table to the pane.
     *
     */
    addBlockTable(options?: IBlockTablePropertyItemOptions): IBlockTablePropertyItem;
    /**
     * @remarks
     * Adds a togglable boolean item to the pane.
     *
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    /**
     * @remarks
     * Adds a button to the pane and binds the specified action to
     * the button interaction.
     *
     */
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    /**
     * @remarks
     * Adds a pane for grouped button layout.
     *
     */
    addButtonPane(options?: IButtonPanePropertyItemOptions): IButtonPanePropertyItem;
    /**
     * @remarks
     * Adds a tree view for collections with folders and entries.
     *
     */
    addCollectionTree(options: ICollectionTreePropertyItemOptions): ICollectionTreePropertyItem;
    /**
     * @remarks
     * Adds a color picker item to the pane.
     *
     */
    addColorPicker(
        value: IObservableProp<RGBA>,
        options?: IColorPickerPropertyItemOptions,
    ): IColorPickerPropertyItem;
    /**
     * @remarks
     * Adds a Color Timeline item to the pane.
     *
     */
    addColorTimeline(
        value: IObservableProp<number>,
        options?: IColorTimelinePropertyItemOptions,
    ): IColorTimelinePropertyItem;
    /**
     * @remarks
     * Adds a combo box item to the pane.
     *
     */
    addComboBox(value: IObservableProp<string>, options?: IComboBoxPropertyItemOptions): IComboBoxPropertyItem;
    /**
     * @remarks
     * Adds a data table to the pane.
     *
     */
    addDataTable(options?: IDataTablePropertyItemOptions): IDataTablePropertyItem;
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
     * Adds an image item to the pane.
     *
     */
    addImage(
        value: IObservableProp<string | ImageResourceData>,
        options?: IImagePropertyItemOptions,
    ): IImagePropertyItem;
    /**
     * @remarks
     * Adds a Link item to the pane.
     *
     */
    addLink(value: IObservableProp<string>, options?: ILinkPropertyItemOptions): ILinkPropertyItem;
    /**
     * @remarks
     * Adds a pane for displaying list of items in a predefined
     * layout.
     *
     */
    addListPane(options: IListPanePropertyItemOptions): IListPanePropertyItem;
    /**
     * @remarks
     * Adds a menu button property item to the pane.
     *
     */
    addMenu(
        defaultEntries: {
            params: IMenuCreationParams;
            action?: RegisteredAction<NoArgsAction>;
        }[],
        options?: IMenuPropertyItemOptions,
    ): IMenuPropertyItem;
    /**
     * @remarks
     * Adds Map item to the pane.
     *
     */
    addMinimap(mapId: string, options?: IMinimapPropertyItemOptions): IMinimapPropertyItem;
    /**
     * @remarks
     * Adds a number item to the pane.
     *
     */
    addNumber(value: IObservableProp<number>, options?: INumberPropertyItemOptions): INumberPropertyItem;
    /**
     * @remarks
     * Adds a Number Timeline item to the pane.
     *
     */
    addNumberTimeline(
        value: IObservableProp<number>,
        options?: INumberTimelinePropertyItemOptions,
    ): INumberTimelinePropertyItem;
    /**
     * @remarks
     * Adds a Progress Indicator item to the pane.
     *
     */
    addProgressIndicator(options?: IProgressIndicatorPropertyItemOptions): IProgressIndicatorPropertyItem;
    /**
     * @remarks
     * Adds a proxy view of another supported pane
     *
     */
    addProxyPane(paneId: string): void;
    /**
     * @remarks
     * Adds an editable string item to the pane
     *
     */
    addString(value: IObservableProp<string>, options?: IStringPropertyItemOptions): IStringPropertyItem;
    /**
     * @remarks
     * Adds a tag container to the pane.
     *
     */
    addTagContainer(options?: ITagContainerPropertyItemOptions): ITagContainerPropertyItem;
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
     * Adds a Vector2 item to the pane.
     *
     */
    addVector2(
        value: IObservableProp<Vector2>,
        options?: IVector2PropertyItemOptions,
    ): IVector2PropertyItem;
    /**
     * @remarks
     * Adds a Vector3 item to the pane.
     *
     */
    addVector3(
        value: IObservableProp<Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;
    /**
     * @remarks
     * Adds a Vector3 Timeline item to the pane.
     *
     */
    addVector3Timeline(
        value: IObservableProp<number>,
        options?: IVector3TimelinePropertyItemOptions,
    ): IVector3TimelinePropertyItem;
    /**
     * @remarks
     * Begins pane construction for batching property item
     * additions
     *
     */
    beginConstruct(): void;
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
     * Finalizes pane construction and synchronizes item data
     *
     */
    endConstruct(): void;
    /**
     * @remarks
     * Expand the pane.
     *
     */
    expand(): void;
    /**
     * @remarks
     * Returns pane title.
     *
     */
    getTitle(): LocalizedString | undefined;
    /**
     * @remarks
     * Removes an existing sub pane.
     *
     */
    removeSubPane(paneToRemove: IPropertyPane): boolean;
    /**
     * @remarks
     * Updates title of pane.
     *
     * @param newTitle
     * New title
     */
    setTitle(newTitle: LocalizedString | undefined): void;
    /**
     * @remarks
     * Shows only the specified sub-pane, hiding all others
     *
     * @param subPaneId
     * Identifier of the sub pane to display.
     */
    toggleSubPaneVisibility(subPaneId: string | undefined): void;
}
