/* IMPORT */ import { IListPaneEntry, ListPaneEntryMap, ListPaneEntryType, LocalizedString } from '..';

/**
 * List Pane slot
 */
export interface IListPaneSlot {
    /**
     * @remarks
     * Count of entries.
     *
     */
    readonly entryCount: number;
    /**
     * @remarks
     * Unique identifier of the slot.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Unique identifier of the parent pane.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * Selected state of the slot.
     *
     */
    readonly selected: boolean;
    /**
     * @remarks
     * List of tags associated with the slot.
     *
     */
    readonly tags: ReadonlyArray<string>;
    /**
     * @remarks
     * Count of entries.
     *
     */
    readonly title: LocalizedString;
    /**
     * @remarks
     * Finds the entry with the index if it exists.
     *
     * @param index
     * Sequence index of the entry in the slot.
     * @param type
     * Optional type check for the entry.
     */
    getEntry<K extends ListPaneEntryType | undefined = undefined>(
        index: number,
        type?: K,
    ): (K extends ListPaneEntryType ? ListPaneEntryMap[K] : IListPaneEntry) | undefined;
    /**
     * @remarks
     * @returns
     * User data associated with the slot.
     */
    getUserData(): unknown;
    /**
     * @remarks
     * Updates selected state of the slot.
     *
     * @param selected
     * New selected state.
     */
    setSelected(selected: boolean): void;
    /**
     * @remarks
     * Updates tags of the slot.
     *
     * @param tags
     * New tag list.
     */
    setTags(tags: string[] | undefined): void;
    /**
     * @remarks
     * Updates title of the slot.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Updates user data associated with the slot
     *
     * @param data
     * New user data.
     */
    setUserData(data: unknown): void;
}
