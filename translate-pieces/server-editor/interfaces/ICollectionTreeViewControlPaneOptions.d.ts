/* IMPORT */ import { CollectionTreeSortType, IListViewControlPaneOptions } from '..';

export interface ICollectionTreeViewControlPaneOptions extends IListViewControlPaneOptions {
    /**
     * @remarks
     * This function will be called whenever the filter is changed
     * by the user
     *
     */
    onFilterChanged?: (visibleFolders: string[]) => void;
    /**
     * @remarks
     * Custom sort options. If undefined, collection tree sort
     * options will be used.
     *
     */
    sortOptions?: CollectionTreeSortType[];
}
