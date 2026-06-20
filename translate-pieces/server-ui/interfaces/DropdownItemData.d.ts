/* IMPORT */ import { ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * Represents a single item in a dropdown component.
 */
export interface DropdownItemData {
    /**
     * @remarks
     * Optional descriptive text shown around the dropdown when
     * this item is selected.
     *
     */
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * The text displayed for this item in the dropdown list.
     *
     */
    label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    /**
     * @remarks
     * The numeric value associated with this dropdown item. This
     * is the value the bound ObservableNumber will be set to when
     * the player selects this item.
     *
     */
    value: number;
}
