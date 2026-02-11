/* IMPORT */ import { CustomForm, Observable, UIRawMessage } from '..';

/**
 * @beta
 * The options for including a button in {@link CustomForm}.
 */
export interface ButtonOptions {
    /**
     * @remarks
     * Whether or not this button is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * The tooltip for this button, shown when hovering the button.
     *
     */
    tooltip?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this button is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}
