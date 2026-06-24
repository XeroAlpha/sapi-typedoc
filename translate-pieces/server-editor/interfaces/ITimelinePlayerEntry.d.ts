/* IMPORT */ import { LocalizedString } from '..';

/**
 * Common interface for all entries owned by a Timeline Player
 * pane
 */
export interface ITimelinePlayerEntry {
    /**
     * @remarks
     * Unique identifier for the entry.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Identifier of the parent Timeline Player pane.
     *
     */
    readonly paneId: string;
    /**
     * @remarks
     * Display title shown next to the entry's graph.
     *
     */
    readonly title: LocalizedString | undefined;
    /**
     * @remarks
     * Updates title of the entry.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
}
