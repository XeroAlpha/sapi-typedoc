/* IMPORT */ import { LocalizedString } from '..';

/**
 * Properties of toggle group property item list entry
 */
export interface IComboBoxPropertyItemEntry {
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label?: LocalizedString;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: string;
}
