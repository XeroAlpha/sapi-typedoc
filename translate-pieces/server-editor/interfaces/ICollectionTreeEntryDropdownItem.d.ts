/* IMPORT */ import { ICollectionTreeEntryDropdownItemMenuOption, ICollectionTreeEntryItem } from '..';

export interface ICollectionTreeEntryDropdownItem extends ICollectionTreeEntryItem {
    /**
     * @remarks
     * Value of the entry item.
     *
     */
    readonly value: string;
    /**
     * @remarks
     * Update list of dropdown menu options.
     *
     * @param menuOptions
     * New list of updated menu options
     * @param newValue
     * New value value to use for the dropdown
     */
    updateMenuOptions(menuOptions: ICollectionTreeEntryDropdownItemMenuOption[], newValue?: string): void;
}
