/* IMPORT */ import { ListPaneViewSortType, ListViewControlAction, ListViewControlFilterFlags } from '..';

export interface IListPaneViewControlPaneOptions {
    /**
     * @remarks
     * Default actions
     *
     */
    actions?: ListViewControlAction[];
    /**
     * @remarks
     * Flags to determine visible filters. If undefined it will be
     * All.
     *
     */
    filterFlags?: ListViewControlFilterFlags;
    /**
     * @remarks
     * This function will be called whenever user clicks an action
     *
     */
    onActionClicked?: (id: string) => void;
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
    /**
     * @remarks
     * Initial visibility state. It undefined, it will be false.
     *
     */
    visible?: boolean;
}
