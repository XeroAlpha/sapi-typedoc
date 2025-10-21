/* IMPORT */ import { LocalizedString } from '..';

/**
 * List Pane slot optional properties
 */
export interface IListPaneSlotOptions {
    /**
     * @remarks
     * List of tags associated with the slot.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * Localized title of the slot.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Unique identifier to use for the slot.
     *
     */
    uniqueId?: string;
    /**
     * @remarks
     * Optional user data that can be associated with a slot.
     *
     */
    userData?: unknown;
}
