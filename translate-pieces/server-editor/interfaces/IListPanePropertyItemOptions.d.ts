/* IMPORT */ import { IListPaneSlot, IPropertyItemOptionsBase, ListPaneSlotCreationProps, ListPaneSlotLayout, ListPaneViewFilter, ListPaneViewSortType, LocalizedString } from '..';

/**
 * Optional properties for List Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * This will be the height of the list withing the pane
     *
     */
    defaultSlots?: ListPaneSlotCreationProps[];
    /**
     * @remarks
     * This will be the height of the list withing the pane
     *
     */
    height?: number;
    /**
     * @remarks
     * Layout for the list will need to be predefined, and using
     * wrong layout shape while creating slots will throw
     *
     */
    layout: ListPaneSlotLayout;
    /**
     * @remarks
     * This callback is fired whenever a clickable slot is pressed
     *
     */
    onSlotClicked?: (slot: IListPaneSlot) => void;
    /**
     * @remarks
     * This callback is fired whenever selected state of a slot is
     * changed
     *
     */
    onSlotSelectionChange?: (slot: IListPaneSlot, state: boolean) => void;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Filter properties for viewing subset of slots.
     *
     */
    viewFilter?: ListPaneViewFilter;
    /**
     * @remarks
     * Sort type for the slots in the view. If undefined, default
     * list order will be used.
     *
     */
    viewSortType?: ListPaneViewSortType;
}
