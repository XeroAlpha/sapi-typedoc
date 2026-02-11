/* IMPORT */ import { CustomForm, Observable, UIRawMessage } from '..';

/**
 * @beta
 * The options for including a dropdown in {@link CustomForm}.
 */
export interface DropdownOptions {
    /**
     * @remarks
     * The description of the dropdown, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this dropdown is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this dropdown is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}
