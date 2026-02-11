/* IMPORT */ import { CustomForm, Observable, UIRawMessage } from '..';

/**
 * @beta
 * The options for including a toggle in {@link CustomForm}.
 */
export interface ToggleOptions {
    /**
     * @remarks
     * The description for this toggle, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this toggle is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this toggle is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}
