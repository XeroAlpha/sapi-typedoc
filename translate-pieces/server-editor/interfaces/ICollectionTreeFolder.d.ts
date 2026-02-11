/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ICollectionTreeEntry, ICollectionTreeEntryOptions, ICollectionTreeFolderHeaderActionParams, ICollectionTreeFolderOptions, LocalizedString } from '..';

/**
 * Container for collection items
 */
export interface ICollectionTreeFolder {
    /**
     * @remarks
     * Count of the entries
     *
     */
    readonly entryCount: number;
    /**
     * @remarks
     * Expanded state of the folder
     *
     */
    readonly expanded: boolean;
    /**
     * @remarks
     * Count of the child folders
     *
     */
    readonly folderCount: number;
    /**
     * @remarks
     * Unique identifier of the folder
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Parent folder
     *
     */
    readonly parent: ICollectionTreeFolder | undefined;
    /**
     * @remarks
     * Selected state of the folder
     *
     */
    readonly selected: boolean;
    /**
     * @remarks
     * Title of the folder
     *
     */
    readonly title: LocalizedString;
    /**
     * @remarks
     * User data associated with the folder
     *
     */
    readonly userData: unknown;
    /**
     * @remarks
     * Adds a new entry to the folder
     *
     * @param options
     * Options to create a folder
     */
    addEntry(options: ICollectionTreeEntryOptions): ICollectionTreeEntry;
    /**
     * @remarks
     * Creates a new child folder
     *
     * @param options
     * Options to create a folder
     */
    addFolder(options: ICollectionTreeFolderOptions): ICollectionTreeFolder;
    /**
     * @remarks
     * Iterates over entries within the folder
     *
     * @param callback
     * Returning false will stop the iteration
     */
    forEachEntry(callback: (entry: ICollectionTreeEntry, index: number) => boolean): void;
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
     * Iterates over the first layer of folders
     *
     * @param callback
     * Returning false will stop the iteration
     */
    forEachFolder(callback: (folder: ICollectionTreeFolder) => boolean): void;
    /**
     * @remarks
     * Gets the entry by its unique identifier
     *
     * @param id
     * Identifier of the folder
     */
    getEntryById(id: string): ICollectionTreeEntry | undefined;
    /**
     * @remarks
     * Gets the entry at the index
     *
     * @param index
     * Index of the entry
     */
    getEntryByIndex(index: number): ICollectionTreeEntry | undefined;
    /**
     * @remarks
     * Find the folder with the id if it exists
     *
     * @param id
     * Identifier of the folder
     */
    getFolder(id: string): ICollectionTreeFolder | undefined;
    /**
     * @remarks
     * Removes the entry by its unique identifier if it exists
     *
     * @param id
     * Identifier of the folder
     */
    removeEntryById(id: string): boolean;
    /**
     * @remarks
     * Removes the entry at the index if it exists
     *
     * @param index
     * Index of the entry
     */
    removeEntryByIndex(index: number): boolean;
    /**
     * @remarks
     * Set color of the entry.
     *
     * @param color
     * New color state
     */
    setColor(color: RGBA | undefined): void;
    /**
     * @remarks
     * Set expanded state of the entry.
     *
     * @param expanded
     * New expanded state
     */
    setExpanded(expanded: boolean): void;
    /**
     * @remarks
     * Updates the header action for the folder
     *
     */
    setHeaderAction(actionParams: ICollectionTreeFolderHeaderActionParams | undefined): void;
    /**
     * @remarks
     * Set selected state of the entry.
     *
     * @param selected
     * New selected state
     */
    setSelected(selected: boolean): void;
    /**
     * @remarks
     * Set title of the entry.
     *
     * @param title
     * New title state
     */
    setTitle(title: LocalizedString): void;
}
