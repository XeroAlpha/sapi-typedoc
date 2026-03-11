/* IMPORT */ import { IListViewControlPaneOptions, ListPaneViewSortType, ListViewControlFilterFlags } from '..';

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
     * Custom sort options. If undefined, list pane sort options
     * will be used.
     *
     */
    sortOptions?: ListPaneViewSortType[];
}
