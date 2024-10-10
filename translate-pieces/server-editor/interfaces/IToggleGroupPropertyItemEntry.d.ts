/* IMPORT */ import { LocalizedString } from '../index';

/**
 * Properties of toggle group property item list entry
 */
export interface IToggleGroupPropertyItemEntry {
    /**
     * @remarks
     * Optional icon of the dropdown entry.
     *
     */
    readonly icon?: string;
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label?: LocalizedString;
    /**
     * @remarks
     * Optional tooltip description text of the entry.
     *
     */
    readonly tooltip?: LocalizedString;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: number;
}