/* IMPORT */ import { CollectionTreeSortType, ICollectionTreeFolder, ICollectionTreeFolderOptions, IPropertyItemBase } from '..';

/**
 * A property item which supports creating nested folders of
 * collection items
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ICollectionTreePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Count of the child folders
     *
     */
    readonly folderCount: number;
    /**
     * @remarks
     * Sort type for the folders.
     *
     */
    readonly viewSortType: CollectionTreeSortType;
    /**
     * @remarks
     * Creates a new folder at the root of the collection
     *
     * @param options
     * Options to create a folder
     */
    addFolder(options: ICollectionTreeFolderOptions): ICollectionTreeFolder;
    /**
     * @remarks
     * Iterates over the first layer of folders
     *
     * @param callback
     * Returning false will stop the iteration
     */
    forEachFolder(callback: (folder: ICollectionTreeFolder) => boolean): void;
    /**
     * @remarks
     * Find the folder with the id if it exists at the root
     *
     * @param id
     * Identifier of the folder
     */
    getFolder(id: string): ICollectionTreeFolder | undefined;
    /**
     * @remarks
     * Updates the folder sort type for the whole view
     *
     * @param sortType
     * New sort type
     */
    setViewSortType(sortType: CollectionTreeSortType | undefined): void;
}
