/* IMPORT */ import { LocalizedString } from '..';

/**
 * List Pane slot optional properties
 */
export interface IListPaneSlotOptions {
    /**
     * @remarks
     * Values associated with list pane category IDs.
     *
     */
    categories?: Record<string, string>;
    /**
     * @remarks
     * Creation time used by the built-in creation-time sort
     * options.
     *
     */
    creationTime?: number;
    /**
     * @remarks
     * Modified time used by the built-in modified-time sort
     * options.
     *
     */
    modifiedTime?: number;
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
