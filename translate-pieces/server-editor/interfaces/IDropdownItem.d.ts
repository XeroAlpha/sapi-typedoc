export interface IDropdownItem {
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    readonly displayAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    readonly displayStringId: string;
    /**
     * @remarks
     * The selectable value of the DropDown item.
     *
     */
    readonly value: number;
}