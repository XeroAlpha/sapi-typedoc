/* IMPORT */ import { IPane, IPropertyItemBase, ITimelinePlayerEntry, ITimelinePlayerGroup, IVector3TimelinePlayerEntry, IVector3TimelinePlayerEntryOptions, LocalizedString, TimelinePlayerPlaybackState } from '..';

/**
 * A pane that hosts a single playhead and a collection of
 * timeline entries that share it
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITimelinePlayer extends IPropertyItemBase, IPane {
    /**
     * @remarks
     * Number of timeline entries owned by this player.
     *
     */
    readonly entryCount: number;
    /**
     * @remarks
     * Add a group to the dropdown.
     *
     * @param id
     * Unique identifier for the group.
     * @param name
     * Localized display name for the group.
     * @param tooltip
     * Optional localized tooltip shown when hovering over the
     * dropdown entry.
     */
    addGroup(id: string, name: LocalizedString, tooltip?: LocalizedString): void;
    /**
     * @remarks
     * Add a Vector3 timeline entry to the player.
     *
     * @param options
     * Per-entry options.
     */
    addVector3Timeline(options: IVector3TimelinePlayerEntryOptions): IVector3TimelinePlayerEntry;
    /**
     * @remarks
     * Get the total duration in seconds.
     *
     */
    getDuration(): number;
    /**
     * @remarks
     * Look up an entry by id.
     *
     * @param id
     * Entry identifier.
     */
    getEntryById(id: string): ITimelinePlayerEntry | undefined;
    /**
     * @remarks
     * Look up an entry by index.
     *
     * @param index
     * Entry index.
     */
    getEntryByIndex(index: number): ITimelinePlayerEntry | undefined;
    /**
     * @remarks
     * Get the current list of groups.
     *
     */
    getGroups(): ITimelinePlayerGroup[];
    /**
     * @remarks
     * Get the current playback state.
     *
     */
    getPlaybackState(): TimelinePlayerPlaybackState;
    /**
     * @remarks
     * Get the decimal precision used for keyframe time spacing.
     *
     */
    getPrecision(): number;
    /**
     * @remarks
     * Get the currently selected group identifier.
     *
     */
    getSelectedGroupId(): string;
    /**
     * @remarks
     * Get the playhead time in seconds.
     *
     */
    getTime(): number;
    /**
     * @remarks
     * Remove an entry by id.
     *
     * @param id
     * Entry identifier.
     */
    removeEntry(id: string): boolean;
    /**
     * @remarks
     * Remove a group from the dropdown.
     *
     * @param id
     * Identifier of the group to remove.
     */
    removeGroup(id: string): void;
    /**
     * @remarks
     * Rename a group in the dropdown.
     *
     * @param id
     * Identifier of the group to rename.
     * @param newName
     * New localized display name.
     */
    renameGroup(id: string, newName: LocalizedString): void;
    /**
     * @remarks
     * Set the total duration in seconds.
     *
     * @param duration
     * New duration in seconds.
     */
    setDuration(duration: number): void;
    /**
     * @remarks
     * Set the playback state.
     *
     * @param state
     * New playback state.
     */
    setPlaybackState(state: TimelinePlayerPlaybackState): void;
    /**
     * @remarks
     * Set the decimal precision used for keyframe time spacing.
     *
     * @param precision
     * Decimal precision.
     */
    setPrecision(precision: number): void;
    /**
     * @remarks
     * Set the selected group.
     *
     * @param id
     * Identifier of the group to select.
     */
    setSelectedGroupId(id: string): void;
    /**
     * @remarks
     * Set the playhead time.
     *
     * @param time
     * New playhead time in seconds.
     */
    setTime(time: number): void;
}
