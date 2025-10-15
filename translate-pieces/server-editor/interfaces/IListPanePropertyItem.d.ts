/* IMPORT */ import { IListPaneSlot, IPane, IPropertyItemBase, ListPaneSlotCreationProps, ListPaneViewFilter, ListPaneViewSortType } from '..';

/**
 * A property item which supports Sub Pane properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItem extends IPropertyItemBase, IPane {
    /**
     * @remarks
     * Count of the slots managed by the list.
     *
     */
    readonly slotCount: number;
    /**
     * @remarks
     * Current sorting type for the pane slots
     *
     */
    readonly viewSortType: ListPaneViewSortType;
    /**
     * @remarks
     * Adds a new slot to the list.
     *
     */
    addSlot(params: ListPaneSlotCreationProps): IListPaneSlot;
    /**
     * @remarks
     * Finds the slot with the identifier.
     *
     * @param id
     * Unique identifier of the slot.
     */
    getSlotById(id: string): IListPaneSlot | undefined;
    /**
     * @remarks
     * Finds the slot with the index.
     *
     * @param index
     * Index of the slot in the component list.
     */
    getSlotByIndex(index: number): IListPaneSlot | undefined;
    /**
     * @remarks
     * @returns
     * Active view filter
     */
    getViewFilter(): ListPaneViewFilter | undefined;
    /**
     * @remarks
     * Removes the slot from the list.
     *
     * @param id
     * Unique identifier of the slot.
     */
    removeSlot(id: string): void;
    /**
     * @remarks
     * Selects slot by id.
     *
     * @param id
     * Unique identifier of the slot.
     * @param deselectOtherSlots
     * Deselects already selected slots if defined.
     */
    selectSlot(id: string, deselectOtherSlots?: boolean): void;
    /**
     * @remarks
     * Filters displaying slots to match the define properties
     *
     * @param filter
     * Slots that don't match filter properties won't be included.
     */
    setViewFilter(filter: ListPaneViewFilter | undefined): void;
    /**
     * @remarks
     * Updates how slots will be sorted in the view
     *
     * @param sortType
     * New sort type, it undefined Default will be used.
     */
    setViewSortType(sortType: ListPaneViewSortType | undefined): void;
    /**
     * @remarks
     * Updates all slots with the new list.
     *
     * @param newSlots
     * Creation properties for the new slots.
     */
    updateSlots(newSlots: ListPaneSlotCreationProps[]): void;
}
