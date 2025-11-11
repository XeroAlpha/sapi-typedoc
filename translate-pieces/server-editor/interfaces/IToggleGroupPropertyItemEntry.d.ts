/* IMPORT */ import { BasicTooltipContent, LocalizedString } from '..';

/**
 * Properties of toggle group property item list entry
 */
export interface IToggleGroupPropertyItemEntry {
    /**
     * @remarks
     * Optional enabled state of the entry. If undefined it will be
     * true.
     *
     */
    readonly enabled?: boolean;
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
    readonly tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * The selectable value of the entry.
     *
     */
    readonly value: number;
}
