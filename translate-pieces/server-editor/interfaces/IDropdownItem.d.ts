/**
 * Properties of dropdown property item children
 */
export interface IDropdownItem {
    /**
     * @remarks
     * Localized display text of the dropdown item.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * The selectable value of the dropdown item.
     *
     */
    readonly value: number;
}