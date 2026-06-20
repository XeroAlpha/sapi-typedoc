/* IMPORT */ import { ObservableBoolean } from '..';

/**
 * Options for configuring a spacer component.
 */
export interface SpacingOptions {
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the spacer
     * is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
