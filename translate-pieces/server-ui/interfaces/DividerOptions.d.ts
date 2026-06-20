/* IMPORT */ import { ObservableBoolean } from '..';

/**
 * Options for configuring a divider component in a CustomForm.
 */
export interface DividerOptions {
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the
     * divider is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
