/* IMPORT */ import { LocalizedString } from '..';

/**
 * A group entry shown in a Timeline Player's group dropdown
 */
export interface ITimelinePlayerGroup {
    /**
     * @remarks
     * Unique identifier for the group.
     *
     */
    id: string;
    /**
     * @remarks
     * Localized display name shown in the dropdown.
     *
     */
    name: LocalizedString;
    /**
     * @remarks
     * Optional localized tooltip shown when hovering over the
     * dropdown entry.
     *
     */
    tooltip?: LocalizedString;
}
