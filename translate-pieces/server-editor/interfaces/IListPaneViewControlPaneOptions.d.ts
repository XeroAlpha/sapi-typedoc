/* IMPORT */ import { IListViewControlPaneOptions, ListPaneViewSortType, ListViewControlFilterFlags, LocalizedString } from '..';

export interface IListPaneViewControlPaneOptions extends IListViewControlPaneOptions {
    /**
     * @remarks
     * Flags to determine visible filters. If undefined it will be
     * All.
     *
     */
    filterFlags?: ListViewControlFilterFlags;
    /**
     * @remarks
     * This function will be called whenever the filter is changed
     * by the user
     *
     */
    onFilterChanged?: (visibleSlotIds: string[]) => void;
    /**
     * @remarks
     * Called when the user selects an entry in the "Show"
     * dropdown. Receives the zero-based option index from the
     * provided showOptions.
     *
     */
    onShowOptionChanged?: (optionIndex: number) => void;
    /**
     * @remarks
     * When true, the view control renders inline at the bottom of
     * the list element instead of in a footer.
     *
     */
    renderInline?: boolean;
    /**
     * @remarks
     * Labels for the "Show" dropdown. When provided, a dropdown is
     * shown and onShowOptionChanged is called with the selected
     * index whenever the user changes the selection.
     *
     */
    showOptions?: {
        label: LocalizedString;
        value: number;
    }[];
    /**
     * @remarks
     * Custom sort options. If undefined, list pane sort options
     * will be used.
     *
     */
    sortOptions?: ListPaneViewSortType[];
}
