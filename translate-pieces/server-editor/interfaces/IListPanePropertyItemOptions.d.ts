/* IMPORT */ import { IListPaneSlot, IPropertyItemOptionsBase, ListPaneSlotConfiguration, ListPaneSlotCreationProps, ListPaneViewFilter, ListPaneViewSortType, LocalizedString } from '..';

/**
 * Optional properties for List Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Default slots to initialize the list with. If undefined, the
     * list will be empty.
     *
     */
    defaultSlots?: ListPaneSlotCreationProps[];
    /**
     * @remarks
     * If true, pane height will not change based on slot count. If
     * undefined, it will default to false
     *
     */
    fixedHeight?: boolean;
    /**
     * @remarks
     * This will be the height of the list within the pane
     *
     */
    height?: number;
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
     * Slot configuration for the list. The slot entry layout must
     * be predefined, and using an incorrect layout while creating
     * slots will throw an error.
     *
     */
    slotConfig: ListPaneSlotConfiguration;
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
