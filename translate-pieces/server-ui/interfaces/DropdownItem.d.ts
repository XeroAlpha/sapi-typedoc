/* IMPORT */ import { CustomForm } from '..';

/**
 * @beta
 * Dropdown data for use in {@link CustomForm}.
 */
export interface DropdownItem {
    /**
     * @remarks
     * The description of the dropdown item shown when it is
     * selected.
     *
     */
    description?: string;
    /**
     * @remarks
     * The label of the dropdown item in the dropdown.
     *
     */
    label: string;
    /**
     * @remarks
     * The value the dropdown will be set to when this item is
     * selected.
     *
     */
    value: number;
}
