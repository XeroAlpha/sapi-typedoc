/* IMPORT */ import { IListPaneSlot, IPropertyItemOptionsBase, ListPaneCategory, ListPaneHeight, ListPaneSlotConfiguration, ListPaneSlotCreationProps, ListPaneSortOption, ListPaneViewFilter, LocalizedString } from '..';

/**
 * Optional properties for List Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IListPanePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Categories available to sort or group list pane slots.
     *
     */
    categories?: Record<string, ListPaneCategory>;
    /**
     * @remarks
     * Default slots to initialize the list with. If undefined, the
     * list will be empty.
     *
     */
    defaultSlots?: ListPaneSlotCreationProps[];
    /**
     * @remarks
     * Height behavior for the list. A number is treated as an
     * expand maximum for compatibility.
     *
     */
    height?: number | ListPaneHeight;
    /**
     * @remarks
     * Removes spacing around clickable list slots.
     *
     */
    noMargins?: boolean;
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
     * Built-in sort type or custom sort category ID to initially
     * select.
     *
     */
    viewSortType?: ListPaneSortOption;
}
