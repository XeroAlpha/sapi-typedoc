/* IMPORT */ import { ImageResourceData } from '..';

/**
 * Properties of dropdown property item menu entry
 */
export interface IDropdownPropertyItemEntry {
    /**
     * @remarks
     * Optional image of the dropdown entry.
     *
     */
    readonly imageData?: ImageResourceData;
    /**
     * @remarks
     * Localized display text of the entry.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: number;
}
